import { MongoDBAdapter } from "@auth/mongodb-adapter";
import Google from "next-auth/providers/google";
import clientPromise from "./lib/mongoClientPromise";
import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { dbConnect } from "./lib/dbConnect";
import { User } from "./models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import refreshGoogleAccessToken from "./lib/refreshGoogleAccessToken";
import refreshCredentialsAccessToken from "./lib/refreshCredentialsAccessToken";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: {
    strategy: "jwt",
  },
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    CredentialProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials) return null;
        console.log("CREDENTIALS =>", credentials);

        try {
          await dbConnect();

          const user = await User.findOne({ email: credentials.email }).exec();
          if (!user) throw new Error("user not found!");
          const isMatch = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!isMatch) throw new Error("invalid email or password!");

          const accessToken = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_ACCESS_TOKEN_SECRET,
            { expiresIn: "1h" }
          );
          const refreshToken = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_REFRESH_TOKEN_SECRET,
            { expiresIn: "30d" }
          );

          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
            accessToken,
            refreshToken,
            expiresIn: Date.now() + 3600000,
          };
        } catch (error) {
          console.log(error.message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // on initial singIn either (provider or credentials)
      if (user && account) {
        token.user = {
          id: user.id,
          email: user.email,
          name: user.name ?? user.email.split("@")[0],
        };
        token.provider = account.provider || "credentials";
        token.accessToken = account.access_token ?? user.accessToken;
        token.accessTokenExpires = account.expires_at
          ? account.expires_at * 1000
          : Date.now() + (user.expiresIn ?? 3600000);

        token.refreshToken = account.refresh_token ?? user.refreshToken;
        return token;
      }

      // if token is not expired, just return it
      if (token.accessToken && Date.now() < token.accessTokenExpires - 15000)
        return token;

      // refresh token based on provider
      if (token.provider === "google") {
        return await refreshGoogleAccessToken(token);
      } else {
        return await refreshCredentialsAccessToken(token);
      }
    },
    async session({ session, token }) {
      session.user = token.user || {};
      session.user.name = session.user.name ?? token.user.name;
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.expires_at = token.accessTokenExpires;
      session.provider = token.provider;

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  trustHost: true,
});
