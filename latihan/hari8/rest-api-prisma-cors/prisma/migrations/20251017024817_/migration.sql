-- DropForeignKey
ALTER TABLE `movies` DROP FOREIGN KEY `Movies_categoryId_fkey`;

-- AddForeignKey
ALTER TABLE `movies` ADD CONSTRAINT `movies_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
