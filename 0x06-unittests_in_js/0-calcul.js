module.exports = function calculateNumber(a, b = 0) {
  const firstNum = Number(a);
  const secondNum = Number(b);
  
  if (Number.isNaN(firstNum) || Number.isNaN(secondNum))
    throw TypeError('Parameters must be numbers');
  
    return Math.round(firstNum) + Math.round(secondNum);
  };
