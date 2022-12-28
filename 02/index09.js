////선택문 switch
////조건 case:
//let day="0";
//document.write(day+"힝구힝구")
//
//switch(day){
//  case "월":document.write("오전 10시 수업시작") //월요일케이스인경우 아래로 쭉 실행됨,  멈추려면 break;
//  break;
//  case "화":document.write("<br>오후 2시 수업시작")
//  break;
//  case "수":document.write("<br>오후 3시 수업시작")
//  break;
//  case "목":document.write("<br>오후 4시 수업시작")
//  break;
//  case "금":document.write("<br>오후 5시 수업시작")
//  //없는걸 입력하는 사람들을 위해 default//위에것들이 아닌경우
//  break;
//  default:document.write("장난치지맛!!월요일에서 금요일까지만 입력하세요")
//}
//
////숫자가 짝수인지 홀수인지, 숫자가 아닌지
//let userN=Number(prompt("숫자를입력하세요",'0'))
//console.log(userN);
//let result=(userN%2)
//console.log(result);
//
//switch(result){
//  case 0 :document.write("짝수!!!!")  //case result==0 요거아님.... 알아서 비교함 
//  break;
//  case 1 :document.write("홀수!!!!")
//  break;
//  default:document.write("넌뭥미????????50")
//}
//
//
////answer
//const input=Number(prompt('숫자를입력',"숫자"));
//switch(input%2){
////나머지가 0이면 false , 1이면 true
//case 0 : alert('짝수입니다.') 
//break;
//case 1 : alert('홀수입니다.') 
//break;
//default:document.write("???") //0.12
//}
//
//if(result==0){
//  alert("짝수");
//}else if(result==1){
//  alert("홀수");
//}else{alert("넹??")};



let a=Number(prompt("숫자1","0"))
let b=Number(prompt("숫자2","0"))
let test=a-b;
//
//
//if(test>0){alert(`숫자1이 숫자 2보다${test}만큼커요`)
//}else if(test<0){alert(`숫자1이 숫자 2보다 ${(-1)*test}만큼작아요`)
//}else if(text=0){alert(`같아요`)
//}else{alert('생각좀해볼게요...')}

//answer
//a>b로 단순하게 처리하는 방법
let sa;
let sb;
if(test>0){sa=1;}
else if(test<0){sa=2;}
else if(test==0){sa=3;}

switch(sa){
  case 1 :document.write("a가커요")
  break;
  case 2 : document.write("b가커요")
  break;
  case 3 : document.write("a=b")
  break;
  }







//3의 배수확인
let userNum=prompt("숫자를 입력하세요");
//3의 배수인지를 확인하여 결과를 alert로 출력
//사용자가 아무것도 입력하지 않은 경운 입력 취소되었습니다. 출력

let result=Number(userNum%3)
console.log(userNum)
console.log(result)
//  if(userNum!==null){
//if(result==0){alert("3의배수입니다.")
//}else{alert('3의 배수가 아닙니다.')}
//  }else(alert("입력이 취소되었습니다."))
//if문 중첩

if(userNum!==null){
  result===0?alert("3의배수입니다."):alert("3의배수가아니에요")
}else{alert("땡! 입력취소")}
