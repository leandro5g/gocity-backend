import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableOwnerCompany1649256540853
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "company_owner",
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
            name: "cpf",
            type: "varchar",
            isUnique: true,
          },

          {
            name: "email",
            type: "varchar",
            isUnique: true,
          },

          {
            name: "cellphone",
            type: "varchar",
          },

          {
            name: "avatar",
            type: "varchar",
            isNullable: true,
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
    await queryRunner.dropTable("company_owner");
  }
}
