const reverse = ['a', 1, '9', 'apple'].reduceRight(
  (accumulator, currentValue) => accumulator.concat(currentValue)
)
console.log(reverse)
