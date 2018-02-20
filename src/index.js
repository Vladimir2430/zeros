module.exports = function getZerosCount(number) {
  var sum=0;
  var count=5;
  while (number>count) {
    sum+=Math.floor(number/count);
    count*=5;
  }
  return sum;
}
