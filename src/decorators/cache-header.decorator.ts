export function CacheHeader(durationInSeconds: number) {
  return function (
    target: Object,
    key: string | symbol,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      //console.log('Before')
      // Set the cache header output

      const controller = this as typeof target;
      if (controller.hasOwnProperty('response')) {
        // Set the cache header output
        (this as any).response.set(
          'Cache-Control',
          'max-age=' + durationInSeconds,
        );
      } else {
        console.warn(
          'Controller ',
          target,
          ' does not @inject the response object.  Cache header not set',
        );
      }
      // Call the original method
      const result = await originalMethod.apply(this, args);
      //console.log('After')
      return result;
    };
  };
}
