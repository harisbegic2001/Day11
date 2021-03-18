niz = [
  [17, 23, 25, 12],
  [25, 7, 34, 48],
  [4, 10, 18, 21],
  [72, 3, 17, 10],
];
function largestNumFromArr(arr) {
  var newArray = [...arr];
  var maxNumArray = [];

  for (let i = 0; i < newArray.length; i++) {
    var maxNum = 0;
    for (let j = 0; j < newArray[i].length; j++) {
      if (newArray[i][j] > maxNum) {
        maxNum = newArray[i][j];
      }
    }
    maxNumArray.push(maxNum);
  }

  return maxNumArray;
}
console.log(largestNumFromArr(niz));
module.exports = largestNumFromArr;
