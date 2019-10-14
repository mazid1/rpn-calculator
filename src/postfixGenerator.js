'use strict';
const MathUtil = require('./mathUtil');

module.exports = function getPostfix(exp) {
  exp = exp.split(' ');
  exp.unshift('(');
  exp.push(')');

  const postfix = [];
  const opStack = [];

  exp.forEach(token => {
    if (MathUtil.isNumber(token)) {
      postfix.push(token);
    } else if (MathUtil.isOperator(token)) {
      if (opStack.length === 0 || opStack[opStack.length - 1] === '(') {
        opStack.push(token);
      } else {
        for (let i = opStack.length - 1;
             i >= 0 && opStack[i] !== '(' && MathUtil.inStackPrecedence[opStack[i]] > MathUtil.outStackPrecedence[token]; i--) {
          postfix.push(opStack.pop());
        }
        opStack.push(token);
      }
    } else if (token === '(') {
      opStack.push(token);
    } else if (token === ')') {
      let operator = opStack.pop();
      while (operator !== '(') {
        postfix.push(operator);
        operator = opStack.pop();
      }
    }
  });

  while (opStack.length > 0) {
    postfix.push(opStack.pop());
  }

  return postfix.join(' ');
};