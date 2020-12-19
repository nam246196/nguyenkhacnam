// lesson 4
const data = [['a', 1], ['b', 2]]

const convertArrayToObject = data => {
  const newObj = {}
  data.forEach(array => {
    newObj[array[0]] = array[1]
  })
  return newObj
};
