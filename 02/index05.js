//조건연산자
let x = 10, y = 20, z="10";
document.write(`x>=y : ${x>=y}<br>`); //조건을 확인해서 true 나 false 값을 반환한다.
console.log(`x<y : ${x<y}<br>`);
document.write(`x&lt;y : ${x<y}<br>`);
document.write(x<=y);
document.write("<hr>")
//not 연산자! (부정)
document.write(x!=y);//다르면 무조건 true //같으면 false
document.write('<br>',x!=z); //같으면false 
document.write('<br>',x!==z);//다르면 true  
document.write('<br>',x==z);//얕은비교 : "문자열"숫자 상관없음
document.write('<br>',x===z);//깊은비교:문자열, 숫자열 변수형까지 비교한다.


