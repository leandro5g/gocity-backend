import { v4 } from "uuid";

import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { User } from "@modules/users/infra/typeorm/entities/User";
import { IUsersRepository } from "../IUsersRepository";

class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async create({
    cellphone,
    email,
    name,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, {
      id: v4(),
      cellphone,
      email,
      name,
      password,
    });

    this.users.push(user);

    return user;
  }

  public async findById(user_id: string): Promise<User | undefined> {
    const user = this.users.find((findUser) => findUser.id === user_id);

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find((findUser) => findUser.email === email);

    return user;
  }
}

export { FakeUsersRepository };
