var myPetsArray = ["Dog", "Cat"];
function myArrayFunction(myPets) {
  var myNewPets = [...myPets];
  myNewPets.push("Bird", "Fish");
  var duzina = myNewPets.length;
  var firstPet = myNewPets[0];
  var lastPet = myNewPets[duzina - 1];
  myNewPets[0] = "Lion";
  myNewPets.pop(lastPet);

  return myNewPets;
}
console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;
