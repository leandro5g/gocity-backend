import { getRepository, Repository } from "typeorm";
import { v4 } from "uuid";

import { Owner } from "../entities/Owner";

import { ICreateOwnerDTO } from "@modules/owners/dtos/ICreateOwnerDTO";
import { IOwnersRepository } from "@modules/owners/repositories/IOwnersRepository";

class OwnersRepository implements IOwnersRepository {
  private ormRepository: Repository<Owner>;

  constructor() {
    this.ormRepository = getRepository(Owner);
  }

  public async create({
    cellphone,
    cpf,
    email,
    name,
    password,
  }: ICreateOwnerDTO): Promise<Owner> {
    const owner = this.ormRepository.create({
      id: v4(),
      cellphone,
      cpf,
      email,
      name,
      password,
    });

    await this.ormRepository.save(owner);

    return owner;
  }

  public async findById(owner_id: string): Promise<Owner | undefined> {
    const owner = await this.ormRepository.findOne(owner_id);

    return owner;
  }

  public async findByEmail(email: string): Promise<Owner | undefined> {
    const owner = await this.ormRepository.findOne({
      where: { email },
    });

    return owner;
  }

  public async findByCPF(cpf: string): Promise<Owner | undefined> {
    const owner = await this.ormRepository.findOne({
      where: { cpf },
    });

    return owner;
  }
}

export { OwnersRepository };
