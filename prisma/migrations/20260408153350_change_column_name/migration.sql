/*
  Warnings:

  - The `finishTime` column on the `player` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "player" ALTER COLUMN "username" DROP NOT NULL,
DROP COLUMN "finishTime",
ADD COLUMN     "finishTime" BIGINT;
