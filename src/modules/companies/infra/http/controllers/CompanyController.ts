import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCompanyService } from "@modules/companies/services/CreateCompany/CreateCompanyService";

class CompanyController {
  public async create(request: Request, response: Response) {
    const { name, cnpj, cellphone, category_id, company_owner_id } =
      request.body;

    const createCompany = container.resolve(CreateCompanyService);

    const company = await createCompany.execute({
      name,
      cnpj,
      cellphone,
      category_id,
      company_owner_id,
    });

    return response.json(company);
  }
}

export { CompanyController };
