import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateOwnersService } from "@modules/owners/services/AuthenticateOwners/AuthenticateOwnersService";

class AuthenticateOwnerController {
  public async create(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateOwner = container.resolve(AuthenticateOwnersService);

    const { owner, token } = await authenticateOwner.execute({
      email,
      password,
    });

    return response.json({
      owner,
      token,
    });
  }
}

export { AuthenticateOwnerController };
