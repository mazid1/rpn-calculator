'use strict';
const MathUtil = require('./mathUtil');

module.exports = function getPostfix(exp) {
  exp = exp.split(' ');
  exp.unshift('(');
  exp.push(')');

  let postfix = [];
  let opStack = [];

  exp.forEach(token => {
    if (MathUtil.isNumber(token)) {
      postfix.push(token);
    } else if (MathUtil.isOperator(token)) {
      opStack.push(token);
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
  console.error(postfix);
  return postfix.join(' ');
};