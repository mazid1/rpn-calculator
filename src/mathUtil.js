'use strict';

class MathUtil {
  constructor() {
    this.operators = {
      '+': (a, b) => +a + +b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => {
        if (+b === 0) {
          throw new Error('Division by zero occurred!');
        }
        return a / b;
      },
      '^': (a, b) => Math.pow(a, b)
    };

    this.inStackPrecedence = {
      '+': 2,
      '-': 2,
      '*': 4,
      '/': 4,
      '^': 5,
      '(': 10
    };

    this.outStackPrecedence = {
      '+': 1,
      '-': 1,
      '*': 3,
      '/': 3,
      '^': 6,
      '(': 0
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