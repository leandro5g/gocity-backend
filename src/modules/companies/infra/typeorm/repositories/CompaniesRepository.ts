import { getRepository, Repository } from "typeorm";
import { v4 } from "uuid";

import { ICreateCompanyDTO } from "@modules/companies/dtos/ICreateCompanyDTO";
import { ICompaniesRepository } from "@modules/companies/repositories/ICompaniesRepository";
import { Company } from "../entities/Company";

class CompaniesRepository implements ICompaniesRepository {
  private ormRepository: Repository<Company>;

  constructor() {
    this.ormRepository = getRepository(Company);
  }

  public async create({
    cellphone,
    cnpj,
    category_id,
    company_owner_id,
    name,
  }: ICreateCompanyDTO): Promise<Company> {
    const company = this.ormRepository.create({
      category_id,
      cellphone,
      cnpj,
      company_owner_id,
      name,
      id: v4(),
    });

    await this.ormRepository.save(company);

    return company;
  }
}

export { CompaniesRepository };
