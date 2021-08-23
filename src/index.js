module.exports = function check(str, bracketsConfig) {
  let b = bracketsConfig;
  arr = str.split("");
  let l2 = bracketsConfig.length;
  loop1: for (let i = 0; i < l2; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (b[i][0] == arr[j] && b[i][1] == arr[j + 1]) {
        arr.splice(j + 1, 1);
        arr.splice(j, 1);
        i = -1;
        continue loop1;
      }
    }
  }
  return (arr.length > 0) ? false : true;
}