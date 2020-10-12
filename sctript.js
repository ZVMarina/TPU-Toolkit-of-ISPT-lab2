// Вариант 4
// Задание 1.1: В массиве А1, ... , Аn найти количество элементов равных единице, стоящих на чётных местах.

const findNumberOneButton = document.querySelector('.findNumberOneButton')

findNumberOneButton.addEventListener('click', findNumberOne)

function findNumberOne() {
  const arr = [0, 1, 1, 1, 5, 6, 7, 1, 1]
  const res = arr.filter(function (item, index) {
    if ([index + 1] % 2 === 0 && item === 1) {
      return item
    }
  })
  console.log(`Исходный массив: [${arr}]`)
  console.log(`Количество едениц, стоящих на чётных местах: ${res.length}`)
}

/* Задание 1.2: Известно, что в массиве А1,А2,...,Аn количество отрицательных чисел равно количеству положительных. 
Составить новый массив так, чтобы чередовались положительные и отрицательные числа. 
*/

const sortNumderButton = document.querySelector('.sortNumderButton')

sortNumderButton.addEventListener('click', sortNumder)

function sortNumder() {
  const arr = [1, 2, 3, , -56, 34, 104, -102, 4, -5, -6, -7, -8]

  const res1 = arr.filter(function (item) {
    if (item < 0) {
      return item
    }
  })

  const res2 = arr.filter(function (item) {
    if (item > 0) {
      return item
    }
  })

  const res = []
  let x = 0
  let y = 0
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      res.push(res2[x])
      x += 1
    } else {
      res.push(res1[y])
      y += 1
    }
  }

  console.log(`Исходный массив: [${arr}]`)
  console.log(`Сортировка с чередованием "+" и "-" элементов: [${res}]`)
}

/* Задание 1.3: В массиве A1, A2, ... , An найти максимальный элемент и его местоположение в массиве.
*/

const findMaxNumberButton = document.querySelector('.findMaxNumberButton')

findMaxNumberButton.addEventListener('click', findMaxNumber)

function findMaxNumber() {
  const arr = [1, 2, 3, 100, 5, 6, 7, 1000, 9, 10]
  const arrCopy = arr.slice()
  const res = arrCopy.sort(function (a, b) {
    return b - a
  })
  const maxNumber = res[0]
  console.log(`Исходный массив: [${arr}]`)
  console.log(`Наибольший элемент: ${maxNumber}`)
}

/* Задание 2.1: Преобразовать квадратную матрицу, поменяв местами столбец с наибольшим количеством элементов кратных 3 со столбцом, в котором сумма четных элементов минимальная
*/

const transformMatrixButton = document.querySelector('.transformMatrixButton')

transformMatrixButton.addEventListener('click', transformMatrix)

function transformMatrix() {

  const matrix =
    [
      [9, 1, 2, 9],
      [3, 1, 1, 9],
      [6, 1, 2, 7],
      [3, 0, 3, 2]
    ]

  // Столбцы делаем строками
  const reverseMatrix = []
  let index = 0;
  for (let i = 0; i < matrix.length; i++) {
    const newArr = []
    matrix.forEach(function (arrItem) {
      newArr.push(arrItem[index])
    })
    index += 1
    reverseMatrix.push(newArr)
  }

  // Добавляем в пустой массив количество троек в каждом столбце
  const quantityMultiples = []
  reverseMatrix.forEach(function (arrItem) {
    const quantity = arrItem.reduce(function (prevValue, item) {
      if (item % 3 === 0) {
        prevValue++
      }
      return prevValue
    }, 0)
    quantityMultiples.push(quantity)
  })

  // Добавляем в пустой массив сумму чётных каждого столбца
  const quantityEven = []
  reverseMatrix.forEach(function (arrItem) {
    const quantity = arrItem.reduce(function (prevValue, item) {
      if (item % 2 === 0) {
        prevValue = prevValue + item
      }
      return prevValue
    }, 0)
    quantityEven.push(quantity)
  })

  // Находим наибольшее количество троек (максимальный элемент массива) и индекс этого элемента
  const quantityThree = Math.max.apply(null, quantityMultiples)
  let indexColumnThree;
  quantityMultiples.forEach(function (item, index) {
    if (item === quantityThree) {
      indexColumnThree = index
    }
  })

  // Находим наименьшую сумму чётных (наименьший элемент массива) и индекс этого элемента
  const sumEven = Math.min.apply(null, quantityEven)
  let indexColumnSum;
  quantityEven.forEach(function (item, index) {
    if (item === sumEven) {
      indexColumnSum = index
    }
  })

  // Меняем столбцы местами
  const reverseMatrixCopy = reverseMatrix.slice()
  reverseMatrix[indexColumnThree] = reverseMatrix[indexColumnSum]
  reverseMatrix[indexColumnSum] = reverseMatrixCopy[indexColumnThree]

  // Столбцы делаем строками
  const finalMatrix = []
  let indexFinalMatrix = 0;
  for (let i = 0; i < reverseMatrix.length; i++) {
    const newArr = []
    reverseMatrix.forEach(function (arrItem) {
      newArr.push(arrItem[indexFinalMatrix])
    })
    indexFinalMatrix += 1
    finalMatrix.push(newArr)
  }

  console.log('Исходная матрица:')
  console.log(matrix)
  console.log(`Икомый столбец кратных тройке: ${indexColumnThree + 1}`)
  console.log(`Икомый столбец суммы чётных: ${indexColumnSum + 1}`)
  console.log('Преобразованная матрица:')
  console.log(finalMatrix)
}

