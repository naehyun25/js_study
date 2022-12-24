//형변환
//String :문자형으로변환
let a = true;
// alert(typeof value);
a = String(a); //String 대문자
// alert(typeof a);
// alert("6"/"2");
console.log("6"/"2")
//Number:숫자형으로변환
let str="123";
console.log(typeof str);
let num=Number(str);
console.log(typeof num);
console.log(Number("123"));
console.log(Number("123x"));
console.log(Number(true));
console.log(Number(false));
//Boolean:불린형으로 변환
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("0"));
console.log(Boolean("hello"));
console.log(Boolean(""));
console.log(Boolean(" "));