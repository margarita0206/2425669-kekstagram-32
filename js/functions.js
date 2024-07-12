const checkString = (string, maxLength) => string <= maxLength;

checkString('проверяемая строка', 20); //true
checkString('проверяемая строка', 18); //true
checkString('проверяемая строка', 10); //false

function isPalindrom(checkedString) {
  const normalizeString = checkedString.replaceAll(' ', '').toLowerCase();
  let reversed = '';

  for (let i = normalizeString.length - 1; i >= 0; i--){
    reversed = reversed + normalizeString[i];
  }
  return checkedString === reversed;
}

isPalindrom('топот'); //true
isPalindrom('ДовОд'); //true
isPalindrom('Кекс'); //false
isPalindrom('Лёша на полке клопа нашёл '); //true

//задача делу-время

const converseToMinutes = (timeStroke) => {
  const timeInMinutes = timeStroke.split(':');
  return parseInt(timeInMinutes[0], 10) * 60 + parseInt(timeInMinutes[1], 10);
};

const isMeetInWork = (workStartTime, workEndTime, meetStartTime, meetDuration) => {
  const workStart = converseToMinutes(workStartTime);
  const workEnd = converseToMinutes(workEndTime);
  const meetStart = converseToMinutes(meetStartTime);

  if (meetStart >= workStart) {
    if ((meetStart + meetDuration) <= workEnd) {
      return true;
    }
  }

  return false;
};

isMeetInWork('08:00', '17:30', '14:00', 90); // true
isMeetInWork('8:0', '10:0', '8:0', 120); // true
isMeetInWork('08:00', '14:30', '14:00', 90); // false
isMeetInWork('14:00', '17:30', '08:0', 90); // false
isMeetInWork('8:00', '17:30', '08:00', 900); // false
