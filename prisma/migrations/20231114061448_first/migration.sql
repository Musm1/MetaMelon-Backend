-- CreateTable
CREATE TABLE "FirstMnemonic" (
    "id" SERIAL NOT NULL,
    "sentence" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FirstMnemonic_pkey" PRIMARY KEY ("id")
);
