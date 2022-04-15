import { ICreateOwnerDTO } from "../dtos/ICreateOwnerDTO";
import { Owner } from "../infra/typeorm/entities/Owner";

interface IOwnersRepository {
  create(data: ICreateOwnerDTO): Promise<Owner>;
  findById(owner_id: string): Promise<Owner | undefined>;
  findByEmail(email: string): Promise<Owner | undefined>;
  findByCPF(cpf: string): Promise<Owner | undefined>;
}

export { IOwnersRepository };
