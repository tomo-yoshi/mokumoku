/*
  Warnings:

  - You are about to alter the column `name` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[snsIdentifier]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `snsIdentifier` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ADD COLUMN     "snsIdentifier" VARCHAR(255) NOT NULL,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(255);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startAt" TIMESTAMP(3) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "schedules" VARCHAR(510) NOT NULL,
    "venue" VARCHAR(255) NOT NULL,
    "hostId" TEXT NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_joinEvents" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_joinEvents_AB_unique" ON "_joinEvents"("A", "B");

-- CreateIndex
CREATE INDEX "_joinEvents_B_index" ON "_joinEvents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_snsIdentifier_key" ON "User"("snsIdentifier");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_joinEvents" ADD CONSTRAINT "_joinEvents_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_joinEvents" ADD CONSTRAINT "_joinEvents_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
