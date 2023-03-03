export const Get =
  (route: string) =>
  (target: any, key: string, descriptor: PropertyDescriptor) => {
    Reflect.defineMetadata(
      key,
      {
        method: 'get',
        route,
      },
      target.constructor,
    );
  };
