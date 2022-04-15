import { Router } from "express";

import { OwnerController } from "../controllers/OwnerController";

const ownersRouter = Router();
const ownerController = new OwnerController();

ownersRouter.post("/", ownerController.create);

export { ownersRouter };
