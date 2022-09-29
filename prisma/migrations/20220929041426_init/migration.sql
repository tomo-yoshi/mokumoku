/*
  Warnings:

  - You are about to drop the column `name` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `snsIdentifier` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[twitterId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sopts` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_snsIdentifier_key";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "name",
ADD COLUMN     "sopts" INTEGER NOT NULL,
ADD COLUMN     "title" VARCHAR(255) NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "schedules" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "snsIdentifier",
ADD COLUMN     "email" VARCHAR(255),
ADD COLUMN     "twitterId" VARCHAR(255);

-- CreateIndex
CREATE UNIQUE INDEX "User_twitterId_key" ON "User"("twitterId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
