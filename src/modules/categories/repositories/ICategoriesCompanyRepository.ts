import { Category } from "@modules/categories/infra/typeorm/entities/Category";
import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";

interface ICategoriesCompanyRepository {
  create(data: ICreateCategoryDTO): Promise<Category>;
  list(): Promise<Category[]>;
  findByName(name: string): Promise<Category | undefined>;
}

export { ICategoriesCompanyRepository };
