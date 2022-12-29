$(function(){
const visual=$("#brandVisual>ul>li");
const button=$("#brandVisual>ul>li");
let current = 0;//현재
let id;//setInterverId을 담을 변수
const speed=3000;

//버튼클릭함수
button.click(function(){

});

//시간마다실행(setInterver(함수, 간격)들어가는거...)
timer();//내가이름붙여서 쓰는 함수는 한번 불러줘야되
function timer(){
  setInterval(function(){
    let next=current+1;
    if(next==visual.length-1){
      next=0;
    }
    move(next);//(이동시키는 함수한테 값을전달해줌)
  },speed)
}



//이동시키는 함수(3개의 버튼중 어떤걸 누를지 모르니까)
function move(next){
  console.log("next"+next)
  let cu=visual.eq(current);
  let ne=visual.eq(next)
  cu.css('left','0').stop().animate({left:"-100%"});
  ne.stop().animate({left:"0%"});
}



})//jQuery





//jQuery
//visual.css("background-color","red");
//js로 쓰면 아래와 같음  : 한번에 한개씩 밖에 안댐....
// document.addEventListener("DOMContentLoaded",function(){
//     const visual=document.querySelector("#brandVisual>ul>li");
//     visual.style.backgroundColor="white";
// })