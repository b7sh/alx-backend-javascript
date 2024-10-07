export default function cleanSet(set, startString) {
  let result = '';

  if (typeof startString === 'string'
      && startString.length > 0
      && typeof set === 'object') {
    for (const value of set) {
      if (value.startsWith(startString)) {
        result += `${value.replace(startString, '')}-`;
      }
    }
  }
  if (result.length > 0) {
    result = result.slice(0, -1);
  }
  return result;
}
