'use strict';

class MathUtil {
  constructor() {
    this.operators = {
      '+': (a, b) => +a + +b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b
    };
  }

  operate(operator, a, b) {
    if (this.operators.hasOwnProperty(operator)) {
      return this.operators[operator](a, b);
    }

    throw new Error(`Undefined operator: ${operator}`);
  };

  isOperator(token) {
    return this.operators.hasOwnProperty(token);
  };

  isNumber(token) {
    if (token.length === 0) {
      return false;
    }
    return !isNaN(token);
  };
}

module.exports = new MathUtil();