import { inject, injectable } from "tsyringe";

import { ICompaniesRepository } from "@modules/companies/repositories/ICompaniesRepository";

interface IRequest {
  name: string;
  cnpj: string;
  cellphone: string;
  category_id: string;
  company_owner_id: string;
}

@injectable()
class CreateCompanyService {
  constructor(
    @inject("CompaniesRepository")
    private companiesRepository: ICompaniesRepository
  ) {}

  public async execute({
    category_id,
    cellphone,
    cnpj,
    company_owner_id,
    name,
  }: IRequest) {
    const company = await this.companiesRepository.create({
      category_id,
      cellphone,
      cnpj,
      company_owner_id,
      name,
    });

    return company;
  }
}

export { CreateCompanyService };
