import { Response } from 'express';
import { HelloRouter } from './hello.router';

describe('HelloRouter', () => {
  let helloRouter: HelloRouter;

  beforeEach(() => {
    helloRouter = new HelloRouter();
  });

  it('helloGet()', () => {
    const mockedSend = jest.fn();
    const res: Response = {
      send: mockedSend,
    } as unknown as Response;
    helloRouter.helloPost(null, res);
    expect(mockedSend).toBeCalledWith({
      success: true,
      message: 'Hello World!',
    });
  });

  it('helloPost()', () => {
    const mockedSend = jest.fn();
    const res: Response = {
      send: mockedSend,
    } as unknown as Response;
    helloRouter.helloPost(null, res);
    expect(mockedSend).toBeCalledWith({
      success: true,
      message: 'Hello World!',
    });
  });
});
