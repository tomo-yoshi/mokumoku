// const { PrismaClient } = require('@prisma/client')
import { PrismaClient } from '@prisma/client';

module.exports = {
  prisma: new PrismaClient(),
}
