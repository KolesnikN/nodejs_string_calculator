// Получаем строку с математической операцией и возвращаем массив строки с отдельными числами
const generateStringNum = (inputString) => {

  let stringNumbers = inputString.match(/\d[?\.|?\d]*/g)
  
  return stringNumbers
}

module.exports = generateStringNum