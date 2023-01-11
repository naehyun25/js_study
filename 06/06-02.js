//1뎁스 a를 변수에 할당
// let gnbLiA=document.querySelectorAll(".gnb>li>a");
// //2뎁스의 높이를 변수에 
// //clientHeight :패딩을 포함한 높이를 가져온다(쌤코딩방참고자료 참조)
// const ah=document.querySelector(".sub>li>a").clientHeight;
// for(let i=0; i<gnbLiA.length; i++){
//   let item1=gnbLiA[i];
//   item1.addEventListener('click',function(){
//     let tg = this;
//     let allSub=document.querySelectorAll(".sub");
//     let tgSub=tg.nextElementSibling; 
//     for(let j=0; j<allSub.length; j++){
//       let item2 = allSub[j];
//       item2.style.height='0px';
//       console.log(this)
//       tgSub.style.height=ah*this.nextElementSibling.children.length+"px";
//       console.log(this)
//     }
//   })
// }
//ah 를 this. querySelectorAll 로 넣어도됨.



//jq로 바꾸는거
let gnbLiA=$('.gnb>li>a')
const ah=$(".sub>li>a").outerHeight();
gnbLiA.click(function(){
  let tg = $(this);
  let subA= tg. next(). find("a").length;
  $(".sub").css("height","0px")
  tg.next().css("height", aH*subA+"px")  
})

// answer
//let gnbLiA = $(".gnb>li>a");
//let aH = $(".sub>li>a").outerHeight();
//gnbLiA.click(function () {
//	let tg = $(this);
//	//tg 옆의 하위 a의 총 길이얻어옴
//	let subA = tg.next().find("a").length;
//	$(".sub").css("height", "0px");
//	tg.next().css("height", aH * subA + "px");
//});
