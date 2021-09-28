const generateOperators = require('./module/generateOperators')
const generateNumbers = require('./module/generateNumbers')
const generateOperation = require('./module/generateOperation')
const operationParser = require('./module/operationParser')
const multiDiv = require('./module/multiDiv')
const sumItems = require('./module/sumItems')
const figlet = require('figlet')

// Получаем строку с математической операцией и возвращаем итоговое число
const stringCalculator = (inputString) => {

  let operationArray = generateOperators(inputString)
  let numberArray = generateNumbers(inputString)
  let operation = generateOperation(operationArray, numberArray)
  let operationParsed = operationParser(operation)
  let operationMultiDiv = multiDiv(operationParsed)
  let result = sumItems(operationMultiDiv)

  return result
}

console.log(figlet.textSync('Calculator for KNOMARY', {
  font: 'Basic',
  horizontalLayout: 'default',
  verticalLayout: 'default'
}));

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Введите математическое выражение в строку: `, expression => {
  console.log(`Ваш ответ: ${stringCalculator(expression)}`)
  readline.close()
})

// Примеры для проверки:
// 2+2*2
// -32+56*62/24+71*15+19/14
// 318 + 402 * 320 * 244 / 8170 - 3185