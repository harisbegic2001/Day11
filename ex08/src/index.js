var niz = ["Tiger", "Zebra"];
function myMutation(arr) {
  var myNewArray = [...arr];
  var brojac = 0;
  for (let i = 0; i < myNewArray.length; i++) {
    myNewArray[i] = myNewArray[i].toLowerCase();
  }
  var rijecPrva = [];
  var rijecDruga = [];
  for (let i = 0; i < 1; i++) {
    for (j = 0; j < myNewArray[i].length; j++) {
      rijecPrva.push(myNewArray[i][j]);
    }
  }
  for (let i = 1; i < 2; i++) {
    for (j = 0; j < myNewArray[i].length; j++) {
      rijecDruga.push(myNewArray[i][j]);
    }
  }
  for (let i = 0; i < rijecDruga.length; i++) {
    for (let j = 0; j < rijecPrva.length; j++) {
      if (rijecDruga[j] == rijecPrva[j]) {
        brojac += 1;
      }
    }
  }
  //console.log(rijecDruga.length)
  //console.log(brojac)
  if (brojac == rijecDruga.length) {
    return true;
  } else {
    return false;
  }

  //console.log(rijecPrva)
  //console.log(rijecDruga)
}

console.log(myMutation(niz));
module.exports = myMutation;
