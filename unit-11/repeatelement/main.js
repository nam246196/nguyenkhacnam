function getRepeatElement(str, number) {
	let array = []
	if (typeof(str) !== 'string') {
		return 'Data khong hop le'
	}
	else {
		for (let i = 0; i < number; i++) {
			array.push(str)
		}
		console.log(array);
	}
}
