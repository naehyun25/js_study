//기본문법 
// *선언문 function 함수이름(매개변수=parameter){실행문/기능}
//*실행문 함수이름(인자=argument)

//선언부
function h2(){
  //안녕하세요 를 400번 출력하는 일을 하는 함수
  for(let i =1; i<=4; i++ ){
   document.write(`<h2>안녕하세요${i}</h2>`)
  }
}
h2();

function h3(){
  for(let i =1; i<=4; i++ ){
    document.write(`<h3>안녕하세요${i}</h3>`)
   }
}

h3();





function h4(a,b){
  for(let i =1; i<=4; i++ ){
    document.write(`<h3>${a}</h3><a/>${b}</h3>`)
   }
}

h4("hi","회원님");
