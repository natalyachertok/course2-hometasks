// function checkData(lastName, firstName, fatherName, age) {
//   let exit;
//   if (lastName === '' || firstName === '' || fatherName === '' || age === '' || age < 7) {
//     exit = confirm('Анкета заполнена некорректно. Хотите выйти?');
//   }
//   // if (exit === false) {
//   //   lastName = prompt('Введите фамилию:');
//   // }
//   else {
//     outputData();
//   }
// }

function outputData(lastName, firstName, fatherName, age, gender) {
  let ageInDays = age * 365;
  let ageInFuture = age + 5;
  let retirement;
  let exit;
  if (gender === true) {
    gender = 'мужской';
  } else {
    gender = 'женский';
  }
  if (age <= 65) {
    retirement = 'нет';
  } else {
    retirement = 'да';
  }
  if (lastName === '' || firstName === '' || fatherName === '' || age === '' || age < 7) {
    exit = confirm('Анкета заполнена некорректно. Хотите выйти?');
  } else {
    alert('Ваше ФИО: ' + lastName + ' ' + firstName + ' ' + fatherName + '\n' + 'Ваш возраст в годах: '
      + age + '\n' + 'Ваш возраст в днях: ' + ageInDays + '\n' + 'Ваш возраст через 5 лет: ' + ageInFuture +
      '\n' + 'Ваш пол: ' + gender + '\n' + 'Вы на пенсии: ' + retirement);
  }

}

lastName = prompt('Введите фамилию:');
firstName = prompt('Введите имя:');
fatherName = prompt('Введите отчество:');
age = +prompt('Введите возраст');
gender = confirm('Ваш пол - мужской?');
outputData(lastName, firstName, fatherName, age, gender);


