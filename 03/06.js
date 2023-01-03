//자리배치도
//총입장객과 한줄에 앉을 인원을 입력받아 좌석배치도를 출력하는 프로그램을 만드시오.
//전체 입장객
var memNum=prompt("입장객은 몇명?")//td의총갯수
//한줄에 앉을 인원
var colNum=prompt("한줄에 몇명씩 앉나요?")//tr>td갯수
let i,j,rowNum;

if(memNum%colNum===0){//입장객 = 한줄에 앉는 손님의 수가 딱맞음(줄은 2줄이 될수도)
rowNum=parseInt(memNum/colNum);
}else{rowNum=parseInt(memNum/colNum)+1
}


document.write("<table>")


for(i=0; i<rowNum; i++){
  document.write("<tr>"+i)
  for(j=1; j<=colNum; j++){
    var seatNo=i*colNum+j
    if(seatNo>memNum)
    break;//true 면 아래문장진행안함. tr만찍음
    document.write("<td>좌석"+seatNo+"</td>")
  }
  document.write("</tr>")}
  
  document.write("</table>")

    

//parseInt
//const n1="3";
//const n2="3시";
//const n3=3.3;
//console.log(Number(n1)+3)
//console.log(parseInt(n1)+3)
//console.log(Number(n2)+3)
//console.log(parseInt(n2)+3)
//console.log(Nunmer(n3),parseInt(n3))