var niz = [[2], [5, 6, 7], [8, 9]];
function multiplyArrayFunction(myArray) {
  myNewArray = [...myArray];
  //console.log(myNewArray)
  var product = 1;
  var sum = 0;
  var arr = [];
  for (let i = 0; i < myNewArray.length; i++) {
    for (let j = 0; j < myNewArray[i].length; j++) {
      product *= myNewArray[i][j];
      sum += myNewArray[i][j];
    }
  }
  arr.push(product, sum);

  return arr;
}
console.log(multiplyArrayFunction(niz));
module.exports = multiplyArrayFunction;