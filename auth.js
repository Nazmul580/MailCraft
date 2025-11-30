import { MongoDBAdapter } from "@auth/mongodb-adapter";
import Google from "next-auth/providers/google";
import clientPromise from "./lib/mongoClientPromise";
import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { dbConnect } from "./lib/dbConnect";
import { User } from "./models/userModel";
import bcrypt from "bcryptjs";

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
});
