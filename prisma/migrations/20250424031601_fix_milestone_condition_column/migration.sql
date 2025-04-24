/*
  Warnings:

  - You are about to drop the column `fk_milestone_definition` on the `milestone_condition` table. All the data in the column will be lost.
  - Added the required column `fk_milestone_definition_id` to the `milestone_condition` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "milestone_condition" DROP CONSTRAINT "milestone_condition_fk_milestone_definition_fkey";

-- AlterTable
ALTER TABLE "milestone_condition" DROP COLUMN "fk_milestone_definition",
ADD COLUMN     "fk_milestone_definition_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "milestone_condition" ADD CONSTRAINT "milestone_condition_fk_milestone_definition_id_fkey" FOREIGN KEY ("fk_milestone_definition_id") REFERENCES "milestone_definition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
