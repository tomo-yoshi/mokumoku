/*
  Warnings:

  - You are about to drop the column `schedules` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `sopts` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the `_joinEvents` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `spots` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_joinEvents" DROP CONSTRAINT "_joinEvents_A_fkey";

-- DropForeignKey
ALTER TABLE "_joinEvents" DROP CONSTRAINT "_joinEvents_B_fkey";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "schedules",
DROP COLUMN "sopts",
ADD COLUMN     "spots" INTEGER NOT NULL,
ALTER COLUMN "description" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "_joinEvents";

-- CreateTable
CREATE TABLE "UserEvents" (
    "eventId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "canceledAt" TIMESTAMP(3),

    CONSTRAINT "UserEvents_pkey" PRIMARY KEY ("eventId","userId")
);

-- AddForeignKey
ALTER TABLE "UserEvents" ADD CONSTRAINT "UserEvents_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserEvents" ADD CONSTRAINT "UserEvents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
