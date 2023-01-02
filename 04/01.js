//1-객체생성
var dog =new Object();
dog={//객체 표기법 : 중괄호로 감싼다.
  //키(key):value
  name:"망고",
  features:"말티즈"
}; //값이 함수등 기능이 있는게 아니라 일반적인 값이라면 속성(property) 이라고 한다.

//property 를 꺼내쓴 경우
//arr.length(배열에 할당된 길이값을 꺼내씀)
console.log(dog.name)
document.write(`<h1>강아지이름은${dog.name}</h1>`)
//중괄호는 {객체} 대괄호는 [배열]
//값 꺼낼때는 객체: dog.name
//배열 dog[0]

//2-객체생성
const baby={name:"망고", features:"말티즈"}
document.write(`<h1>망고는${baby.features}</h1>`)

//3-method
const pet={
  name:"망고" , //값과 값사이에 콤마써야됨)
  eat:function(food){
    document.write(`<h1>${this.name}는 ${food}를 좋아해요</h1>`)
  }
}
pet.eat("연어")
pet.eat('닭가슴살') //해당 argument(연어, 닭가슴살) 인자를 function 에 전달해줘야함. function(x) x안에 food 넣어줘야하듯
//eat 의 function의 (food)는 매개변수 값을 다른걸 받을 수 있다.

//객체 안에서의 this는 객체를 가르킴  (pet 객체안의 this는 const pet이됨))

//js 함수의 종류
//이름있는놈 - 명명함수(함수)
//이름없는놈 - 익명함수
//          -즉시실행 함수
//          -화살표 함수
//이름없는놈은 선택자나 다른 애들을 함수식으로 처리함??

