module.exports = {
  sum: (num1, num2) => num1+num2,
  subtract: (num1, num2) => num1-num2,
  div: (num1, num2) => num1/num2,
  multply: (num1, num2) => num1*num2,
  pow: function recursive(base, pow) {
    return pow === 0 ? 1 : (base * (recursive(base, pow-1)))
  }
}