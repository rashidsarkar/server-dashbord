/*
  Warnings:

  - You are about to drop the column `featured` on the `Project` table. All the data in the column will be lost.
  - Made the column `serverRepoLink` on table `Project` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "ProjectFeature" DROP CONSTRAINT "ProjectFeature_projectId_fkey";

-- DropForeignKey
ALTER TABLE "projectCredential" DROP CONSTRAINT "projectCredential_projectId_fkey";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "featured",
ALTER COLUMN "serverRepoLink" SET NOT NULL;
