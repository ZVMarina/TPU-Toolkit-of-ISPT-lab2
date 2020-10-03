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
  console.log(`Результат: [${res}]`)
}

/* Задание 1.3: В массиве A1, A2, ... , An найти максимальный элемент и его местоположение в массиве.
*/

const findMaxNumberButton = document.querySelector('.findMaxNumberButton')

findMaxNumberButton.addEventListener('click', findMaxNumber)

function findMaxNumber() {
  const arr = [1, 2, 3, 4, 100, 6, 7, 8, 9, 1000]
  const res = arr.sort(function (a, b) {
    return b - a
  })
  const maxNumber = res[0]
  console.log(`Массив после сортировки по убыванию: [${arr}]`)
  console.log(`Наибольшее число: ${maxNumber}`)
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
  console.log('Преобразованная матрица:')
  console.log(finalMatrix)
}



