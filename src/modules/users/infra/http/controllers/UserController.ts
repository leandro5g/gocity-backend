import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserService } from "@modules/users/services/CreateUser/CreateUserService";

class UserController {
  public async create(request: Request, response: Response) {
    const { cellphone, email, name, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      cellphone,
      email,
      name,
      password,
    });

    return response.json(user);
  }
}

export { UserController };
