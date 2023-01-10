const textZone = document.querySelector("#textZone");

//id btnone 클릭하면 textzone의 글씨색변경

//1. 함수를 실행할 요소 확인
const btn1 =document.querySelector("#btn1");

//2. 함수 실행시점(=호출)과 수행 동작을 확인{실행문}
btn1.onclick=function(){
  textZone.style.color="blue";
  textZone.classList.add("blue");
}
  //마우스오버시
const btn2=document.querySelector("#btn2");
btn2.onmouseover=function(){
  textZone.style.backgroundColor="yellow";
}
//btn2포커스 발생(tab키로)시 배경노랑으로
btn2.onfocus=function(){textZone.style.backgroundColor="yellow";}


//btn3 에 여러개의 이벤트 등록
const btn3=document.querySelector("#btn3");
function textZone4(){
  textZone.style.color="green";
  textZone.style.fontSize="4em";
}
// btn3.onmouseover=textZone4;
// btn3.onfocus=textZone4;
// btn3.onclick=function(){
//   alert("click");
// };
// btn3.onclick=function(){
//   textZone.style.marginLeft="80px";
// };//alert 창 안뜸
//같은함수에 넣어도 안됨
//addEventListner 넣어야함
btn3.addEventListener('click',function(){
  alert("click")
})
btn3.addEventListener('click',function(){
  textZone.style.marginLeft="80px";
})
//propery listener로 이벤트 등록시 같은 이벤트아래것만실행 ㅋ
const listWrap=document.querySelector("#listWrap");
const list1=document.querySelector(".list1")
listWrap.addEventListener("mouseenter",
function(){list1.style.display="blorck"
})
listWrap.addEventListener("mouseleave",
function(){list1.style.display="none"
})

let hover=document.querySelector(".hover")
.addEventListener("mouseenter",
function(){hover.style.display="aqua"
})
listWrap.addEventListener("mouseleave",
function(){hover.style.display="nred"
})//THIS 자기이 행동을 불러낸 주인

hover=addEventListener
addEventListener("mouseenter",()=>{
  this.Style.color="aqua"
})// 화살표함수 쓰면 제일 제일상단이부모가된다.