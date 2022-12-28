//조건문 if else if else
//if(조건){조건이 참일때 실행}
var your_sex="여자";
document.write("당신은"+your_sex+"이므로")
if(your_sex=="남자"){document.write("반바지를입으세요");
}
if(your_sex=="여자"){document.write("긴바지를 입으세요");
}
// 현재 시간이 18시 이전이면 해출력 / 18시 이후면 달출력
let current=new Date(); // new Date :현재 날짜정보를 가지고 있는 JS객체 -consol에 나옴
console.log(current);
let day_time=current.getHours();//+9해서 시간을 임의로 늘릴 수 있음
console.log(day_time);
const h1=document.querySelector("h1")
if(day_time<18){
  document.write(`<img src="day.gif" style="display:block; margin:0 auto">`)
  h1.onclick=function(){
      h1.style.backgroundColor="blue"
}}
if(day_time>=18){
  document.write(`<img src="night.gif" style="display:block; margin:0 auto">`)
  document.querySelector("body").style.backgroundColor='black';
  h1.style.color="white";
}


let score=Number(prompt("점수를입력하세요",''));
if(score>=70){alert('합격');}
else{alert('불합격ㅜㅜ');} //else는 조건이없다. 

