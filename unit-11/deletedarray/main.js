// lesson 8
const deletedArray = array => {
  if (array.length < 5) return
  array.splice(1, 2)
  return array
}
