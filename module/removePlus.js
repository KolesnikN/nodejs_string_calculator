// Получаем массив с операторами + и возвращаем новый массив без него
const removePlus = (arrayWithPlus) => {
  let newArray = [...arrayWithPlus]
  while(newArray.indexOf('+') !== -1){
    let indexPlus = newArray.indexOf('+')
    newArray.splice(indexPlus, 1)
  }
  
  return newArray
}

module.exports = removePlus