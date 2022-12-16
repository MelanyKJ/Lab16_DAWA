/*
  Warnings:

  - You are about to alter the column `img` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(4000)` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `img` VARCHAR(191) NOT NULL;
