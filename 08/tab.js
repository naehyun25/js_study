/* tab-menu버튼그룹 >a
tab-content 패널그룹 >div
*/

var menus = $(".tab-menu a")
console.log(menus);
var panels = $(".tab-content>div")
menus.click(function(e){
  e.preventDefault();
  let tg=$(this);
 console.log(tg)
 let currentLink=tg.attr("href");
 
 panels.hide();
 $(currentLink).show();
 //console.log(currentLink)
 menus.removeClass('active')
 tg.addClass('active')
 
})

menus.eq(0).addClass('active')
panels.eq(0).show();


//menus.click(function(e){
  //e 이벤트객체  click 이벤트가 생기면 생기는 객체(인자)를 매개변수 e를 통해 받는다.
  //제이쿼리는 attributes 를 이용한다.
  //브라우저 이벤트 종류 -> event handler ->event object(이벤트객체:이벤트가 발생한 대상의 정보를 가진 객체)
  //e.preventDefault();//a태그의 기본이벤트속성을 막음
  //이벤트가 발생한자기자신; this
  //let tg=$(this);
  
  // let currentLink=tg.attr("href");
  // console.log(e,tg) // href 속성을 얻어옴
  // panels.hide();
  // $(currentLink).show();
  // menus.removeClass('active')
  // tg.addClass('active')
  
  //숨기는건 .hide();
// })
// menus.eq(0).addClass('active')
// panels.eq(0).show();