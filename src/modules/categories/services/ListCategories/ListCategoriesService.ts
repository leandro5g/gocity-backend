import { inject, injectable } from "tsyringe";

import { ICategoriesCompanyRepository } from "@modules/categories/repositories/ICategoriesCompanyRepository";

@injectable()
class ListCategoriesService {
  constructor(
    @inject("CategoriesCompanyRepository")
    private categoriesCompanyRepository: ICategoriesCompanyRepository
  ) {}

  public async execute() {
    const categories = await this.categoriesCompanyRepository.list();

    return categories;
  }
}

export { ListCategoriesService };
