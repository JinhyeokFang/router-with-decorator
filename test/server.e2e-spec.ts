import 'reflect-metadata';
import { Application } from 'express';
import { Server } from '../src/server';
import request from 'supertest';
import { RootRouter } from '../src/root.router';
import { HelloRouter } from '../src/hello/hello.router';

describe('Server E2E Test', () => {
  let app: Application;

  beforeEach(() => {
    const server = new Server();
    const rootRouter = new RootRouter();
    rootRouter.addRouter(HelloRouter);
    server.addRouter(rootRouter.router);
    app = server.app;
  });

  it('/hello (GET)', () => {
    return request(app).get('/hello').expect(200).expect({
      success: true,
      message: 'Hello World!',
    });
  });

  it('/hello (POST)', () => {
    return request(app).post('/hello').expect(200).expect({
      success: true,
      message: 'Hello World!',
    });
  });
});
