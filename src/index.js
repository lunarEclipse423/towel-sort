module.exports = function towelSort (matrix) {
  return typeof matrix === 'undefined' ? [] : matrix.map((elem, index) => index % 2 === 0 ? elem : elem.reverse()).flat();
}
