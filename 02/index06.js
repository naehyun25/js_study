//논리연산자
let x=(7>6)&&(1>8);
//true && false  (and : 둘다 참이어야 true, 하나라도 false 면 false)
document.write(x);// false
document.write('<br>');
let y=(7>6)||(1>8);//true
//true || false (or: 둘중 하나만 true 여도 true)
document.write(y);
document.write('<br>');
let z=!(7>6);//false
//!(true) : true 의 반대 => false
document.write(z);
document.write('<hr>');

//삼항 연산자:항이 3개
//조건? 참일때: 거짓일때 
let your="재밌어요";
your="어려워요";
let study=(your=="어려워요")?"공부하세요":"천잰데";
document.write(`자바스크립트가 ${your} <h1>${study}</h1>`);

document.write('<hr>');
//*************************************** */
let bus=3000;
let bab=7000;
let coffee=2000;

let total;
total=(bus+bab+coffee);
let minus;
minus=(10000-total);
let today=(total<=10000)?"잘했어요":(`${minus}원초과`)
document.write(today);


//
console.log(total<=10000?"잘했어요":total-10000+"원초과")//minus 말고 toal-10000
document.write((total<=10000)?"잘했어요":(`${minus}원초과`))
//다시하기

//let a=prompt('식대를입력하세요','');
//let b=prompt('커피값을입력하세요','');
//let c=prompt('교통비를입력하세요','');
// let todaysub=a+b+c;
// 10000>todaysub?alert("잘했어요"):alert(todaysub-10000+"원초과");

//1.alert 2.confirm 3.prompt
var num1=10;
var num2=20;
num1>=num2?alert("참"):alert("거짓");

var result=confirm("자바스크립트를 좋아하세요?");
console.log(result);
var theText=result?"네":"아니요";
document.write(theText);
//confirm=확인일 경우 true 취소일 경우 false
var input=prompt('생년월일을 입력하세요','');//뒤에''은 써도 되고 안써도되고
document.write(`<br>${input}`);
//prompt = 사용자가 입력한 값을 받아서 처리함 -> 뒤에''안써도 사용자값을 받는다.

// let gender=prompt("성별을 입력하세요","")
// let age;
// gender=="여성"?age=prompt("나이를 입력하세요",""):document.write(false);
// 20<=age<30?document.write(`<br>true`):document.write(`<br>false`);

let gender=prompt("성별을 입력하세요","")
let age=prompt("나이를 입력하세요","")
age=Number(age)
console.log(typeof(age))
 //gender=="여성"&&age>=20&&age<30?document.write(`<br>true`):document.write(`<br>false`);
let resulttotal=age>=20&&age<30&&gender=="여성";
document.write(resulttotal);
//prompt로 받는 값은 문자열string로 반환이 된다.
//계산식을 사용해야 할 경우 자료형을 변환해야 한다.
//method:Number(문자열을 숫자(자료형)로 바꿔주는 함수)
console.log()