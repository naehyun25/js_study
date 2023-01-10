const textZone=$("textZone");
const btn1 =$("#btn1")
btn1.click(function(){
  textZone.css("color","blue")
})

const btn2 =$("#btn2")
btn2.mouseover(function(){
  textZone.css("color","yellow")
})


btn2.focus(function(){
  textZone.css("color","yellow")
})

//두개 이상의 이벤트연결하기(이벤트 바운딩)
const btn3=$("#btn3");
btn3.mouseever(function(){
  textZone.css("color","green")
  textZone.css("background-color","redm")
})
btn3=$("#btn3");
btn3.mouseever(function(){
  textZone.css("color","green")
  textZone.css("background-color","redm")
})

//on: 이벤트여러개묶기
btn3.on("mouseover focus",function(){
  textZone.css("color","green")
  textZone.css("background-color","redm")
})

//이벤트, 함수 다 다르고 실행문도 다름

btn3.on({
  "mouseover focus":function(){
  textZone.css("color","green")
  textZone.css("background-color","redm")
},
"click":function(){
  alert("click");
  textZone.css("margin-left","80px")
}
})
$("#listWrap").hover(
  function(){
    $(".list11").css("display","block")
    $(this).css("background","red")
  },
  function(){
    $(".list1").css("background","blue")
    $(this).css("background","blue")
  })