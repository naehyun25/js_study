//연산자의 우선순위
//querySelector
var heading=document.querySelector("h1"); //querySelector("선택자") == jQuery$("선택자")
heading.style.color="red" //jQuery $("h1").css("color","red");
//heading 변수에 안담고 document.querySelector("h1").style.color="red";
document.querySelector("h1").style.backgroundColor="yellow";
//한번에 하나씩 쓸 수 있다. 중복안됨
//js 는 카멜케이스로 사용
//jQuery -> $("h1").css({"color","red"},{"background-color","yellow"});
document.querySelector("h1").onclick=function(){
  document.querySelector("h1").style.backgroundColor="green";
}

const h1=document.querySelector("h1"); //이런식으로 변수 지정하면 코드를 더 짧게 사용할 수 있다.
//h1.onclick=function(){
//  h1.style.backgroundColor="blue"
//}
