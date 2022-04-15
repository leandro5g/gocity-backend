import { Router } from "express";

import { sessionsRouter } from "@modules/users/infra/http/routes/sessions.routes";
import { usersRouter } from "@modules/users/infra/http/routes/users.routes";
import { sessionsOwnersRouter } from "@modules/owners/infra/http/routes/sessionsOwners.routes";
import { ownersRouter } from "@modules/owners/infra/http/routes/owners.routes";
import { categoriesCompanyRouter } from "@modules/categories/infra/http/routes/categoriesCompany.routes";
import { companiesRouter } from "@modules/companies/infra/http/routes/companies.routes";

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/sessions-owners", sessionsOwnersRouter);
routes.use("/owners", ownersRouter);
routes.use("/categories-company", categoriesCompanyRouter);
routes.use("/companies", companiesRouter);

export { routes };
