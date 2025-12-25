// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { CustomPrismaAdapter } from "@/lib/customPrismaAdapter";  // <-- New import
import bcrypt from "bcryptjs";
import {prisma} from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: CustomPrismaAdapter(),  // <-- Use custom adapter
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        });

        if (!user || !user.passwordHash) return null;

        const isValid = await bcrypt.compare(
          credentials.password as string,
          user.passwordHash
        );

        if (!isValid) return null;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          geniusLevel: user.geniusLevel ?? 0,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.geniusLevel = user.geniusLevel;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub as string;
        session.user.geniusLevel = token.geniusLevel as number;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

// Add these two lines at the end of the file
export const GET = handlers.GET;
export const POST = handlers.POST;