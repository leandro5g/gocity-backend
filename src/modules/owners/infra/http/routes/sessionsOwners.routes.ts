import { Router } from "express";

import { AuthenticateOwnerController } from "../controllers/AuthenticateOwnerController";

const sessionsOwnersRouter = Router();
const authenticateOwnerController = new AuthenticateOwnerController();

sessionsOwnersRouter.post("/", authenticateOwnerController.create);

export { sessionsOwnersRouter };
