/*
  Warnings:

  - You are about to drop the `UserEvents` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserEvents" DROP CONSTRAINT "UserEvents_eventId_fkey";

-- DropForeignKey
ALTER TABLE "UserEvents" DROP CONSTRAINT "UserEvents_userId_fkey";

-- DropTable
DROP TABLE "UserEvents";

-- CreateTable
CREATE TABLE "UserEvent" (
    "eventId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "canceledAt" TIMESTAMP(3),

    CONSTRAINT "UserEvent_pkey" PRIMARY KEY ("eventId","userId")
);

-- AddForeignKey
ALTER TABLE "UserEvent" ADD CONSTRAINT "UserEvent_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserEvent" ADD CONSTRAINT "UserEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
