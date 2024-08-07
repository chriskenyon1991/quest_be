import { MigrationInterface, QueryRunner } from "typeorm";

export class EditQuest1715590618488 implements MigrationInterface {
    name = 'EditQuest1715590618488'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "quest" DROP COLUMN "length"`);
        await queryRunner.query(`ALTER TABLE "quest" ALTER COLUMN "title" SET DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "quest" ALTER COLUMN "description" SET DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "quest" ALTER COLUMN "startDate" SET DEFAULT '"2024-05-13T08:56:59.076Z"'`);
        await queryRunner.query(`ALTER TABLE "quest" DROP COLUMN "catagory"`);
        await queryRunner.query(`ALTER TABLE "quest" ADD "catagory" character varying NOT NULL DEFAULT 'daily'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "quest" DROP COLUMN "catagory"`);
        await queryRunner.query(`ALTER TABLE "quest" ADD "catagory" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "quest" ALTER COLUMN "startDate" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "quest" ALTER COLUMN "description" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "quest" ALTER COLUMN "title" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "quest" ADD "length" integer NOT NULL`);
    }

}
