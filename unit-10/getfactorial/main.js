const getFactorial = (factorial) => {
	let sumEven = 0

	for (let i = 0; i <= factorial; i++) {
		sumEven = factorial * i

		if (typeof (factorial) !== 'number' || factorial < 1 || factorial > 30) {
			return 'Data khong hop le'
		}
	}
	console.log(sumEven)
}
