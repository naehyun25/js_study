const 테스트=function(배열,콜백함수){
  for(const 값 of 배열){
    콜백함수(값)
  }
}
//for in은 배열index기준
//for of는 배열의 값으로 실행기준

const 함수 = function(콜백매개변수){
  document.write(`${콜백매개변수}번째 뭥미<br>`)
}

테스트([52,249,32,264,22,6],함수)