/*
  Warnings:

  - A unique constraint covering the columns `[id_logo_file]` on the table `brands` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_image_file]` on the table `types` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "brands" ADD COLUMN     "id_logo_file" TEXT;

-- AlterTable
ALTER TABLE "types" ADD COLUMN     "id_image_file" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "brands_id_logo_file_key" ON "brands"("id_logo_file");

-- CreateIndex
CREATE UNIQUE INDEX "types_id_image_file_key" ON "types"("id_image_file");

-- AddForeignKey
ALTER TABLE "types" ADD CONSTRAINT "types_id_image_file_fkey" FOREIGN KEY ("id_image_file") REFERENCES "files"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "brands" ADD CONSTRAINT "brands_id_logo_file_fkey" FOREIGN KEY ("id_logo_file") REFERENCES "files"("id") ON DELETE SET NULL ON UPDATE CASCADE;
