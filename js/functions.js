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
