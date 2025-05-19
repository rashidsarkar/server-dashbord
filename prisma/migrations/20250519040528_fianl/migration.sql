/*
  Warnings:

  - You are about to drop the column `interests` on the `About` table. All the data in the column will be lost.
  - You are about to drop the column `aboutId` on the `Education` table. All the data in the column will be lost.
  - Added the required column `education` to the `About` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Education" DROP CONSTRAINT "Education_aboutId_fkey";

-- DropIndex
DROP INDEX "About_email_key";

-- AlterTable
ALTER TABLE "About" DROP COLUMN "interests",
ADD COLUMN     "education" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Education" DROP COLUMN "aboutId";
