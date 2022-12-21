"use strict";
alert("hello, javascript!")

let str = "string"
console.log(typeof(str));
//string 문자
let num =123
console.log(typeof(num));
//number 넘버
let bull=true;
console.log(typeof(bull));
//boolean 참 , 거짓
let obj={};
console.log(typeof(obj));
//object 객체
let arr=[];
console.log(typeof(arr));
//arr 배열인데 object로나옴
let nu=null;
console.log(typeof(nu));
//null 값이 없음.
let un=undefined;
console.log(typeof(un));
//undefined 미정

let message; //변수선언
message="hello" //변수 message 안에 hello라는 데이터를 저장
alert(message);
console.log(message);

let message2="hello2";
alert(message2);
console.log(message2);

let apple;
//apple=red;
apple="blue";
console.log(apple); 
//let apple =red;
//let apple =blue;
//이건 재선언이기 때문에 안된다.
//apple=red;
//apple=blue;
//이건 값을 변경한것.

let A1 = "helloworld";
let A2;
A2="helloworld";
console.log(A1);
console.log(A2);

let admin;
let name;
name="john";
admin="john";
alert(admin);

