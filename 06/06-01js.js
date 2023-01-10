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