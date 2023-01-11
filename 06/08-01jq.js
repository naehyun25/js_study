$(function(){

const section=$("section");
let progressBar=$(".bar");
let text=$(".txt");

const windowHeight=$(window).height();
let scrollTop;

$(window).scroll(function(){
  scrollTop = $(this).scrollTop()

  let scrollHeight = section.height();
  let scrollRealHeight=scrollHeight-windowHeight;
  let scrollPercent =(scrollTop/scrollRealHeight)*100;
  let scrollAmount = Math.floor(scrollPercent);
  text.text(scrollAmount+"%");
  progressBar.css("width",scrollAmount+"%")
})

})
//if (scrollPercent >= 100) {
//  scrollPercent = 100;
//}