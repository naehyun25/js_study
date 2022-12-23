let name="nacho";
document.write(`hello, ${name}`);
document.write(`<br>hello${1+2}`);
let coffe;
coffe=true;
let pucho;
pucho=false;
document.write(pucho);
document.write(coffe);
coffe=3>1;
document.write(coffe);
coffe=1<3;
console.log(coffe);

let great;
great=4>1;
console.log(great);
document.write(`<br> ${great}`);
document.write(great);
//'', "" , `` 모두 문자열을 넣는데 `` 기호는 ${}안에 변수, 표현식을 넣으주면 문자열 중간에넣을수있다.
document.write(typeof coffe);
document.write(typeof(coffe));

//산술연산자
const a=15;
const b=20;
const c=a+b;
const d=a-b;
document.write("<br>"+"a의성취도:",a,"<br>")
document.write("b의성취도:"+b+"<br>")
document.write("a와b의 성취도합계",c,"<br>")
document.write(`a와b의 차이:${d}`)

//대입연산자
let x=10;
let y=20;
x+=y
console.log(x);
console.log(y);

document.write(`<br>${y}`);
document.write(`<br>${x}`);
document.write(`<br>${x+=y}`);

//더하기연산자로 문자데이터와 숫자형데이터가 합해지면 문자데이터가된다.
let n0="나초";
let n1="9";
let n2="살";
let nt=n0+n1+n2;

document.write(`<br>${nt}`);
document.write(`<br> ${typeof nt}`);
//더하기 연산자 말고 다른 연산자와 만났을 경우 :number
let c1=10;
let z=n1*c1;
document.write(n1*c1);
document.write(typeof z);
document.write(z, typeof z);

let age = prompt("나이는?",[]);
//alert(`당신의나이는${age}`);

let company=confirm("당신은직원인가요?")
alert(company)

let firstname=prompt("당신의성은무엇인가요?",[]);
alert(`당신의성은 ${firstname}입니다.`)