module.exports = function towelSort(arr) {
    return (!arr) ? [] : arr.map((val, i) => (i % 2 === 0) ? val : val.reverse()).flat();
}
