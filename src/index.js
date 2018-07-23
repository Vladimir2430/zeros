module.exports = function getZerosCount(number) {
  let sum = 0;
  let count = 5;
  while (number > count) {
    sum += Math.floor(number / count);
    count *= 5;
  }
  return sum;
}
