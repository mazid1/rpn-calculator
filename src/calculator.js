'use strict';
const MathUtil = require('./mathUtil');

class Calculator {
  calculate(exp) {
    try {
      return this.calculatePostfix(exp);
    } catch (e) {
      return e;
    }
  }

  calculatePostfix(exp) {
    const tokens = exp.split(' ');
    const stack = [];
    tokens.forEach(token => {
      if (MathUtil.isNumber(token)) {
        stack.push(token);
      } else if (MathUtil.isOperator(token)) {
        const b = stack.pop();
        const a = stack.pop();
        const result = MathUtil.operate(token, a, b);
        stack.push(result);
      }
    });
    if (stack.length !== 1) {
      throw new Error(`Incorrect Input: ${exp}`);
    }
    return stack[0];
  };
}

module.exports = new Calculator();