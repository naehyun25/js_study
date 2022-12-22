//데이터형 활용
//문자자료형 string
//let x;
//let y;
let x,y;
x=7+5;
y="7"+5;
//document.write(x+y)
document.write(x)//12
document.write(y)//12
// document.write("y")
// 자바스크립트에서 표현식을 작성할때 문자는 따옴표로 묶고 변수나 숫자는안묶는다.
// 자바스크립트에서는 태그도 문자자료형이다
//br넣고싶을때 ('<br>')
//메서드 임자있는 함수-그룹안에 소속되어있는 함수(객체에 저장되어있는 함수)
//대상.함수()->메서드->임자있는함수
const wakeup="선문아 밥먹고 학교가야지 "
document.write('<h1 style="color:green">',wakeup,'<h1>')
//, 쉼표는 +연산자와 같은 역할을한다.
//ES6에 추가된 템플릿 리터럴
document.write(`<h1 style="color:green">${wakeup}<h1>`);