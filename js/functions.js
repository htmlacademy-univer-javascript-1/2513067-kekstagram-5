function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

// Cтрока короче 20 символов
(checkStringLength('проверяемая строка', 20)); // true
// Длина строки ровно 18 символов
(checkStringLength('проверяемая строка', 18)); // true
// Строка длиннее 10 символов
(checkStringLength('проверяемая строка', 10)); // false


function isPalindrome(str) {
  // Приводим строку к нижнему регистру и удаляем пробелы
  const normalizedStr = str.toLowerCase().replace(/\s+/g, '');
  // Сравниваем строку с её перевернутой версией
  return normalizedStr === normalizedStr.split('').reverse().join('');
}
// Строка является палиндромом
(isPalindrome('топот')); // true

// Несмотря на разный регистр, тоже палиндром
(isPalindrome('ДовОд')); // true

// Это не палиндром
(isPalindrome('Кекс')); // false
