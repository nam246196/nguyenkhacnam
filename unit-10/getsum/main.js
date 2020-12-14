const getSum = () => {
  let sum = 0

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
    if (typeof (arguments[i]) !== 'number' || arguments[i] < 1 || arguments[i] > 30) {
      return 'Data khong hop le'
    }
  }
  return sum
}
