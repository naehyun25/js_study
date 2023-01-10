//배열생성방법
//1. 빈배열 선언 후 값 할당
let arr1;
arr1="안녕하세요";
console.log(arr1);
console.log(arr1[0]);
console.log(arr1[6-2]);
console.log(typeof(arr1[3])+typeof(arr1[4]));
console.log(arr1.length);
//2. index 번호를 지정해서 값을 할당한다.
let arr2 =[]
arr2[0]="rk";
arr2[1]='나';
console.log(arr2);
const arr3=["ab",12,true, false, function(){},["a","b","c"],{},""];
console.log(arr3);
console.log(typeof(""));
// 배열생성
let arr4=new Array(3);
arr4=[1,2,3,4]
console.log(arr4);
//배열관련 method
//1.push : 배열추가
const cats =["나초","푸초","커피"];
cats.push("양치");
//2.인덱스번호활용
cats[4]="발톱"
//3.+length활용
cats[cats.length]="눈꼽"
console.log(cats)
// 배열삭제
//.splice 활용
//cats.splice(1,2);
// indexOf 제거
const index = cats.indexOf("망고")
console.log(index)
cats.splice(index,1)
console.log(cats)


const Num=[1,2,3,4,5]
console.log(Num)
Num.splice(index,2)
console.log(Num)

//<------END--------->//

//반복문
//for /forin /forof/ while/ dowhile/foreach
//1.for
for(let a =0; a<5; a++)
{document.write(`${a}번째야!!`)
document.write("<br>"+a+"번째지")}
//구구단을 외워보자 / 9단
for(let a1=1,b1=9; a1<10,b1>0; a1++,b1--){
    document.write(a1,"*",b1,"=",a1*b1,"</br>")
}
//1~10까지 수에서 짝수끼리 더해서 출력하세요.
let sum =0;
for(k=1; k<=10; k++){
    if(k%2==1) continue;
    //document.write(k)
    document.write(k)
    sum=sum+k
    document.write("<br>"+sum)
}
//구구단표만들기
//1개
document.write("<table>")
for(i=1; i<10; i++){
    document.write("<tr><td>"+"1*"+i+"="+1*i+"</td></tr>")
}
document.write("</table>")

//9단
let x; let y;
for(x=1;x<10;x++){
document.write("<table>")
for(y=1; y<10; y++){
    document.write("<tr><td>"+x,"*",y+"="+x*y+"</td></tr>")}
document.write("</table>")
}

//자리배치도
//총입장객과 한줄에 앉을 인원을 입력받아 좌석배치도를 출력하는 프로그램을 만드시오.
////입력
//var total = prompt('총인원은?','')//td갯수
//var lineNum = prompt('한줄에 몇명?','')//tr갯수
//
//var Line = Number(total/lineNum)
//var last = Number(total%lineNum)
//let A,B
//document.write("<table>")
//for(B=0; B<Line; B++){
//    document.write(`<tr>`)
//    for(A=1; A<=lineNum; A++){
//        var seatNo= B*lineNum+A
//        if(seatNo>total)
//        break;
//        document.write(`<td>${seatNo}</td>`)
//    }}
//    document.write(`</tr>`)
//document.write("</table>")
//
//while
//1부터 10까지합
let c=0;
let totalc=0;
do{
    c++;
    totalc=totalc+c
}while(c<10)
document.write(totalc)

//<별찍기

let out='';
let sa, sb,ssum
for(sa=1; sa<11; sa++){
    for(sb=1; sb<sa; sb++)
    {out=out+'*'}
    out=out+"<br>"
}
document.write("<br>",out)

document.write("<hr>")

let blank='';
for(b1=0; b1<10; b1++)
{blank = blank+'*'
    document.write("<br>"+blank)}