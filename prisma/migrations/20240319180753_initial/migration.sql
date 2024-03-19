/*
  Warnings:

  - You are about to drop the `collection` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "collection";

-- CreateTable
CREATE TABLE "allcollections" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "allcollections_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "allcollections_image_key" ON "allcollections"("image");
