//3개 export
//1.함수1
function funcA(){
    console.log("함수A실행완료");
}

//2.함수2
function funcB(test){
    console.log(test,"함수B실행완료");
}

//3.변수3
const varC="안녕하세요";

//여러개 export 시 default 를 쓰지 않음 - 객체형태로 내보냄
export {funcA,funcB,varC};