var x=10;//변수 x를 초기화 한다.
function display(){
  console.log("x is"+x);
  console.log("y is"+y);
  var y=10; // 호이스팅: 위로 끌어올리려고함
  // y존재는 알고 있는데 값이 할당된건 인식을 못함(함수내에서 호이스팅이 발생한다/밖에서는 X)
}

display();
Exam1();
Exam();//B 명명함수가 먼저 실행된 다음에
//명명함수는 나중에 선언되어있어도 실행된다.->끌어올림현상이 발생을 한다.
var Exam1 = function(){//익명함수
  alert("A");
}

function Exam(){//명명함수
  alert("B");
}
Exam();//A 익명함수가 실행이 된다.
//var 과 선언적함수는 호이스팅 발생(끌올)
//그래서 ES6에서 나온게 const, let , 즉시실행함수, 람다함수등

//선언적함수는 여러번 사용해야 할때 쓴다.