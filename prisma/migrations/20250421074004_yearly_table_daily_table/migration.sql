/*
  Warnings:

  - You are about to drop the `batter_yearly_record` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pitcher_yearly_record` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "batter_yearly_record" DROP CONSTRAINT "batter_yearly_record_fk_opposition_team_id_fkey";

-- DropForeignKey
ALTER TABLE "batter_yearly_record" DROP CONSTRAINT "batter_yearly_record_fk_player_id_fkey";

-- DropForeignKey
ALTER TABLE "pitcher_yearly_record" DROP CONSTRAINT "pitcher_yearly_record_fk_opposition_team_id_fkey";

-- DropForeignKey
ALTER TABLE "pitcher_yearly_record" DROP CONSTRAINT "pitcher_yearly_record_fk_player_id_fkey";

-- DropTable
DROP TABLE "batter_yearly_record";

-- DropTable
DROP TABLE "pitcher_yearly_record";

-- CreateTable
CREATE TABLE "batter_daily_record" (
    "id" SERIAL NOT NULL,
    "season" VARCHAR(4) NOT NULL,
    "date" DATE NOT NULL,
    "fk_player_id" INTEGER NOT NULL,
    "fk_opposition_team_id" INTEGER NOT NULL,
    "G" INTEGER NOT NULL,
    "PA" INTEGER NOT NULL,
    "AB" INTEGER NOT NULL,
    "R" INTEGER NOT NULL,
    "H" INTEGER NOT NULL,
    "two_B" INTEGER NOT NULL,
    "three_B" INTEGER NOT NULL,
    "HR" INTEGER NOT NULL,
    "TB" INTEGER NOT NULL,
    "RBI" INTEGER NOT NULL,
    "SB" INTEGER NOT NULL,
    "CS" INTEGER NOT NULL,
    "BB" INTEGER NOT NULL,
    "HBP" INTEGER NOT NULL,
    "SO" INTEGER NOT NULL,
    "GDP" INTEGER NOT NULL,

    CONSTRAINT "batter_daily_record_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pitcher_daily_record" (
    "id" SERIAL NOT NULL,
    "season" VARCHAR(4) NOT NULL,
    "date" DATE NOT NULL,
    "fk_player_id" INTEGER NOT NULL,
    "fk_opposition_team_id" INTEGER NOT NULL,
    "G" INTEGER NOT NULL,
    "CG" INTEGER NOT NULL,
    "SHO" INTEGER NOT NULL,
    "W" INTEGER NOT NULL,
    "L" INTEGER NOT NULL,
    "SV" INTEGER NOT NULL,
    "HLD" INTEGER NOT NULL,
    "TBF" INTEGER NOT NULL,
    "IP" VARCHAR(12) NOT NULL,
    "H" INTEGER NOT NULL,
    "HR" INTEGER NOT NULL,
    "BB" INTEGER NOT NULL,
    "HBP" INTEGER NOT NULL,
    "SO" INTEGER NOT NULL,
    "R" INTEGER NOT NULL,
    "ER" INTEGER NOT NULL,

    CONSTRAINT "pitcher_daily_record_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "batter_daily_record" ADD CONSTRAINT "batter_daily_record_fk_player_id_fkey" FOREIGN KEY ("fk_player_id") REFERENCES "player"("kbo_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "batter_daily_record" ADD CONSTRAINT "batter_daily_record_fk_opposition_team_id_fkey" FOREIGN KEY ("fk_opposition_team_id") REFERENCES "team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pitcher_daily_record" ADD CONSTRAINT "pitcher_daily_record_fk_player_id_fkey" FOREIGN KEY ("fk_player_id") REFERENCES "player"("kbo_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pitcher_daily_record" ADD CONSTRAINT "pitcher_daily_record_fk_opposition_team_id_fkey" FOREIGN KEY ("fk_opposition_team_id") REFERENCES "team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
