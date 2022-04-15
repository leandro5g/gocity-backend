import { inject, injectable } from "tsyringe";

import { ICategoriesCompanyRepository } from "@modules/categories/repositories/ICategoriesCompanyRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  name: string;
  image: string;
}

@injectable()
class CreateCategoryCompanyService {
  constructor(
    @inject("CategoriesCompanyRepository")
    private categoriesCompanyRepository: ICategoriesCompanyRepository
  ) {}

  public async execute({ image, name }: IRequest) {
    const findCategory = await this.categoriesCompanyRepository.findByName(
      name
    );

    if (findCategory) {
      throw new AppError("This name is already register in to category");
    }

    const category = await this.categoriesCompanyRepository.create({
      image,
      name,
    });

    return category;
  }
}

export { CreateCategoryCompanyService };
