const studentNames = [
  { id: 1, name: 'Nguyễn Thị Tèo' },
  { id: 2, name: 'Phạm Văn Bưởi' },
  { id: 3, name: 'Hoàng Văn Nam' },
  { id: 4, name: 'Vũ Ngọc Duy' },
  { id: 5, name: 'Nguyễn Minh Nhật' },
  { id: 6, name: 'Phí Duy Quân' },
  { id: 7, name: 'Trần Minh Minh' }
]
const studentScores = [
  { id: 1, score: 9.2 },
  { id: 2, score: 2.3 },
  { id: 3, score: 3.7 },
  { id: 4, score: 6.9 },
  { id: 5, score: 5.2 },
  { id: 6, score: 9.6 },
  { id: 8, score: 6.1 }
]
const mergeStudents = (names, scores) => {
  const result = []
  const findItemInScores = item => {
    for (let i = 0; i < scores.length; i++) {
      const currentStudent = scores[i]
      if (currentStudent.id === item.id) {
        return currentStudent
      }
    }
    return null
  }
  names.forEach(item => {
    const student = findItemInScores(item)
    result.push({
      id: item.id,
      name: item.name,
      score: (student && student.score) || null
    })
  })
  return result
}