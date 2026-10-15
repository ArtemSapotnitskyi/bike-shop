-- DropForeignKey
ALTER TABLE "carts" DROP CONSTRAINT "carts_id_user_fkey";

-- DropForeignKey
ALTER TABLE "refresh_token" DROP CONSTRAINT "refresh_token_id_user_fkey";

-- AddForeignKey
ALTER TABLE "refresh_token" ADD CONSTRAINT "refresh_token_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "carts" ADD CONSTRAINT "carts_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
