var t1="망고는";
var t2 =5;
var t3="살";
var t6=true;
var t4=t1+t2;

alert(t4)
var t4=t1+t2+t3+t6;
t4=t1+t3;
console.log(t4);
console.log(typeof(t4));
//문자랑 섞여있으면 다 문자로 바뀜
//더하기 연산자로 문자형 데이터와 다른 데이터를 혼합하여 결합하면 전부 문자형으로 변환
//더하기 연산자가 아닌것과 결합한 경우
let a="3";
let b=6;
console.log('a*b=${a*b}');
let total=a*b;
console.log(total, typeof(total));

let x0="커피는";
let x1=10;
let x2="살";
let x3=true;
let x4=x0+x1+x2+x3;

document.write(typeof x4)