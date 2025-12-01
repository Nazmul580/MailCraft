import { MongoDBAdapter } from "@auth/mongodb-adapter";
import Google from "next-auth/providers/google";
import clientPromise from "./lib/mongoClientPromise";
import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { dbConnect } from "./lib/dbConnect";
import { User } from "./models/userModel";
import bcrypt from "bcryptjs";

async function refreshAccessToken(token) {
  try {
    const url =
      "https://oauth2.googleapis.com/token?" +
      new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        grant_type: "refresh_token",
        refresh_token: token.refreshToken,
      });

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    const refreshedTokens = await response.json();

    if (!response.ok) throw refreshedTokens;

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.error("Refresh token error", error);
    return { ...token, error: "RefreshAccessTokenError" };
  }
}

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
          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
          };
        } catch (error) {
          console.log(error.message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // first login
      if (user && account) {
        return {
          accessToken: account.access_token,
          accessTokenExpires: account.expires_at
            ? account.expires_at * 1000
            : Date.now() + 60 * 60 * 1000,
          refreshToken: account.refresh_token,
          user,
        };
      }

      // refresh access token if expired
      if (token.accessTokenExpires && Date.now() > token.accessTokenExpires) {
        if (token.refreshToken) {
          return await refreshAccessToken(token);
        }
        return { ...token, error: "AccessTokenExpired" };
      }

      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.expires = new Date(
        token.accessTokenExpires || Date.now() + 24 * 60 * 60 * 1000
      ).toISOString();
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  trustHost: true,
});
