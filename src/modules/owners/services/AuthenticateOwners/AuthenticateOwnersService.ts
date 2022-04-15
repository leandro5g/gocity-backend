import { inject, injectable } from "tsyringe";

import { sign } from "jsonwebtoken";
import { jwtConfig } from "@config/jwt";

import { IHashProvider } from "@shared/container/providers/HashProvider/models/IHashProvider";
import { AppError } from "@shared/errors/AppError";
import { IOwnersRepository } from "@modules/owners/repositories/IOwnersRepository";
import { Owner } from "@modules/owners/infra/typeorm/entities/Owner";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  owner: Owner;
  token: string;
}

@injectable()
class AuthenticateOwnersService {
  constructor(
    @inject("OwnersRepository")
    private ownersRepository: IOwnersRepository,
    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const owner = await this.ownersRepository.findByEmail(email);

    if (!owner) {
      throw new AppError("Combination password/email does not match");
    }

    const checkPassword = await this.hashProvider.compareHash(
      password,
      owner.password
    );

    if (!checkPassword) {
      throw new AppError("Combination password/email does not match");
    }

    const token = sign({}, jwtConfig.owners.secret, {
      subject: owner.id,
      expiresIn: jwtConfig.owners.expiresIn,
    });

    return {
      owner,
      token,
    };
  }
}

export { AuthenticateOwnersService };
