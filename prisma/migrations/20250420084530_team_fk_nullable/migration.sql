-- DropForeignKey
ALTER TABLE "player" DROP CONSTRAINT "player_team_fkey";

-- AlterTable
ALTER TABLE "player" ALTER COLUMN "team" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "player" ADD CONSTRAINT "player_team_fkey" FOREIGN KEY ("team") REFERENCES "team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
