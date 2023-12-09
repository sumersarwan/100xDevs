let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function twoTimes(num) {
  return num * 2;
}

function even(num) {
  return num % 2 === 0;
}
let arr2 = arr.map(twoTimes);
console.log(arr2);

let arr3 = arr.filter(even);
console.log(arr3);
