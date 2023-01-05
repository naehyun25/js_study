//id 라는거 알아서 # 안들어감
var el1 = document.getElementById("one")
//console.log(el1)//li#one 한개
el1.style.background="yellow";
var el3 = document.getElementsByTagName("ul")
//tag는 중복이므로 Elements 복수형
//[].style.--- > 이라고 쓴거나 마찬가지 이므로, 배열 중 선택해야함
var el2 = document.getElementsByTagName("li");
//console.log(el2)//li배열
//el2[1].style.backgroundImage='url(http://qwerew.cafe24.com/example/javascript/chicken.png)';
//el2[1].style.backgroundSize='20px'
for(i=0;i<=2;i++){//조건을 i<el2.length/2  로 해도됨
  el2[i].style.background=' no-repeat url(http://qwerew.cafe24.com/example/javascript/chicken.png)';
  el2[i].style.backgroundSize='20px';
}//자료형에 따라 사용할 수 있는 함수를 선택한다. 
//배열인 경우 반복문 for문을 사용


for (var e of el3){
  e.style.background="skyblue"
}//for of 는 익스에서 지원안됨

//클래스선택
var el4=document.getElementsByClassName("highlight");
el4[1].style.cssText="width:500px; margin:auto; background:pink;"
//css속성 여러개-> 추가x, 수정됨

//querySelector -표준
var el5=document.querySelector(".highlight");
console.log(el5)
//지금 highlight 3갠데 한개만 반환함 -> 단일요소만 반환한다.
el5.style.color="red";
var el6=document.querySelectorAll(".highlight");
console.log(el6)
for(i=0;i<=2;i++){
  el6[i].style.color="white"}


  //for each ..콜백함수
  el6.forEach(function(b){
    b.style.fontWeight='bolder';
  })