-- CreateTable
CREATE TABLE "Veiculo" (
    "id" SERIAL NOT NULL,
    "modelo" VARCHAR(255) NOT NULL,
    "tipo" VARCHAR(255) NOT NULL,
    "cor" VARCHAR(255) NOT NULL,
    "vendido" BOOLEAN NOT NULL,
    "ano" INTEGER NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Veiculo_pkey" PRIMARY KEY ("id")
);
