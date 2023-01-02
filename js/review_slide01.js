$(function(){
    //변수
  const visual=$("#Brandvisual>ul>li");
  const button=$("#buttonList>li");
  let current=0;
  let id;
  const speed=3000;
  const btnIdx=0;
  //버튼
  button.click(function(){
    current=current+1;
    btnIdx = $(this).index();
    button.removeClass("on");
    $(this).addClass("on");
    move()
  });

  //시간마다실행-setInterver
  timer();
  function timer(){
    setInterval(function(){
        current++
        if(current==visual.length){current=0;}
      },speed)
    move()
    }
    
  function move(){
    if(current==btnIdx)return;
    visual.eq(current).css("left",0).stop().animate({"left":"-100%"});
    visual.eq(btnIdx).css("left","100%").stop().animate({"left":0});
    console.log(current)
  }

  //이동시키는함수
  
  


});//jQuery