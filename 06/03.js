//  addEventListener("load",function(){

//   var bt =document.querySelector("h1").nextElementSibling;
//   bt.onclick=function(){
//     //document.querySelector("h1").className="red" //클래스추가
//     //document.querySelector("h1").classList.remove("orange"); //클래스 삭제
//     //document.querySelector("h1").classList.toggle('toggle');
//     //document.querySelector("h1").classList.replace('orange','red');
//   } //clasname은 하나밖에 안된다.

  


//   document.querySelector("h1").classList.add("orange")
// //document.querySelector("h1").classList.add("red", "bgBlack")
// document.querySelector("h1").nextElementSibling.nextElementSibling.classList.add("orange")
// document.querySelector("h1").nextElementSibling.nextElementSibling.nextElementSibling.classList.add("bd")
// document.querySelector("h1").nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("white", "bgBlack");

// })

$(function(){
var bt =$("h1").next().next().next();
bt.click(function(){
  if($(this).hasClass("bd"))//가지고 있는지 없는지에따라 true, false값을 반환
  {$(this).addClass("white")
}else{$(this).css("background","black")
}})


$("h1").toggleClass("bd")



$("h1").addClass("red").removeClass("red")//onclick에서 이렇게 써도됨
//$("h1").removeClass("red")
$("h1").next().addClass("red")
$("h1").next().next().next().addClass("bd")
//$("h1").next().next().next().addClass("bd red")//class2개가능




})

//.querySelector -> $("")
//.classList.add("") -> .addClass("")
//.classList.remove("") -> .removeClass("")
//
//.nextElementSibling -> .next()
//클래스2개추가.classList.add("white", "bgBlack") -> .addClass("bd red")

