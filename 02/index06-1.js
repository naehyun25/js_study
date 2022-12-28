// let korea=Number(prompt('국어점수는','0'));
// let english=Number(prompt('영어점수는','0'));
// let meth=Number(prompt('수학점수는','0'));
// let total=korea+english+meth;
// document.write(
//   (korea>=60&&english>=60&&meth>=60&&(total/3)>=70)?true:false


//answer
// let avg=(kor+eng+math)/3;
// let result=avg>=70&&kor>=60&&eng>=60&&meth>=60;
// document.write(result)
//

let userWeight=Number(prompt('몸무게','0'));
let height=Number(prompt('키','0'));
let stn=(height-100)*0.9; //사용자의 적정몸무게
let user=userWeight>=stn?'적정몸무게이상':"적정몸무게미달"
alert(user);

let cm=Number(prompt("cm?",'0'));
let inch=cm*0.393701;
alert(`${inch}inch`);

// answer
// const rawInput=prompt('cm단위의 숫자를 입력하세요');
// const inch=Number(rawinput)*0.393701;
// alert(`${cm}inch입니다.`)
//const는 상수기는 상순데 안에있는 값자체가 홀랑 바뀌는건 안되고(단일값) (prompt에 빈 인자가 있으므로) 잠재되어있는 형태ref가 존재하는 경우 사용가능