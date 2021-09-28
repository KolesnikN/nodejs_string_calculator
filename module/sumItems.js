const removePlus = require('./removePlus')


const sumItems = (operationMultiDiv) => {

    let newArray = [...operationMultiDiv]

    if(newArray.length > 1){
      // Если длина массива больше 1 и если массив содержит +, удаляем его и возвращаем массив без +
      if(newArray.indexOf('+') !== -1){            
        newArray = removePlus(newArray)
        return newArray.reduce((previous, current) => previous + current)
        } else {
          // Складываем оставшиеся в массиве числа
          return newArray.reduce((previous, current) => previous + current)
        }
    } else {
      return newArray[0]
    }
}

module.exports = sumItems