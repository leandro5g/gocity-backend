import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AddForeignKeyToTableCompaniesCategorie1649759680501
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "companies",
      new TableColumn({
        name: "category_id",
        type: "uuid",
      })
    );

    await queryRunner.createForeignKey(
      "companies",
      new TableForeignKey({
        columnNames: ["category_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "categories",
        name: "FK_companies_category_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("companies", "FK_companies_category_id");
  }
}
