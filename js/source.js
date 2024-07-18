
// 요소 선택하기
const buttonSelect = document.querySelector(".btn_select");
const listMember = document.getElementsByClassName("list_member");


// ul 요소를 보이게 하는 버튼, ul 요소를 숨기는 버튼 이벤트
buttonSelect.addEventListener('click', function (event) {
  buttonSelect.classList.toggle('on');
  console.log(event);
});