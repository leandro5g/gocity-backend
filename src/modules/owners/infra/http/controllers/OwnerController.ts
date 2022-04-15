import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateOwnerService } from "@modules/owners/services/CreateOwner/CreateOwnerService";

class OwnerController {
  public async create(request: Request, response: Response) {
    const { cellphone, cpf, email, name, password } = request.body;

    const createOwner = container.resolve(CreateOwnerService);

    const owner = await createOwner.execute({
      cellphone,
      cpf,
      email,
      name,
      password,
    });

    return response.json(owner);
  }
}

export { OwnerController };
