import { PrismaClient } from "@prisma/client";

//jediná instance prisma clienta pro celou aplikaci
const prisma = new PrismaClient();

export default prisma;
