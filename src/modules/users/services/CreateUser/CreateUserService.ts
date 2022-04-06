import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { IHashProvider } from "@shared/container/providers/HashProvider/models/IHashProvider";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  name: string;
  cellphone: string;
  password: string;
  email: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) {}

  public async execute({ cellphone, email, name, password }: IRequest) {
    const checkUserEmail = await this.usersRepository.findByEmail(email);

    if (checkUserEmail) {
      throw new AppError("This e-mail already used");
    }

    const passwordHash = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      cellphone,
      email,
      name,
      password: passwordHash,
    });

    return user;
  }
}

export { CreateUserService };
