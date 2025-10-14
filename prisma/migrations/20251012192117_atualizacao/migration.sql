/*
  Warnings:

  - You are about to drop the column `created_at` on the `Veiculo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Veiculo" DROP COLUMN "created_at",
ADD COLUMN     "created_v" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_v" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
