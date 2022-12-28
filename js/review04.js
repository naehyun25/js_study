//국어,영어,수학 과락 50점미만 평균 80점 이상 합격, 불합격통보
//let korean=Number(prompt("국어?",''))
//let meth=Number(prompt("수학?",''))
//let eng=Number(prompt("영어?",''))
//let evg=(korean+meth+eng)/3
//alert(evg<80?"불합격":korean>50&&meth>50&&eng>50?"합격":"불합격")
//let result=evg>=80&&korean>50&&meth>50&&eng>50;
//alert(result)

//몸무게=(신장-100)*0.9
//let userkg=Number(prompt("kg?",''))
//let userheight=Number(prompt("키?",''))
//let useribm=(userheight-100)*0.9
//if(useribm>userkg){alert("체중미달")}
//else if(useribm<=userkg){alert("과체중160")}
//alert(useribm>userkg?"체중미달":"과체중")

//let day=prompt("몇요일",'');
//switch(day){
//    case"월":document.write("월요일ㅜㅜ")
//    break;
//    case"화":document.write("화요일ㅜㅜ")
//    case"수":document.write("수요일ㅜㅜ")
//    case"목":document.write("목요일ㅜㅜ")
//    case"금":document.write("금요일ㅜㅜ")
//    case"토":document.write("토요일ㅜㅜ")
//    case"일":document.write("일요일ㅜㅜ")
//    default:document.write("화이팅")
//}

//
let current=new Date();

console.log(current);
let time=current.getHours()+23;
console.log(time)
if(time <12){document.write("잘잤니");
}else if(time<=14){document.write("점심먹자");
}else if(time<=19){document.write("저녁먹자");
}else{document.write("간식....");}

//3의 배수확인
//사용자입력이 없는 경우 입력 취소
let num=prompt("숫자",'')
let result=Number(num)%3
let message;
if(num!==null){
if(result==0){message=("3의배수입니다.");
}else{message=("3의배수아닙니다.")}
}else{message=("숫자를입력해주세요");}
document.write(message);

//js선택자 선택법.querySelector("--")
//jQuery선택자 선택법 $("--") $("h1")
document.querySelector("h1")
//변수에 담아서 아래와 같이 사용가능
const h1=document.querySelector("h1")

h1.style.color="red" //중복사용불가, 한번에 하나씩
h1.onclick=function(){
    h1.style.backGroundColor="green";//js는 카멜케이스로표기
}
//jQuery
$("h1").onclick