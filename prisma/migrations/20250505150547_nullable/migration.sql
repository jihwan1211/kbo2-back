-- AlterTable
ALTER TABLE "game" ALTER COLUMN "home_team_score" DROP NOT NULL,
ALTER COLUMN "away_team_score" DROP NOT NULL,
ALTER COLUMN "memo" DROP NOT NULL;
