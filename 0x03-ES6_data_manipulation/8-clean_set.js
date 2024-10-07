export default function cleanSet(set, startString) {
  const result = [];

  if (typeof startString !== 'string'
      || startString.length === 0
      || typeof set !== 'object') {
    return '';
  }
  for (const value of set) {
    if (value && value.startsWith(startString)) {
      result.push(`${value.replace(startString, '')}`);
    }
  }
  return result.join('-');
}
