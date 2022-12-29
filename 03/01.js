//배열생성[,,];

//배열의선언 1. 빈 배열 선언 후 값 할당
//js는 문자형은 배열로 다룸(,로 나누지 않아도)
let str=[];
str='선문아 그만자';
document.write(str);//선문아 그만자
document.write(str[1]);//문
document.write("<br>"+str[0]+str[1]+str[2]+str[6-2]+"<hr>")//숫자가 들어간건 사칙연산이 가능함
console.log(typeof(str[3])+typeof(str[4]));
//배열의 총길이(갯수가아니라 길이)
//.length는 함수가 아님
document.write(str.length) //7
//document.write("<br>"+str[0]+str[1]+str[2]+str[str.length])//undefined
//document.write("<br>"+str[0]+str[1]+str[2]+str[str.length-1])
//배열은 0부터라 마지막 index는 6인 반면에 배열의 길이는1부터기 때문에 str.length값은 7이기 때문이다.

//2. 배열의 생성 : index 번호를 지정해서 값을 넣을 수 있다.
const arr=[];
arr[1]='우';
arr[0]='영';
console.log(arr);
document.write("<br>"+arr[1]+arr[0]+str[2]+str[3]+str[4]+str[5]+str[6])
const arr1=[12,'string',true,false,function(){},{},[273,106]]//배열안에 배열도 가질 수 있다.
console.log(arr1)

const arr2=[,,,];
arr2[1]="망";
console.log(arr2);

//3-배열생성
const arr3=new Array(1,2,3);
console.log(arr3[1]); // = console.log(arr3[arr3.length-2]);
console.log(arr3[arr3.length-2+1]);
const arr4=new Array(3);//배열을 몇개를 쓸건지
console.log(arr4);
const fruits=["배","사과","포도","바나나"];
console.log(fruits.length);
document.write("<br>","준호가 먹은 과일은 총"+fruits.length+"입니다.","<br>");
document.write("<br>","준호가 먹은 2번째 먹은 과일은"+fruits[1]+"입니다.","<br>");
document.write("<br>","준호는 오늘 먹은 과일은"+fruits+ "입니다.","<br>");
document.write("<br>","준호는 오늘 제일 맛있게먹은 과일은"+fruits[3]+ "입니다.","<br>");
fruits[0]="소세지";
console.log(fruits);
