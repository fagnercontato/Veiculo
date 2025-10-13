/*
  Warnings:

  - Added the required column `cambio` to the `Veiculo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `km` to the `Veiculo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marca` to the `Veiculo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Veiculo" ADD COLUMN     "cambio" VARCHAR(255) NOT NULL,
ADD COLUMN     "km" INTEGER NOT NULL,
ADD COLUMN     "marca" VARCHAR(255) NOT NULL;
