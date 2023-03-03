import { Router } from 'express';

type Constructor = new (...args: unknown[]) => unknown;

export class RootRouter {
  private readonly routerInstance = Router();

  addRouter(router: Constructor) {
    const expressRouter = this.transformToExpressRouter(router);
    this.routerInstance.use(expressRouter);
  }

  transformToExpressRouter(router: Constructor) {
    const expressRouter = Router();
    const routerInstance = new router();

    Object.getOwnPropertyNames(router.prototype)
      .map((key: string) => {
        return {
          route: Reflect.getMetadata(key, router),
          key,
        };
      })
      .filter((data) => data.route !== undefined)
      .forEach((data) => {
        expressRouter[data.route.method](
          data.route.route,
          routerInstance[data.key],
        );
      });

    return expressRouter;
  }

  get router() {
    return this.routerInstance;
  }
}
