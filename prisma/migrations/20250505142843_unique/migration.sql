/*
  Warnings:

  - A unique constraint covering the columns `[date,fk_home_team_id,fk_away_team_id]` on the table `game` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "game_date_fk_home_team_id_fk_away_team_id_key" ON "game"("date", "fk_home_team_id", "fk_away_team_id");
