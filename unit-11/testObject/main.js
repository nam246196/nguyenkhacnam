// lesson 6
// const obj = { a: 1 }
// const obj = [1, 2, 3]
const testObject = obj => {
  if (typeof obj === 'object' && !Array.isArray(obj)) {
    return true
  }
  else return false
}