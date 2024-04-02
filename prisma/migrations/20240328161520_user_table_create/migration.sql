-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(50) NULL,
    `last_name` VARCHAR(50) NULL,
    `roll` VARCHAR(50) NULL,
    `age` VARCHAR(191) NULL,
    `grade` VARCHAR(191) NULL,
    `courses` LONGTEXT NULL,

    UNIQUE INDEX `User_first_name_key`(`first_name`),
    UNIQUE INDEX `User_last_name_key`(`last_name`),
    UNIQUE INDEX `User_age_key`(`age`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
