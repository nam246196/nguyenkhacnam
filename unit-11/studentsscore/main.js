// lesson 10
const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]

const studentsScore = () => {
  const result = []
  students.forEach(student => {
    const score = String(student.score)
    const [firstNum, lastNum] = score.split('.')
    const total = Number(firstNum) + Number(lastNum)
    if (total % 10 > 5) {
      result.push(student)
    }
  })
  return result
}
