export default class Validator {
  onError(...args) {
    throw new Error(...args);
  }

  plainObj(any) {
    return typeof any === 'object' && any !== null;
  }

  shapeOf(object, shape) {
    if (![object, shape].every(this.plainObj)) {
      this.onError('Invalid shape comparison');
    }
    for (const [key, expectedType] of Object.entries(shape)) {
      if (typeof object[key] !== expectedType) {
        this.onError(`Property ${key} must be type of ${expectedType}`);
      }
    }
  }
}