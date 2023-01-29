import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import clientPromise from "/lib/mongodb";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
// import { html } from "/helpers/Email/template";
import nodemailer from "nodemailer";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "lib/dbConnect";
import Users from "model/Users";
import { hashCompare } from "helpers/hashing";

export default NextAuth({
  site: process.env.NEXTAUTH_URL,
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.JWT_SECRET_KEY,
  session: {
    strategy: "jwt", // || "database"
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  providers: [
    GoogleProvider({
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
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        await dbConnect().catch((error) => {
          error: "Connection Failed...!";
        });
        let user = await Users.findOne({ email: credentials.email });
        if (!user) {
          throw new Error(
            "Couldn't find User " + credentials.email + "please Register First"
          );
        }
        const checkedHash = hashCompare(credentials.password, user.password);
        if (!checkedHash || user.email !== credentials.email) {
          throw new Error("User and password is incorrect");
        }
        return user;
      },
    }),
    // EmailProvider({
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: process.env.EMAIL_SERVER_PORT,
    //     auth: {
    //       user: process.env.EMAIL_FROM,
    //       pass: process.env.EMAIL_SERVER_PASSWORD,
    //     },
    //   },
    //   from: process.env.EMAIL_FROM,
    //   async sendVerificationRequest({
    //     identifier: email,
    //     url,
    //     provider: { server, from },
    //   }) {
    //     const { host } = new URL(url);
    //     const transport = nodemailer.createTransport(server);
    //     await transport.sendMail({
    //       to: email,
    //       from,
    //       subject: `Sign in to ${host}`,
    //       html: html({ url, host, email }),
    //     });
    //   },
    // }),
  ],
  pages: {
    signIn: "/auth/login",
    error: "/error",
  },
  debug: true,
});
