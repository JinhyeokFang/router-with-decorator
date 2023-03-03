import Express, { Router } from 'express';

export class Server {
  private readonly appInstance = Express();

  constructor() {
    this.appInstance.use(Express.json());
    this.appInstance.use(Express.urlencoded({ extended: true }));
  }

  addRouter(router: Router) {
    this.appInstance.use(router);
  }

  get app() {
    return this.appInstance;
  }
}
