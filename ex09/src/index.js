var niz = [7, "ate", "", false, 9, null, 0, NaN, undefined];

function myBouncer(arr) {
  return arr.filter(Boolean);
}
console.log(myBouncer(niz));
module.exports = myBouncer;
