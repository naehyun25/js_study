//const gnbLiA = $(".gnb>li>a");
//gnbLiA.click(function(){
//  const sub = $(".sub")
//  sub.removeClass('on')
//  $(this).next().addClass("on");
//  console.log($(this).next().addClass("on")==true)
//})
  //토글로만들기
 function toggle(){ 
  if(!$(this).next().hasClass("on"))
  {sub.removeClass("on"),
    $(this).next().addClass("on");
}else{sub.removeClass("on")}
  };
  //==false or !==true $(this)앞에 ! 붙여도되고
  //형태에 따라 조건문으로 사용할 수 있다.
  //or $(this).next().hasClass("on")=>has는 true, false를 반환하므로

let check=false;

let aH=$('.sub>li>a').outerHeight();
console.log(aH)
const gnbLiA = $(".gnb>li>a");
gnbLiA.click(function(){
  //현재 on 클래스가 없다
  //전역변수로 임의의 불값을 선언해서 사용하는방법도있다->나중에
    const sub = $(".sub")
    sub.css('height',"0px")
  $(this).next().css("height",aH*4-12+"px");
})
// //T쌤 answer
// //원뎁스 A를 변수 gnbLiA 할당
// let gnbLiA = $(".gnb>li>a");
// //border,padding
// let aH = $(".sub>li>a").outerHeight() - 4;


// gnbLiA.click(function () {
//   //클릭된 요소를 변수 tg에 저장
//   let tg=$(this);
//   //tg 다음요소의 하위에서 a 태그의 길이를 변수 subA에 저장
//   let subA=tg.next().find("a").length
//   //.sub 의 높이 0
//   $('.sub').css("height", "0px");
//   //tg 다음요소의 높이를 변수 aH*subA 로 변경
//   tg.next().css("height", aH * subA + "px");

// 	//토글로 만들기
// 	//if 는 (true)
// 	function toggle() {
//     //javascript  .hasClass("on")=>classList.contains('on')
// 		if (!$(this).next().hasClass("on")) {
// 			$(".sub").removeClass("on");
// 			$(this).next().addClass("on");
// 		} else {
// 			$(this).next().removeClass("on");
// 		}
// 	}
// });
