import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { Awaitable, RequestInternal } from 'next-auth';
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import connect from '@/utils/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';


interface Credentials {
  email: string;
  password: string;
}


const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;  

const id = "credentials";
const name = "Credentials";  

if (!clientId || !clientSecret || !id || !name) {
  throw new Error("Google OAuth credentials are missing");
}

const options = {
  providers: [
    GoogleProvider({
      clientId: clientId,
      clientSecret: clientSecret,
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',

      //@ts-ignore
      async authorize(credentials: Credentials) {
        // connect to your database
        await connect();

        // validate the credentials
        try {
          const user = await User.findOne({ email: credentials.email });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Wrong Credentials");
            }
          } else {
            return null; // if user not found, return null
          }
        } catch (error) {
          console.error(error);
          return null; // if an error occurs, return null
        }
      },
    })
  ],
  pages: {
    error: '/auth/login'
  }
}

const handler = (req: NextApiRequest, res: NextApiResponse): Promise<void> => NextAuth(req, res, options);

export { handler as GET, handler as POST };
