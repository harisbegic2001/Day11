//Create an array here
var myArr = [2, 4, 0, 8, 10];
//End of creating an array

function myArrayFunction(arr) {
  var myItems = myArr;
  //Only change code below this line
  myItems[2] = arr;
  return myItems;
  //Only change above below this line
}

console.log(myArrayFunction(6));
module.exports = myArrayFunction;
