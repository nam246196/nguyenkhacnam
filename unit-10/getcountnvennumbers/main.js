function getCountEvenNumbers() {
  let count = 0
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] % 2 == 0) {
      count++
    }
    console.log()
  }
  return count
}
