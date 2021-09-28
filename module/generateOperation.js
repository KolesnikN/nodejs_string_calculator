const fillOperation = require('./fillOperation')

// Получаем строку, массив операторов и массив чисел и возвращаем смешанный массив
const generateOperation = (operationArray, numberArray) => {

    if(operationArray.length === 0) return numberArray

    let operation = []

    if(numberArray.length > operationArray.length){
      // Условие заполнения: если чисел больше, чем математических операторов
      operation = fillOperation(numberArray, operationArray)
    } else {
      // Условие заполнения: если чисел равно или меньше, чем математических операторов
      operation = fillOperation(operationArray, numberArray)
    }
    
    return operation
}

module.exports = generateOperation