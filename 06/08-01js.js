const section=document.querySelector("section");
let progressBar=document.querySelector(".bar");
let text=document.querySelector(".txt");

const windowHeight=window.innerHeight;
let scrollTop;
//기능별 수정
//진행율 계산 함수
function getPercent(sct){
  let scrollHeight = section.clientHeight;//패딩포함높이
  let scrollRealHeight=scrollHeight-windowHeight;//스크롤할 실제 거리
  let scrolltext =Math.floor((sct/scrollRealHeight)*100);//백분율
  let scrollPercent =(sct/scrollRealHeight)*100;//백분율
  render(scrolltext,scrollPercent)
}

//화면출력 함수
function render(sct,scp){
  progressBar.style.width=(scp+"%")
  text.textContent = sct + "%";
}
//스크롤이벤트함수
window.addEventListener('scroll',function(){
  scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
  getPercent(scrollTop);
  console.log(scrollTop)





//초안
// window.addEventListener('scroll',function(){
//   scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
  //let scrollHeight = section.clientHeight;//패딩포함높이
  //let scrollRealHeight=scrollHeight-windowHeight;//스크롤할 실제 거리
  //let scrollPercent =(scrollTop/scrollRealHeight)*100;//백분율
  //let scrollAmount = Math.floor(scrollPercent);
  //progressBar.style.width=(scrollAmount+"%")
  //text.textContent = scrollAmount + "%";
})


