// Получаем два массива и возвращаем новый
const fillOperation = (array1, array2) => {

  let operationArray = [...array1]
  let numberArray = [...array2]
  let result = []

  while(operationArray.length > 0){
      result.push(operationArray[0])
      operationArray.splice(0,1)
      // Берём в массиве операторов первое значение, добавляем его в массив result и удаляем из operationArray
      if(numberArray.length > 0) {
          result.push(numberArray[0])
          numberArray.splice(0,1)
      // Берём в массиве чисел первое значение, добавляем его в массив result и удаляем из numberArray  
      }
  }

  return result
}

module.exports = fillOperation