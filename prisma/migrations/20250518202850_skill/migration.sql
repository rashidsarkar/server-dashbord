/*
  Warnings:

  - You are about to drop the `SkillCategory` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category` to the `Skill` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('FRONTEND', 'BACKEND', 'DATABASE', 'TOOLS');

-- DropForeignKey
ALTER TABLE "Skill" DROP CONSTRAINT "Skill_categoryId_fkey";

-- AlterTable
ALTER TABLE "Skill" ADD COLUMN     "category" "Category" NOT NULL;

-- DropTable
DROP TABLE "SkillCategory";
