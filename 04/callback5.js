//변수의 유효범위 :scope (함수 내에서 선언된 변수는 밖으로 나갈 수 없다.)
//아래의 경우 let total 이 함수 안에서 선언 되면 값을 밖으로 뺄수없다.

//let total='';//전역변수
let sum=(a,b)=>{
 //let total :지역변수
   total=a+b;
};
sum(10,20)
document.write("두수의합"+total)


//return문의 역할1 : 중괄호 밖으로 값을 전달해준다.
let sum1=(a,b)=>{
  return a+b;
}
document.write("<hr>두수의합"+sum1(10,20))

(function(){
  console.log('hello')
})()