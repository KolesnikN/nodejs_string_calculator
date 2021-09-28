//Получаем массив со смешанной строкой и возвращаем новый массив без символов / и * и с заменой соседних чисел результатом этих операций
const multiDiv = (operationParsed) => {

  let newArray = [...operationParsed]
  let indexMul = newArray.indexOf('*')
  let indexDiv = newArray.indexOf('/')

  if(indexMul !== -1 && indexMul > indexDiv){
    // Умножение соседних чисел
    let currentOp = newArray[indexMul-1] * newArray[indexMul+1]
    newArray.splice(indexMul-1,3,currentOp)
    return multiDiv(newArray)
  } else if(indexDiv !== -1 && indexDiv > indexMul){
    // Деление соседних чисел
    let currentOp = newArray[indexDiv-1] / newArray[indexDiv+1]
    newArray.splice(indexDiv-1,3,currentOp)
    return multiDiv(newArray)
  } else {
    return newArray
  }
}

module.exports = multiDiv