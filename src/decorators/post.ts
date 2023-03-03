export const Post =
  (route: string) =>
  (target: any, key: string, descriptor: PropertyDescriptor) => {
    Reflect.defineMetadata(
      key,
      {
        method: 'post',
        route,
      },
      target.constructor,
    );
  };
