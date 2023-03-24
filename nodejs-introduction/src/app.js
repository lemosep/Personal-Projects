// File responsible for initializing all proccess and building routes

/**
 * Importing files
 */
import express from "express";
import routes from "./routes";

/**
 * Creating Class
 */
class App {
  /* Class Constructor */
  constructor() {
    this.server = express();
    this.middlewares(); //
    this.routes();
  }

  /* Middlewares are layers that are added between
  Express and your application, intercepting and 
  interpreting the request, allowing it to pass through or
  denying it. */
  middlewares() {
    this.server.use(express.json()); // Allows working w/ JSON
  }

  routes() {
    this.server.use(routes);
  }
}

/**
 * Export
 */
export default new App().server;
