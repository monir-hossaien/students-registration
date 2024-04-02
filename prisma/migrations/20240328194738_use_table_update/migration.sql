/*
  Warnings:

  - You are about to drop the column `age` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `courses` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `grade` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `roll` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `age`,
    DROP COLUMN `courses`,
    DROP COLUMN `grade`,
    DROP COLUMN `roll`;
