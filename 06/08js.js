//섹션 변수에 담기
const section=document.querySelector("section");
//바뀌는걸 변수에 담기
let progressBar=document.querySelector(".bar")
let text=document.querySelector(".txt")
//화면높이, 창높이
const windowHeight = window.innerHeight;
//스크롤양을 담을 변수
let scrollTop;

window.addEventListener("scroll",function(){
  scrollTop=window.pageYOffset || document.documentElement.scrollTop||scrollY ;
})
/*퍼센트구하기
1. 화면높이 windowHeight
2. 문서총높이 scrollHeight 변수로 선언 후 ???
client heightT//패딩을 포함한 높이
3. 2-1: 
*/
let scrollHeight= section.clientHeight;
let scrollRealHeight = scrollHeight-windowHeight;
console.log(scrollRealHeight)
//퍼센트로 바꾸기 부분/전체*100
let  scrollPercent = (scrollTop/scrollRealHeight)*100
text.textContent=Math.floor(scrollPercent+"%");
progressBar.getElementsByClassName.width=Math
console.log(Math.floor(scrollPercent))