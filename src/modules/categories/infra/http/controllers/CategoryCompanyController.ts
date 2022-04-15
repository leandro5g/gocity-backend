import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCategoryCompanyService } from "@modules/categories/services/CreateCategoryCompany/CreateCategoryCompanyService";
import { ListCategoriesService } from "@modules/categories/services/ListCategories/ListCategoriesService";

class CategoryCompanyController {
  public async index(request: Request, response: Response) {
    const listCategories = container.resolve(ListCategoriesService);

    const categories = await listCategories.execute();

    return response.json(categories);
  }

  public async create(request: Request, response: Response) {
    const { name, image } = request.body;

    const createCategoryCompany = container.resolve(
      CreateCategoryCompanyService
    );

    const category = await createCategoryCompany.execute({
      name,
      image,
    });

    return response.json(category);
  }
}

export { CategoryCompanyController };
