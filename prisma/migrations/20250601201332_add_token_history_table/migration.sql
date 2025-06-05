-- CreateTable
CREATE TABLE `TokenPurchase` (
    `id` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `tokens` INTEGER NOT NULL,
    `amount` DOUBLE NOT NULL,
    `stripeSessionId` VARCHAR(191) NOT NULL,
    `packName` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `TokenPurchase_stripeSessionId_key`(`stripeSessionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TokenPurchase` ADD CONSTRAINT `TokenPurchase_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
