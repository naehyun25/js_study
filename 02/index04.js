//증감연산자
//변수에 사용가능하다.
let x=1;
//후위연산자(x++)
document.write(x++);//x=x+1//1(2)=1+1  //결과값:1
document.write(`<br>${x}`);//결과값:2후위연산자는 다음번 호출에 결과값을 반영한다.
document.write(`<br>${x++}`);//2
document.write(`<br>${x}`);//3
document.write(`<br>${x++}`);//3
document.write(`<br>${x}`);//4
document.write(`<br>${x++}`);//4
document.write(`<br>${x}`);//5
//결과값을 나중에 보여준다. 

//전위연산자(++x)
x=1;
document.write('<hr>');
document.write(++x);//2 바로 2가 출력된다.
document.write('<br>',++x);//3
document.write('<br>',++x);//4
document.write('<br>',++x);//5
document.write('<br>',x++);//5
document.write(`<br>${x}`);//6

document.write('<hr>');
x=0;
document.write(++x);//1부터 결과값으로 출력하고 싶으면 처음할당값이 1-1이어야함
document.write('<hr>');
//결과값을 바로 보여준다.

let y=1;
document.write(`<h1>${y--}</h1>`);//1
document.write(`<br>${y}`);//0
document.write(`<h2>${--y}</h2>`);//-1
y=1;
document.write(`<h2>${y--},${y},${--y}</h2>`);//1 , 0,-1