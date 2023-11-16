/*
  Warnings:

  - You are about to drop the `FirstMnemonic` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "FirstMnemonic";

-- CreateTable
CREATE TABLE "SecondMnemonic" (
    "id" SERIAL NOT NULL,
    "sentence" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SecondMnemonic_pkey" PRIMARY KEY ("id")
);
