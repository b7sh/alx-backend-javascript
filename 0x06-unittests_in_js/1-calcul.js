const SUM = 'SUM';
const SUBTRACT = 'SUBTRACT';
const DIVIDE = 'DIVIDE';

function isNegZero(n) {
  n = Number(n);
  return n === 0 && 1 / n === -Infinity;
}

module.exports = function calculateNumber(type, a, b = 0) {
  let firstNum = Number(a);
  let secondNum = Number(b);

  if (Number.isNaN(firstNum) || Number.isNaN(secondNum))
    throw TypeError('Parameters must be numbers or able to coerce to number');

  firstNum = Math.round(firstNum);
  secondNum = Math.round(secondNum);

  switch (type) {
    case SUM:
      return firstNum + secondNum;
    case SUBTRACT:
      return firstNum - secondNum;
    case DIVIDE:
      if (secondNum === 0) return 'ERROR';
      const quotient = firstNum / secondNum;
      return isNegZero(quotient) ? 0 : quotient;
    default:
      throw Error(
        'Invalid operation type. Valid types are "SUM", "SUBTRACT", and "DIVIDE".'
      );
  }
};
