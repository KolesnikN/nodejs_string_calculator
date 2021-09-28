// Получаем массив строк и возвращаем массив чисел
const generateNum = (stringNum) => {
  let numbers = stringNum.map(val => +val)
  
  return numbers
}

module.exports = generateNum