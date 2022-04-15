import { inject, injectable } from "tsyringe";

import { IHashProvider } from "@shared/container/providers/HashProvider/models/IHashProvider";
import { IOwnersRepository } from "@modules/owners/repositories/IOwnersRepository";
import { SignUpOwnerError } from "@shared/errors/SignUpOwnerError";

interface IRequest {
  name: string;
  cpf: string;
  email: string;
  password: string;
  cellphone: string;
}

@injectable()
class CreateOwnerService {
  constructor(
    @inject("OwnersRepository")
    private ownersRepository: IOwnersRepository,
    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) {}

  public async execute({ cellphone, cpf, email, name, password }: IRequest) {
    const checkUserCPF = await this.ownersRepository.findByCPF(cpf);

    if (checkUserCPF) {
      console.log("deu error");
      throw new SignUpOwnerError({
        alreadyError: "cpf",
        message: "This cpf already used",
      });
    }

    const checkUserEmail = await this.ownersRepository.findByEmail(email);

    if (checkUserEmail) {
      throw new SignUpOwnerError({
        alreadyError: "email",
        message: "This e-mail already used",
      });
    }

    const passwordHash = await this.hashProvider.generateHash(password);

    const owner = await this.ownersRepository.create({
      cellphone,
      cpf,
      email,
      name,
      password: passwordHash,
    });

    return owner;
  }
}

export { CreateOwnerService };
