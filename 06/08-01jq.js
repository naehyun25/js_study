$(function(){

const section=$("section");
let progressBar=$(".bar");
let text=$(".txt");

const windowHeight=$(window).height();
let scrollTop;

//퍼센트계산
function getPercent(sct){
  let scrollHeight = section.height();
  let scrollRealHeight=scrollHeight-windowHeight;
  let scrollPercent =(sct/scrollRealHeight)*100;
  let textPercent =Math.floor((sct/scrollRealHeight)*100);
  render(textPercent,scrollPercent)
}

//화면에 출력하는 부분
function render(ttp,scp){
  text.text(ttp+"%");
  progressBar.css("width",scp+"%")
  console.log(scp)
}


//스크롤양얻기
$(window).scroll(function(){
  scrollTop = $(this).scrollTop()
  getPercent(scrollTop)//함수를 출력하면서 값을 전달함
})
})
//if (scrollPercent >= 100) {
//  scrollPercent = 100;
//}



//원래거( 위에 것처럼 기능 분리하기 전)
// $(window).scroll(function(){
//   scrollTop = $(this).scrollTop()

  
// //퍼센트구하는부분
//   let scrollHeight = section.height();
//   let scrollRealHeight=scrollHeight-windowHeight;
//   let scrollPercent =(scrollTop/scrollRealHeight)*100;
//   let scrollAmount = Math.floor(scrollPercent);
  
//   //출력하는부분
//   text.text(scrollAmount+"%");
//   progressBar.css("width",scrollAmount+"%")
// })

// })
// //if (scrollPercent >= 100) {
// //  scrollPercent = 100;
// //}

