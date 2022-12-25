// ||or &&and !not
let value1 = true;
let value2 = false;
// ||or 셋중 하나가 true 면 true
// true가 나오면 바로 연산을 멈춘다.
// 효율적인 코드를 위해서 연산이 들어간 함수는 제일 마지막에 배치
console.log(`or:${value1||vale2||check()}`);
function check(){
    for(let i=0; i<10; i++){
        console.log('🚩');
    }
    return true;
}
//&&and 셋모두가 true 여야 true 
//false 나오면 바로 연산을 멈춘다.(값: false)
console.log(`or:${value1&&value2&&check()}`);
function check(){
    for(let i=0; i<10; i++){
        console.log('🚩');
    }
    return true;
}

//! 값을 반대로 바꿔준다.
console.log(!value1);

//equality
const stringfive ="5";
const numberfive = 5;
//== lose equality, with type conversion
console.log(stringfive == numberfive); //true
console.log(stringfive == numberfive); //true
// ===strict equality, no type conversion
console.log(stringfive === numberfive); //false
console.log(stringfive !== numberfive); //true
//object equality by reference
//const 는 값을 그대로 데이터 저장하는게 아니라 ref 로 저장 -ref에값을넣는다.
const nae1 = {name:"nae"};
const nae2 = {name:"nae"};
const nae3 = nae1;
const nae4 ={name:"nae",age:24};
console.log(nae1 == nae2); //false
console.log(nae1 === nae2); //false-같은 내용이지만 ref는 다른걸로
console.log(nae1 == nae3); //true - ref가 동일함.
console.log(nae3);
console.log(nae3.name);
console.log(nae4.age);

//conditional eperators
//if : if, else if, else
const catname = "pucho";
if (catname == "coffee"){
    console.log("hi, coffee");
} else if (catname == "nacho"){
    console.log("hi, nacho");
} else {
    console.log("hi, pucho")
}

//ternary operator
console.log(catname =="nacho"?"pucho":"nachos");

//switch 
const browser = "firefox";
switch(browser){
    case "IE":
        console.log('go');
        break;
    case 'chrome':
        console.log('okay');
        break;
        default:
            console.log('same');
            break;
}

//while loops
let i =3;
while(i>2){
    console.log(`while:${i}`);
    i--;
}
//do while. 블럭먼저 실행
do{
    console.log(`do while:${i}`);
    i--;
} while (i>=0)

//for loop : for(begin; condition; step)
for(i=3; i>0; i--){
    console.log(`for: ${i}`)
}
for(let i=3; i>0;i--){
    console.log(`inline for:${i}`)
}
//quiz
for(i=0; i<=10; i++){
    if(i%2 !== 0){
        continue;
    }
    console.log(`quiz:${i}`)
}
for(i=0; i<10; i++){
    if(i>8){
        break;
    }
    console.log(i)
}

