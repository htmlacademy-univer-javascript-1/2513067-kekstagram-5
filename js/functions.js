function isStringLengthValid(inputString, maxLength) {
  return inputString.length <= maxLength;
}

(isStringLengthValid('проверяемая строка', 20)); // true
(isStringLengthValid('проверяемая строка', 18)); // true
(isStringLengthValid('проверяемая строка', 10)); // false


function isPalindrome(inputString) {
  const normalizedString = inputString.replaceAll(' ', '').toLowerCase();
  let reversedString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString[i];
  }

  return normalizedString === reversedString;
}

(isPalindrome('топот')); // true
(isPalindrome('ДовОд')); // true
(isPalindrome('Кекс')); // false
(isPalindrome('Лёша на полке клопа нашёл')); // true
