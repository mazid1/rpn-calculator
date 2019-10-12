'use strict';

class Tokenizer {
  tokenize(exp) {
    let tokens = [];
    let numBuff = [];
    let leftParBuff = [];

    exp.replace(/\s+/g, ''); // remove white spaces
    exp = exp.split('');
    exp.forEach((ch, idx) => {
      if (this.isDigit(ch)) {
        numBuff.push(ch);
      } else if (this.isDecimalPoint(ch)) {
        numBuff.push(ch);
      } else if (this.isOperator(ch)) {
        leftParBuff.forEach(x => tokens.push(x));
        leftParBuff = [];
        tokens.push(numBuff.join(''));
        numBuff = [];
        tokens.push(ch);
      } else if (this.isLeftParenthesis(ch)) {
        tokens.push(numBuff.join(''));
        numBuff = [];
        tokens.push(ch);
      } else if (this.isRightParenthesis(ch)) {
        tokens.push(numBuff.join(''));
        numBuff = [];
        leftParBuff.forEach(x => tokens.push(x));
        leftParBuff = [];
        tokens.push(ch);
      }
    });

    if (numBuff.length > 0) {
      tokens.push(numBuff.join(''));
    }

    return tokens.join(' ');
  }

  isDigit(ch) {
    return /\d/.test(ch);
  }

  isDecimalPoint(ch) {
    return (ch === '.');
  }

  isOperator(ch) {
    return /\+|-|\*|\/|\^/.test(ch);
  }

  isLeftParenthesis(ch) {
    return (ch === '(');
  }

  isRightParenthesis(ch) {
    return (ch === ')');
  }
}


module.exports = new Tokenizer;