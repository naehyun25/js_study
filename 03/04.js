//반복문은 자료의 형태가 단체[]임. 
//목적이 단체[]의 반복으로 계속 돌리는거
//for,forin,forof,while,dowhile,foreach(함수
//1.for(초기값;조건식(true or false);증감식)
 for(let i = 0; i<5; i++){ // i<5 :false가 나올때가지 반복한다.
   document.write(`<br>${i}번째 반복입니다<br>`)}
 
 for(let num=6; num>0; num--){
   console.log(num)
   document.write(`<h${num}>h${num} 재미있는 자바스크립트</h${num}>`)
 }
//IE 에서 옛날 방법으로 나오게 하려면 ``말고 이전방법으로 써야함.... 
//for(let num=6; num>0; num--){
//  console.log(num)
//  document.write("<h"+num+">h"+num+"재미있는 자바스크립트</h"+num+">")
//}

//구구단 5단       
for(let five=1; five<10; five++){
  document.write(`5*${five}=${5*five}<br>`)
}

//answear
let i=5;
for(let j=1; j<=9; j++){
  document.write(`${i}*${j}=${i*j}<br>`)
}