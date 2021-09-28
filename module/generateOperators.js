// Принимаем строку и возвращаем массив с математическими операторами
const generateOperators = (inputString) => {

let operators = inputString.match(/[*/+-]/g)
  if(operators){
    return operators
  } else {
    return []
  }
}

module.exports = generateOperators