/* Задание 2.1: Разработать программу подсчета количества отрицательных  элементов целочисленной матрицы A[M*N], стоящих на пересечении  четных строк и столбцов.
*/

const quantityNegativeButton = document.querySelector('.quantityNegativeButton')

quantityNegativeButton.addEventListener('click', countQuantityNegative)

function countQuantityNegative() {

  const matrix =
    [
      [1, -2, 3, -4],
      [5, -6, 7, -8],
      [9, -10, 11, -12],
      [13, -14, 15, 16]
    ]

  const EvenLines = []
  matrix.forEach(function (item, index) {
    if ((index + 1) % 2 === 0) {
      EvenLines.push(item)
    }
  })

  const NegativeElements = []
  EvenLines.forEach(function (item) {
    item.forEach(function (el, index) {
      if ((index + 1) % 2 === 0 && el < 0) {
        NegativeElements.push(el)
      }
    })
  })

  const quantityNegative = NegativeElements.length

  console.log(matrix)
  console.log(`Количество отрицательных элементов в матрице, стоящих на пересечении  четных строк и столбцов: ${quantityNegative}`)
}

/* Задание 3.1: Даны два предложения, причем второе состоит из слов первого, записанных в другом порядке. Найти этот порядок.
*/

const findPositionButton = document.querySelector('.findPositionButton')

findPositionButton.addEventListener('click', findPosition)

function findPosition() {
  const str = prompt('Введите предложение')
  const strReverse = str.split(' ').reverse().join(' ')
  const arr = str.split(' ')
  const arrStrReverse = strReverse.split(' ')
  console.log(`Исходное предложение: ${str}`)
  console.log(`Преобразованное предложение: ${strReverse}`)
  arr.forEach(function (item1, index1) {
    arrStrReverse.forEach(function (item2, index2) {
      if (item1 === item2) {
        console.log(`В исходном предложение позиция элемента "${item1}": ${index1 + 1}, в преобразованном: ${index2 + 1}`)
      }
    })
  })
}

/* Задание 3.2: Написать программу, реализующую следующие функции работы с массивом строк (путем ввода соответствующих команд в консоли)
1.	Создание строки и добавление её в массив на заданную позицию i (с соответствующим сдвигом всех следующих за i элементов массива).
2.	Вывод всех строк массива на экран.
3.	Вывод i строки массива на экран.
4.	Редактирование i строки массива (добавление нового слова, замена существующего слова, удаление слова).
5.	Замена слова в каждой строке массива.
6.	Удаление строки из массива.
*/

let week = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье'
]

const addStrButton = document.querySelector('.addStrButton')
addStrButton.addEventListener('click', addStr)

function addStr() {
  const str = prompt('Введите строку')
  const position = prompt('На какую позицию поставить строку?')
  week.splice(position - 1, 0, str)
}

const showaArosticButton = document.querySelector('.showaArosticButton')
showaArosticButton.addEventListener('click', showaArostic)

function showaArostic() {
  console.log(week)
}

const showSrtrButton = document.querySelector('.showSrtrButton')
showSrtrButton.addEventListener('click', showSrt)

function showSrt() {
  const position = +prompt('Какую строку вы хотите увидеть?')
  console.log(week[position - 1])
}

const addWordButton = document.querySelector('.addWordButton')
addWordButton.addEventListener('click', addWord)

function addWord() {
  const numberStr = +prompt('В какую строку вы хотите добавить слово?')
  const arrStr = week[numberStr - 1].split(' ')
  const word = prompt('Введите слово')
  const position = +prompt('На какую позицию вы хотите поставить слово?')
  arrStr.splice(position - 1, 0, word)
  const str = arrStr.join(' ')
  week.splice(numberStr - 1, 1, str)
}

const changeWordButton = document.querySelector('.changeWordButton')
changeWordButton.addEventListener('click', changeWord)

function changeWord() {
  const numberStr = +prompt('В какой строке вы хотите заменить слово?')
  const arrStr = week[numberStr - 1].split(' ')
  const position = +prompt('На какой позиции стоит слово, которое вы хотите заменить?')
  const word = prompt('Введите новое слово')
  arrStr.splice(position - 1, 1, word)
  const str = arrStr.join(' ')
  week.splice(numberStr - 1, 1, str)
}

const deleteWordButton = document.querySelector('.deleteWordButton')
deleteWordButton.addEventListener('click', deleteWord)

function deleteWord() {
  const numberStr = +prompt('В какой строке вы хотите удалить слово?')
  const arrStr = week[numberStr - 1].split(' ')
  const position = +prompt('На какой позиции стоит слово, которое вы хотите удалить?')
  arrStr.splice(position - 1, 1)
  const str = arrStr.join(' ')
  week.splice(numberStr - 1, 1, str)
}

const changeWordStrButton = document.querySelector('.changeWordStrButton')
changeWordStrButton.addEventListener('click', changeWordStr)

function changeWordStr() {
  const position = +prompt('На какой позиции стоит слово, которое вы хотите заменить?')
  const word = prompt('Введите новое слово')
  const newWeek = []
  week.forEach(function (str) {
    const res = str.split(' ').map(function (item, index) {
      if (index + 1 === position) {
        return item = word
      } else {
        return item
      }
    })
    const newStr = res.join(' ')
    newWeek.push(newStr)
  })
  week = newWeek
}

const deleteStrButton = document.querySelector('.deleteStrButton')
deleteStrButton.addEventListener('click', deleteStr)

function deleteStr() {
  const position = +prompt('Введите номер строки, которую вы хотите удалить')
  const newWeek = week.filter(function (item, index) {
    if (index + 1 !== position) {
      return item
    }
  })
  week = newWeek
}
