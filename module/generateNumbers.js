const generateStringNum = require('./generateStringNum')
const generateNum = require('./generateNum.js')

// Получаем строку с математической операцией и возвращаем массив чисел
const generateNumbers = (inputString) => {

  let stringNum = generateStringNum(inputString)

  let numberArray = generateNum(stringNum)

  return numberArray
}

module.exports = generateNumbers