import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');
  
  // Add your seed data here
  // Example:
  // await prisma.user.create({
  //   data: {
  //     email: 'admin@example.com',
  //     name: 'Admin',
  //   },
  // });
  
  console.log('✅ Seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export default main;
