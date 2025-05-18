/*
  Warnings:

  - Added the required column `category` to the `milestone_record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currentRecord` to the `milestone_record` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "milestone_record" ADD COLUMN     "category" VARCHAR(8) NOT NULL,
ADD COLUMN     "currentRecord" INTEGER NOT NULL;
