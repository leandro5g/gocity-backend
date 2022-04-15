import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AddForeignKeyToTableCompanies1649759432057
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "companies",
      new TableColumn({
        name: "company_owner_id",
        type: "uuid",
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      "companies",
      new TableForeignKey({
        columnNames: ["company_owner_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "company_owner",
        name: "CompaniesFK_Owner_ID",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("companies", "CompaniesFK_Owner_ID");
  }
}
