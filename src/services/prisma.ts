import { PrismaClient } from '@prisma/client'

/**
 * Log prop used for debbuging
 * More here: https://prisma2.netlify.com/reference/tools-and-interfaces/prisma-client/logging
 */
const prisma = new PrismaClient({
  // log: ['query', 'info', 'warn']
})

export {
  prisma,
  PrismaClient,
}