// lesson 2
const enterAccount = event => {
  const regex = /^([a-z0-9_]{1,})$/g
  if (!regex.test(event.target.value)) {
    alert(' Kí tự không hợp lệ vui long nhập lại')
  }
}



// lesson 3
const numberMoney = event => {
  const regex = /^(\-)?[0-9]+$/g
  if (event.keyCode === 13) {
    if (!regex.test(event.target.value)) {
      alert('Bạn chỉ được phép nhập số (0 -> 9)')
    }
  }
}



// lesson 5
const highlightText = () => {
  console.log(window.getSelection().toString())
}



// lesson 6
const getSelected = (event) => {
  console.log(event.target.value)
}
