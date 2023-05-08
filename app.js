'use strict'

const userOne = {
  name: 'Vasia',
  birthday: '12/23/2022',
}

const userTwo = {
  name: 'Oleg',
  birthday: '05/05/2023'
}

function isBirthdayToday(user){
  const today = new Date();
  const birthday = new Date(user.birthday);
  if (today.getMonth() !== birthday.getMonth()) {
    return false;
  }

  return today.getDate() === birthday.getDate();
}

console.log(isBirthdayToday(userOne));
console.log(isBirthdayToday(userTwo));