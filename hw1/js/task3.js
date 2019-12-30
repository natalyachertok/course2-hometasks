// function isPolindrom1(str) {
//   return str === str.split('').reverse().join('');
// }
//
// function isPolindrom2(str) {
//   let result = '';
//
//   for(let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }
//
//   return result === str;
// }
//
// console.log(isPolindrom2('1301'));
// console.log(isPolindrom2('abba'));
function isPolindrom(str) {
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] != str[j]) {
      return false;
    }
  }
return true;
}

console.log(isPolindrom('aииa'));
console.log(isPolindrom('aиgиa'));
console.log(isPolindrom('abgbags'));