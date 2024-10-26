import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterContactMobileNo1729891774052 implements MigrationInterface {
    name = 'AlterContactMobileNo1729891774052'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bg_user" ADD "description" character varying`);
        await queryRunner.query(`ALTER TABLE "item" ALTER COLUMN "description" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" ALTER COLUMN "description" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bg_user" DROP COLUMN "description"`);
    }

}
