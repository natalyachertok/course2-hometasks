function getNumWord(num, word1, word2, word5) {
  let doubleDigit = num % 100;
  let singleDigit = num % 10;
  switch (singleDigit) {
    case 1:
      switch (doubleDigit) {
        case 11:
          alert(num + ' ' + word5);
          break;
        case 21:
          alert(num + ' ' + word1);
          break;
        default:
          alert(num + ' ' + word1);
      }
      break;
    case 2:
      switch (doubleDigit) {
        case 12:
          alert(num + ' ' + word5);
          break;
        case 22:
          alert(num + ' ' + word2);
          break;
        default:
          alert(num + ' ' + word2);
      }
      break;
    case 3:
      switch (doubleDigit) {
        case 13:
          alert(num + ' ' + word5);
          break;
        case 23:
          alert(num + ' ' + word2);
          break;
        default:
          alert(num + ' ' + word2);
      }
      break;
    case 4:
      switch (doubleDigit) {
        case 14:
          alert(num + ' ' + word5);
          break;
        case 24:
          alert(num + ' ' + word2);
          break;
        default:
          alert(num + ' ' + word2);
      }
      break;
    default:
      alert(num + ' ' + word5);
  }
}

let num = +prompt('Введите количество яблок');
getNumWord(num, 'Яблоко', 'Яблока', 'Яблок');