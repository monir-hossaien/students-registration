/*
  Warnings:

  - You are about to drop the column `courses` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `courses`,
    ADD COLUMN `department` VARCHAR(191) NULL;
