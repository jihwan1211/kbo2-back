-- CreateTable
CREATE TABLE "game" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "fk_home_team_id" INTEGER NOT NULL,
    "fk_away_team_id" INTEGER NOT NULL,
    "home_team_score" INTEGER NOT NULL,
    "away_team_score" INTEGER NOT NULL,
    "memo" VARCHAR(16) NOT NULL,

    CONSTRAINT "game_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "game" ADD CONSTRAINT "game_fk_home_team_id_fkey" FOREIGN KEY ("fk_home_team_id") REFERENCES "team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game" ADD CONSTRAINT "game_fk_away_team_id_fkey" FOREIGN KEY ("fk_away_team_id") REFERENCES "team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
