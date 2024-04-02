-- DropIndex
DROP INDEX `User_age_key` ON `user`;

-- DropIndex
DROP INDEX `User_first_name_key` ON `user`;

-- DropIndex
DROP INDEX `User_last_name_key` ON `user`;

-- AlterTable
ALTER TABLE `user` MODIFY `first_name` VARCHAR(191) NULL,
    MODIFY `last_name` VARCHAR(191) NULL,
    MODIFY `roll` VARCHAR(191) NULL;
