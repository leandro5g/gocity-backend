import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableCompany1649759142837 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "companies",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },

          {
            name: "cellphone",
            type: "varchar",
          },

          {
            name: "description",
            type: "varchar(200)",
          },

          {
            name: "cnpj",
            type: "varchar",
          },

          {
            name: "is_active",
            type: "boolean",
            default: false,
          },

          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },

          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("companies");
  }
}
