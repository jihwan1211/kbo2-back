-- CreateTable
CREATE TABLE "milestone_record" (
    "id" SERIAL NOT NULL,
    "fk_milestone_definition_id" INTEGER NOT NULL,
    "fk_player_id" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "milestone_record_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "milestone_record" ADD CONSTRAINT "milestone_record_fk_milestone_definition_id_fkey" FOREIGN KEY ("fk_milestone_definition_id") REFERENCES "milestone_definition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "milestone_record" ADD CONSTRAINT "milestone_record_fk_player_id_fkey" FOREIGN KEY ("fk_player_id") REFERENCES "player"("kbo_id") ON DELETE RESTRICT ON UPDATE CASCADE;
