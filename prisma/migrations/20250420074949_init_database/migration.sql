-- CreateTable
CREATE TABLE "team" (
    "id" SERIAL NOT NULL,
    "symbol" VARCHAR(4) NOT NULL,
    "name" VARCHAR(10) NOT NULL,
    "win" INTEGER NOT NULL,
    "runner_up" INTEGER NOT NULL,

    CONSTRAINT "team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "player" (
    "id" SERIAL NOT NULL,
    "kbo_id" INTEGER NOT NULL,
    "profile_image" VARCHAR(256),
    "name" VARCHAR(64),
    "birth" DATE,
    "back_number" VARCHAR(4),
    "school" VARCHAR(64),
    "team" INTEGER NOT NULL,
    "position" VARCHAR(4),
    "is_active" BOOLEAN DEFAULT false,

    CONSTRAINT "player_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "player_kbo_id_key" ON "player"("kbo_id");

-- AddForeignKey
ALTER TABLE "player" ADD CONSTRAINT "player_team_fkey" FOREIGN KEY ("team") REFERENCES "team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
