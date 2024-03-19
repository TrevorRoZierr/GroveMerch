/*
  Warnings:

  - A unique constraint covering the columns `[image]` on the table `collection` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `image` to the `collection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "collection" ADD COLUMN     "image" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "collection_image_key" ON "collection"("image");
