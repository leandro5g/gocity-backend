import { getRepository, Repository } from "typeorm";
import { v4 } from "uuid";

import { User } from "../entities/User";

import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });

    return user;
  }

  public async create({
    cellphone,
    email,
    name,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({
      id: v4(),
      cellphone,
      email,
      name,
      password,
    });

    await this.ormRepository.save(user);

    return user;
  }

  public async findById(user_id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(user_id);

    return user;
  }
}

export { UsersRepository };
