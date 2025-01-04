function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

// Cтрока короче 20 символов
console.log(checkStringLength('проверяемая строка', 20)); // true
// Длина строки ровно 18 символов
console.log(checkStringLength('проверяемая строка', 18)); // true
// Строка длиннее 10 символов
console.log(checkStringLength('проверяемая строка', 10)); // false

function isPalindrome(str) {
  // Приводим строку к нижнему регистру и удаляем пробелы
  const normalizedStr = str.toLowerCase().replace(/\s+/g, '');
  // Сравниваем строку с её перевернутой версией
  return normalizedStr === normalizedStr.split('').reverse().join('');
}
// Строка является палиндромом
console.log(isPalindrome('топот')); // true

// Несмотря на разный регистр, тоже палиндром
console.log(isPalindrome('ДовОд')); // true

// Это не палиндром
console.log(isPalindrome('Кекс')); // false
