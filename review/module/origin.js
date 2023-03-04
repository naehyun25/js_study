//export 방법 1 . 
export function say(user){
    console.log("say",user);
};

//export 방법 2 .
const hi = (user)=>{
    console.log("hi",user);
};
//개체 한개만 있는경우 (default 라고 써줌)
export default hi;

//여러개 export 방법 1.
//함수2-1
function func1(){
    console.log("함수1번실행완료");
}
//함수2-2
function func2(test){
    console.log(test, "함수2번실행완료");
}
//변수2-1
const var1 = "제가 변수1번입니다";

//여러개 export 시 default 를 쓰지 않음 - 객체형태로 내보냄
export {func1, func2, var1};


