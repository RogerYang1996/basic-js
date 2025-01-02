const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const array = n.toString().split('');
  console.log(array);
  let result = [];

  for (let i = 0; i < array.length; i += 1) {
      const newArray = array.filter((_, index) => index !== i);
      result.push(newArray.join(''));
  }
  return Math.max.apply(null, result);
}

module.exports = {
  deleteDigit
};
