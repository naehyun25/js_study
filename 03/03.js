const item=["사과", "한라봉", "바나나", "딸기"];
document.write(`원래 배열 : ${item}<br>`)
//인덱스번호로 제거
//splice method 는 앞에 무조건 배열형 변수만 받는 함수
//.splice(시작할 인덱스번호, 삭제할 요소의 갯수)
item.splice(2,1)
document.write("지웠어! : "+item);
item.splice(1,3)
console.log(item);

//indexOf() : 값이 있으면 index번호를 , 없으면 -1을 반환하는 함수
const animals=['강아지','고양이','보노보노','곰'];
document.write(`<p>동물은 ${animals} 입니다</p>`)
const index=animals.indexOf("보노보노"); //'스펀지밥'->일치하는게 없으면 -1로 뜬다.
console.log(index)//2
animals.splice(index,1)
console.log(animals)
document.write(`<p>동물은 ${animals} 입니다</p>`);

animals[animals.length]='스펀지밥';
document.write(`<p>수정한동물은 ${animals} 입니다</p>`);
animals.push('보노보노도넣어줘')
document.write(`<p>수정한동물은 ${animals} 입니다</p>`);

animals.splice(animals.length,0,'장화신은고양이');//0은 지울게 없음
document.write(`<p>splice는 수정도 되지요 추가해서 ${animals} 입니다</p>`);
//js에 있는 함수 내장함수, 사용자가만든 사용자정의함수
//모든 함수는 2가지로 나뉨 : 기능이 정의된 함수와 
//그 함수를 함수를 호출하는 호출부분
//agrument : 인자
//**function name(x, y){x---y---} => x,y는parameter                name(x,y):여기 xy는 argument인자**/
//소괄호()가 있으면 함수다.
//중괄호{}가 없으면 함수호출