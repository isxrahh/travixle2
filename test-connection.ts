// test-connection.ts
import { prisma } from "@/lib/prisma";

async function test() {
  try {
    console.log("🔄 Connecting to Neon via Prisma...");
    const userCount = await prisma.user.count();
    const bookingCount = await prisma.booking.count();
    
    console.log("✅ CONNECTION SUCCESSFUL!");
    console.log(`👥 Users: ${userCount}`);
    console.log(`📅 Bookings: ${bookingCount}`);
    console.log("🚀 Ready for Auth.js + Prisma Adapter!");
  } catch (error) {
    console.error("❌ Connection failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

test();