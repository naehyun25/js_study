let year = prompt('몇년도에출간했을까요?');
if (year==2015) {alert('딩동댕');
document.write('wow')
}
else if(year>2015){alert('한번더')
document.write('onemore')
}
else{alert('땡')
document.write('woo')}

let first="yoon";
let value1="ok"
let value2="no"
console.log(first=="yoon"?value1:value2);

// let age=prompt('나이를 입력하세요',18);

// let message=(age<3)?'아가야안녕':(age<18)?'안녕':(age>50)?'안녕하세요':'입력하세요';

// alert(message);

let age=prompt('나이는?')
if(age<3){
    message='아가야안녕'
}
else if(age<18){
    message='청소년안녕'
}
else{
    message='성인이시군요'
}
alert(message);

let jsname=prompt("자바스크립트의 '공식'이름은 무엇일까요?",'');
if(jsname=="ECMAScript"){
    answer="정답입니다!"
}
else{answer="모르셨나요? 정답은 ECMAScript입니다."};
alert(answer);

let num=prompt('숫자를입력하세요','')
if(num>0){
    printing=1
}else if(num<0){
    printing=-1
}else if(num==0){
    printing=0
}else{printing="sorry"}
alert(printing);

let result=(a+b<4)?'미만':'이상';

let message=(login=='직원')?'안녕하세요':
(login=='임원')?'환영합니다.':
(login=='')?'로그인이필요합니다':'';