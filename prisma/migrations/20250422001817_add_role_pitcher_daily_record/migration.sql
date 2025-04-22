/*
  Warnings:

  - Added the required column `role` to the `pitcher_daily_record` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pitcher_daily_record" ADD COLUMN     "role" VARCHAR(4) NOT NULL;
