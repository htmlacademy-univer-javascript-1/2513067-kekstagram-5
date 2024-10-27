function isStringLengthValid (stringInput, maxLength){
  return stringInput <= maxLength;
}

console.log(isStringLengthValid('проверяемая строка', 20)); // true
console.log(isStringLengthValid('проверяемая строка', 18)); // true
console.log(isStringLengthValid('проверяемая строка', 10)); // false
