function merge<T extends object, N extends object>(objA: T, objB: N): T & N {
  return Object.assign(objA, objB);
}