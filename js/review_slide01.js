$(function(){
    //변수
  const visual=$("#Brandvisual>ul>li");
  const button=$("#Brandvisual>ul>li");
  let current=0;
  let id;
  const speed=3000;
  
  //버튼
  button.click(function(){

  });

  //시간마다실행-setInterver
  timer();
  function timer(){
    setInterval(function(){
        let next=current+1;
        if(next==visual.length-1){
            next=0;
        } 
        move(next);
        
    },speed)
  }

  //이동시키는함수
  function move(next){
    console.log("next"+next)
    let cu=visual.eq(current);
    let ne=visual.eq(next);
    cu.css('left','0').stop().animate({left:"-100%"});
    ne.stop().animate({left:"0%"})
  }


});//jQuery