$(function(){
  //ID선택
  //$("#one").css("background","blue") 
  //아래는 함수에 넣어서 사용하는법
  var el1=$("#one")
  el1.css("background","blue")

  var el2=$("li");
  el2.css("background","pink");
  //배열 중 특정번째만 적용
  $(el2[1]).css("color","red") //el1[1].eq(1)
  //el2[1] : 이건 css 안먹힘 -> css는 jq 메서드고, el2[i]는 js에서선택하는방법이라 $(el2[1]) 이렇게 써야함 :제이쿼리객체로 만든다.

  //제이쿼리 반복문은 each 하나만 있다. 
  el2.each (function(a,b,c){
    console.log(a,b,c)
         $(b).css("background", "skyblue")
  })//a-인덱스 el2.eq(a) / b- 값 / c-스타일?none
  //abc 의 값이 뭐가 나올지는 제이쿼리 메서드에서 정해놨다.

  var el3 =$(".highlight");
  el3.eq(1).css({width:"500px", margin:'auto', background:"pink"})//키와 value
})