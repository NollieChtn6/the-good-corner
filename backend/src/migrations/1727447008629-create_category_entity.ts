import type { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCategoryEntity1727447008629 implements MigrationInterface {
	name = "CreateCategoryEntity1727447008629";

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE "category" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(200) NOT NULL)`,
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DROP TABLE "category"`);
	}
}
