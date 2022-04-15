import { Router } from "express";

import { CategoryCompanyController } from "../controllers/CategoryCompanyController";

const categoriesCompanyRouter = Router();
const categoryCompanyController = new CategoryCompanyController();

categoriesCompanyRouter.post("/", categoryCompanyController.create);
categoriesCompanyRouter.get("/", categoryCompanyController.index);

export { categoriesCompanyRouter };
