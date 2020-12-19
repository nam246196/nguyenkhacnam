// lesson 7
const obj = { a: 1, b: 2, c: 3, d: 4 }

const getObjectOther = (object, ...rest) => {
  for (const key in object) {
    rest.forEach(item => {
      if (key === item) {
        delete object.key
      }
    })
  }

  return object
}
