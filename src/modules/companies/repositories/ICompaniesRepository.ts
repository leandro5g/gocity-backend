import { ICreateCompanyDTO } from "../dtos/ICreateCompanyDTO";
import { Company } from "../infra/typeorm/entities/Company";

interface ICompaniesRepository {
  create(data: ICreateCompanyDTO): Promise<Company>;
}

export { ICompaniesRepository };
