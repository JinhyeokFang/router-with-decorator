import 'reflect-metadata';
import { Request, Response } from 'express';
import { Get } from '../decorators/get';
import { Post } from '../decorators/post';

export class HelloRouter {
  @Get('/hello')
  helloGet(req: Request, res: Response) {
    res.send({
      success: true,
      message: 'Hello World!',
    });
  }

  @Post('/hello')
  helloPost(req: Request, res: Response) {
    res.send({
      success: true,
      message: 'Hello World!',
    });
  }
}
