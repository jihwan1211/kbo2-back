-- CreateTable
CREATE TABLE "milestone_definition" (
    "id" SERIAL NOT NULL,
    "record" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "span_years" INTEGER,

    CONSTRAINT "milestone_definition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "milestone_condition" (
    "id" SERIAL NOT NULL,
    "fk_milestone_definition" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "target" INTEGER NOT NULL,

    CONSTRAINT "milestone_condition_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "milestone_condition" ADD CONSTRAINT "milestone_condition_fk_milestone_definition_fkey" FOREIGN KEY ("fk_milestone_definition") REFERENCES "milestone_definition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
