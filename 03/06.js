//자리배치도
//총입장객과 한줄에 앉을 인원을 입력받아 좌석배치도를 출력하는 프로그램을 만드시오.만드시오.만드시오
//전체 입장객
var memNum=prompt("입장객은 몇명?")
//한줄에 앉을 인원
var colNum=prompt("한줄에 몇명씩 앉나요?")
if(memNum%colNum===0){//입장객 = 한줄에 앉는 손님의 수가 딱맞음(줄은 2줄이 될수도)
rowNum=parseInt(memNum/colNum);
}else{rowNum=parseInt(memNum/colNum)+1
}

document.write("모두"+rowNum+"개의 줄이 필요해요")  
//parseInt
const n1="3";
const n2="3시";
const n3=3.3;
console.log(Number(n1)+3)
console.log(parseInt(n1)+3)
console.log(Number(n2)+3)
console.log(parseInt(n2)+3)
console.log(Nunmer(n3),parseInt(n3))