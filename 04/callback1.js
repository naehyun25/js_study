const 테스트=function(a){//익명함수
   //console.log(a)
   a() // 함수만 받는다 - 다른 일반값을 넣으면 에러
}
const 함수=function(){
  document.write("<h1>자바스크립트에서 매개변수를 함수로 전달받는거=>콜백함수</h1>")
}
테스트(함수)
//테스트(10) -->함수가 아니라 에러가 생김
//함수가 아닌 다른 자료형 전달 시 오류 발생

const 테스트2=function(콜백함수){
  콜백함수(10)
}
const 함수2=function(콜백함수_매개변수){
  document.write(`${콜백함수_매개변수}번째<br>`)
}

테스트2(함수2)
//