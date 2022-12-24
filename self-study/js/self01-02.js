//기본연산자
let a =1;
a=-a;
console.log(a);
//단항연산자: 피연산자가 1개인경우 : 부호를뒤집음
let x=2, y=3;
console.log(y-x);
//이항연산자 : 피연산자가 2개인경우 : 뺄셈을함
//+,-,*,/
let b=2
b=b*b;
console.log(b);
//% 나머지연산자
document.write(5%2);
document.write("<br>",10%2);
document.write(`<br>${8%6}`);
//**거듭제곱연산자 (제곱이됨)
document.write(`<br>${y**b}`);
document.write(`<br>${3**4}`);
document.write(`<br>${16**(1/2)}`);//제곱근
//이항 연산자+ 와 문자열 연결
document.write(`<br>${"hello"+"nacho"}`);
document.write(`<br>${"2"+"2"+1}`);
//그외
document.write(`<br>${("2"-"2")+1}`);
document.write(`<br>${("2"*"2")+1}`);
document.write(`<br>${("2"/"2")+1}`);
//단항 연산자 +
let coffee="1",pucho="2";
document.write("<br>",coffee+pucho);
document.write("<br>",+coffee+ +pucho);
document.write("<br>",Number(coffee)+ Number(pucho));
document.write("<br>",1+2*3);
//복합할당연산자
let n=2;
//n=n+2
n+=2;
//n=n*4;
n*=4;
console.log(n);
//증가감소연산자
let counter=3;
// counter++;
document.write(counter);
// counter--;
document.write(counter);//변수에만 사용가능
let z=++counter;
document.write(z)
let d=counter++;
console.log(d)
let e=3;
let f=e++
console.log(f);
let t=++e
document.write("<br>",t)
