import { Router } from 'express';
import { HelloRouter } from './hello/hello.router';
import { RootRouter } from './root.router';

describe('RootRouter', () => {
  let rootRouter: RootRouter;

  beforeEach(() => {
    rootRouter = new RootRouter();
  });

  it('transformToExpressRouter()', () => {
    const expressRouter = rootRouter.transformToExpressRouter(HelloRouter);

    // 결과 검증용 Router
    const helloRouter = new HelloRouter();
    const router = Router();
    router.get('/hello', helloRouter.helloGet);
    router.post('/hello', helloRouter.helloPost);

    expect(JSON.stringify(expressRouter.stack)).toStrictEqual(
      JSON.stringify(router.stack),
    );
  });
});
