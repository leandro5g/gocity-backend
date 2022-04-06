import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableAddressCompany1649256642961
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "address",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "zipcode",
            type: "varchar",
          },

          {
            name: "state",
            type: "varchar",
          },

          {
            name: "email",
            type: "city",
          },

          {
            name: "district",
            type: "varchar",
          },

          {
            name: "street",
            type: "complement",
          },

          {
            name: "district",
            type: "varchar",
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
    await queryRunner.dropTable("address");
  }
}
