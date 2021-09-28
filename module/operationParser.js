// получаем массив, смешанный со строкой и числами, и возвращает новый массив
// Изменяет (-x) на (-1 * x)
const operationParser = (operation) => {

  let newArray = [...operation]
  if(newArray.indexOf('-') !== -1){

    let index = newArray.indexOf('-')
    newArray.splice(index, 1, -1, '*')
    return operationParser(newArray)
  } else {
    return newArray
  }
}

module.exports = operationParser