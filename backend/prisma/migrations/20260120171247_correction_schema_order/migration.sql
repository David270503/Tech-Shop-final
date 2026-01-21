/*
  Warnings:

  - You are about to drop the column `order_number` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `adress` on the `User` table. All the data in the column will be lost.
  - Added the required column `orderNumber` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `totalPrice` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `address` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "order_number",
ADD COLUMN     "orderNumber" TEXT NOT NULL,
DROP COLUMN "totalPrice",
ADD COLUMN     "totalPrice" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "adress",
ADD COLUMN     "address" TEXT NOT NULL;
