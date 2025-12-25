// lib/customPrismaAdapter.ts
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import type { Adapter } from "@auth/core/adapters";

export function CustomPrismaAdapter(): Adapter {
  const baseAdapter = PrismaAdapter(prisma) as Adapter;

  return {
    ...baseAdapter,
    async createUser(user) {
      return await prisma.user.create({
        data: {
          // Standard fields from Auth.js
          name: user.name ?? null,
          email: user.email ?? "",
          image: user.image ?? null,
          emailVerified: user.emailVerified ?? null,
          // Your custom defaults
          geniusLevel: 0,  // Required for new users
          // passwordHash remains null for OAuth/social logins
        },
      });
    },
    // Keep getUser override to return full custom fields
    async getUser(id) {
      return await prisma.user.findUnique({
        where: { id },
      });
    },
    // Optional: Override getUserByEmail for consistency
    async getUserByEmail(email) {
      return await prisma.user.findUnique({
        where: { email },
      });
    },
  };
}