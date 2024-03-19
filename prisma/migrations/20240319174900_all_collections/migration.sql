-- CreateTable
CREATE TABLE "collection" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "collection_name_key" ON "collection"("name");
