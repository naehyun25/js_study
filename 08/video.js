$(function(){
/*코드짤때 생각할 것
1.변수로 저장할 것들
 1-1.사이즈 
  화면 사이즈- window width, height 
  비디오 사이즈 - video width, height
  
2.함수로 만들것들-무슨기능필요하고 만들건지
  2-1. 비디오 풀사이즈 (videoResizeFn)
    -창이 넓어서 비디오의 너비가 모자랄때
    -창이 길어서 비디오의 길이가 모자랄때
위의 2개로 나눠서 생각해볼것 
*/
var winW = $(window).innerWidth(),//window ""감싸도되는데 독보적인애라 알아들어서 안감쌈
    winH = $(window).innerHeight(),
    vidW = $("#main-video").innerWidth(),
    vidH = $("#main-video").innerHeight();
    console.log(winW,winH,vidW,vidH)

  //setInterval(videoResizeFn,100)
  //(어떤대상).resize: 크기변경 시 실행되는 함수
  $(window).resize(function(){
    videoResizeFn()
  })

  function videoResizeFn(){
    winW=$(window).innerWidth(),
    winH=$(window).innerHeight(),
    vidW=$("#main-video").innerWidth(),
    vidH=$("#main-video").innerHeight()
    console.log(`win높이:${winH} img높이:${vidH} wins너비:${winW} img너비:${vidW}`)
    //1.비디오(박스)높이= 창높이
  $(".main_video").css({width:"100%",height:winH}) 
  //2.창 높이가 비디오보다 길때 :css. 일단 비율에 맞게 꽉 채우고 넘치는 부분은 overflow:hidden 으로 잘라버림
  if(winH>vidH){
    $("#main-video").css({height:winH, width:"auto"})
    console.log($("#main-video").height(),winH)
  };
  //2. 창이 넓어서 비디오의 너비가 모자랄때//
  if(winW>vidW){
    $("#main-video").css({width:winW, height:"auto"})
  }
  //4.정렬
  $("#main-video").css({marginLeft:(winW-vidW)/2, "margin-top":(winH-vidH)/2})
  

  }


})//jq