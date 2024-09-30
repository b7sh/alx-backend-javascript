export default function appendToEachArrayValue(array, appendString) {
  const emptyArray = [];
  for (const value of array) {
    emptyArray.push(appendString + value);
  }

  return emptyArray;
}
