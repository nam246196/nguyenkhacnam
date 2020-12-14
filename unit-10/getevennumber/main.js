
const getEvenNumber = (evennumber) => {
  if (typeof (evennumber) !== 'number' || evennumber < 1 || evennumber > 30) {
    return 'Data khong hop le'
  }

  for (let i = 0; i <= evennumber; i += 2) {
    console.log(i)
  }
}
