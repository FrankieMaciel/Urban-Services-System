// prisma/seed.ts

import { PrismaClient } from '../generated/prisma';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const requestType1 = await prisma.requestType.upsert({
    where: { id: 0 },
    update: {},
    create: {
        id: 0,
        requestName: 'troca de lâmpada',
    },
  });

  const requestType2 = await prisma.requestType.upsert({
    where: { id: 1 },
    update: {},
    create: {
        id: 1,
        requestName: 'tapa-buraco',
    },
  });

  console.log({ requestType1, requestType2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });