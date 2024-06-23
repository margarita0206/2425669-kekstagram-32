function checkString(string, maxNumber) {
  return string.length <= maxNumber;
}

checkString('проверяемая строка', 20);
checkString('проверяемая строка', 18);
checkString('проверяемая строка', 10);

function stringPalindrom(checkedString) {
  const normalizeString = checkedString.replaceAll().toUpperCase();
  let string = '';
  for (let i = normalizeString.length - 1; i >= 0; i--){
    string += normalizeString[i];
  }
  return normalizeString === string;
}

stringPalindrom('топот');
stringPalindrom('ДовОд');
stringPalindrom('Кекс');
stringPalindrom('Лёша на полке клопа нашёл ');
