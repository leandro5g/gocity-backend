import express, { Application, json } from "express";
import "express-async-errors";

import "@shared/infra/typeorm";
import "@shared/container";
import { routes } from "./routes";

class App {
  public server: Application;

  constructor() {
    this.server = express();

    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.server.use(json());
  }

  private routes(): void {
    this.server.use(routes);
  }
}

const appServer = new App().server;

export { appServer };
