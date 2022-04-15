import { container } from "tsyringe";

import "./providers";

import { UsersRepository } from "@modules/users/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";

import { OwnersRepository } from "@modules/owners/infra/typeorm/repositories/OwnersRepository";
import { IOwnersRepository } from "@modules/owners/repositories/IOwnersRepository";

import { CategoriesCompanyRepository } from "@modules/categories/infra/typeorm/repositories/CategoriesCompanyRepository";
import { ICategoriesCompanyRepository } from "@modules/categories/repositories/ICategoriesCompanyRepository";

import { CompaniesRepository } from "@modules/companies/infra/typeorm/repositories/CompaniesRepository";
import { ICompaniesRepository } from "@modules/companies/repositories/ICompaniesRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IOwnersRepository>(
  "OwnersRepository",
  OwnersRepository
);

container.registerSingleton<ICategoriesCompanyRepository>(
  "CategoriesCompanyRepository",
  CategoriesCompanyRepository
);

container.registerSingleton<ICompaniesRepository>(
  "CompaniesRepository",
  CompaniesRepository
);
