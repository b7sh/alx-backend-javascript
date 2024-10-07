export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let numOfCall = weakMap.get(endpoint) || 0;

  numOfCall += 1;

  weakMap.set(endpoint, numOfCall);

  if (numOfCall >= 5) {
    throw Error('Endpoint load is high');
  }

  return numOfCall;
}
