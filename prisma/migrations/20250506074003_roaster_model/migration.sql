-- CreateTable
CREATE TABLE "roaster" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "fk_player_id" INTEGER NOT NULL,

    CONSTRAINT "roaster_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "roaster" ADD CONSTRAINT "roaster_fk_player_id_fkey" FOREIGN KEY ("fk_player_id") REFERENCES "player"("kbo_id") ON DELETE RESTRICT ON UPDATE CASCADE;
