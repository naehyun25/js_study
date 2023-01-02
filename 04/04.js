//익명함수, 이름없는 함수
// function mango(){}
const mango = function(){
  document.write("예쁜망고<br>")
  document.write("예쁜망고<br>")
  document.write("예쁜망고<br>")
  document.write("예쁜망고<br>")

}
console.log(typeof mango);
console.log(mango);
console.log(typeof document.write)

mango();

//매개변수 있는거
const sum=function(a,b){
  let c=a+b;
  document.write(`<h1>${c}</h1>`)
}

sum(5,6);

//즉시실행함수(매개변수없는거)
(function(){
  document.write(`<h1>즉시실행함수</h1>`);
}()); 
//즉시실행함수 (매개변수있는거)
(function(x,y){
  document.write(x+y);
}(10,20));

//화살표 함수.arrow function,람다식, 익명함수를 줄여서씀
//const hi =function(){  // ()=>{}
//  return = "안녕하세요";
//  ;}
//  alert(hi);

  const hi=()=>{
    return "안녕하세요";
    }
    alert(hi);

    //const hi=()=>"안녕하세요";//한줄일경우 가능함
    //alert(hi())

//인자가 있는 화살표함수
//let sum1=(a,b)=>{
//  return a+b
//}    
//document.write("두수의합"+sum1(10,20))
//실행문이 한줄일 경우 리턴과 중괄호를 삭제할수있다

let sum1=(a,b)=>a+b
document.write("두수의합"+sum1(10,20))
    