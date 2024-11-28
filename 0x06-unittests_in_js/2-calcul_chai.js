function calculateNumber(type, a, b) {
    const first = Math.round(a);
    const second = Math.round(b);
  
    if (type === 'SUBTRACT') {
      return first - second;
    }
  
    if (type === 'DIVIDE') {
      if (second === 0) {
        return 'Error';
      }
      return first / second;
    }
  
    return first + second;
  }
  
module.exports = calculateNumber;
