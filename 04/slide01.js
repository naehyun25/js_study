$(function(){
const visual=$("#brandVisual>ul>li");
const button=$("#buttonList>li");
let current = 0;//현재 // 아래 3개의 함수에게 현재의 인덱스번호를 전달하려고 전역변수로쓴거임
let id;//setInterverId을 담을 변수
const speed=3000;

//버튼이 기준이 되어야한다.
//버튼클릭함수
button.click(function(){
  current=current+1;
  let btnIdx=$(this).index();//btnIdx=현재클릭한 버튼의 인덱스
  //선택된것만 적용하기
  //1.다 지우고 선택된것만 적용(.on)
  button.removeClass("on");
  $(this).addClass("on");
  move(btnIdx)//선택된 버튼의 인덱스 :인자(argument)를 전달한다.(btnIdx가 지역변수리)
  //제이쿼리는 포문 안돌려도 알아서 배열처리함
  //this 현재의요소 -> js의 this 임 : 제이쿼리에서 제공하는 함수 못쓰고
  //제이쿼리 객체로 만들어서 사용해야함->$(this) 이렇게 써야한다.
});//current가 변경되면 무브이동시키는함수의 커렌트값도 변경된다.

//시간마다실행(setInterver(함수, 간격)들어가는거...) // 보이지않는손이 버튼을 자동클릭하게끔...
timer();//내가이름붙여서 쓰는 함수는 한번 불러줘야되
function timer(){
  setInterval(function(){
    let next=current+1;
    if(next==visual.length-1){
      next=0;
    }
   //move(next);//(이동시키는 함수한테 값을전달해줌)지움 연기서 안함 "버튼 인덱스 번호 기준으로 위치움직일거라"
  },speed)
}



//이동시키는 함수(3개의 버튼중 어떤걸 누를지 모르니까)
function move(btnIdx){
  console.log("무브"+current);
  let cu=visual.eq(current);
  let ne=visual.eq(btnIdx)
  cu.css('left','0').stop().animate({left:"-100%"});
  ne.css("left","100%").stop().animate({left:"0%"});
  current=btnIdx
}



});//jQuery





//jQuery
//visual.css("background-color","red");
//js로 쓰면 아래와 같음  : 한번에 한개씩 밖에 안댐....

// document.addEventListener("DOMContentLoaded",function(){
//     const visual=document.querySelector("#brandVisual>ul>li");
//     visual.style.backgroundColor="white";
// })