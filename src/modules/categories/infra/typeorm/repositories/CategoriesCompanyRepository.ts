import { getRepository, Repository } from "typeorm";
import { v4 } from "uuid";

import { ICategoriesCompanyRepository } from "@modules/categories/repositories/ICategoriesCompanyRepository";

import { ICreateCategoryDTO } from "@modules/categories/dtos/ICreateCategoryDTO";
import { Category } from "../entities/Category";

class CategoriesCompanyRepository implements ICategoriesCompanyRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  public async create({ image, name }: ICreateCategoryDTO): Promise<Category> {
    const category = this.ormRepository.create({
      id: v4(),
      image,
      name,
    });

    await this.ormRepository.save(category);

    return category;
  }

  public async findByName(name: string): Promise<Category | undefined> {
    const category = await this.ormRepository.findOne({
      where: { name },
    });

    return category;
  }

  public async list(): Promise<Category[]> {
    const categories = await this.ormRepository.find();

    return categories;
  }
}

export { CategoriesCompanyRepository };
