function splitArrayInGroups(arr, n) {
  var result = [];
  var i, j;
  for (i = 0, j = arr.length; i < j; i += n) {
    result.push(arr.slice(i, i + n));
  }
  console.log(result);
}
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
module.exports = splitArrayInGroups;
