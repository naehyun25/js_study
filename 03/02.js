//배열추가 -> 1. .push
const todos=['우유구매','업무메일확인','필테수업'];

todos.push('눈곱떼기')
todos.push('발톱자르기')

document.write(`<h1>:${todos}</h1>`)

//배열추가2.인덱스번호를 활용해서 배열에 값 추가
const basket=["소세지","소주","샤브"];
basket[3]=("우삼겹");
//배열추가3. length를 활용한 추가
basket[basket.length]='갈비살';
basket[10]="귤";
basket.push('삼겹');
document.write(`<hr><h1>저녁식단:${basket}</h1>`)
document.write(`<hr><h1>공부하다 조만간 당뇨걸려 죽겄어</h1>`)
