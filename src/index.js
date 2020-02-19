
// You should implement your task here.

//
module.exports = function towelSort (arr) {
  return (!arr) ? [] : arr.map( (val, i) => (i%2 == 0) ? val : val.reverse()).flat();
}
/*
let a = [
  [1, 2, 4],
  [5, 6, 7, 8],
  [9, 12],
];

console.log(towelSort(a));*/