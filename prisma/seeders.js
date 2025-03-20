const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.Ikeaproduct.deleteMany({});
  await prisma.Ikeaproduct.createMany({
    data: [
      {
        name: 'Furniture',
        description: 'Furniture desc.',
        price: 1500.99,
      },
      {
        name: 'Tables',
        description: 'Tables Desc.',
        price: 799.99,
      },
      {
        name: 'Home Decor',
        description: 'Home Decor Desc.',
        price: 199.99,
      }
    ],
  });

  console.log('Sample products seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
