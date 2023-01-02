$(function(){
  const visual = $("#Brandvisual li");//이미지
  const button = $("#buttonList li"); //버튼
  const speed = 3000;
  let current = 0; //현재
  let btnIndex = 0; //초기버튼인덱스
  let id; //setInterval

  //버튼클릭
  button.click(function(){
    btnIndex=$(this).index();
    button.removeClass("on");
    $(this).addClass("on");
    move(btnIndex);
  })

  //이동시키는 함수
  function move(){
    if (current==btnIndex) return;
    let cu=visual.eq(current);
    let ne=visual.eq(btnIndex);
    cu.css("left",0).stop().animate({left:"100%"})
    ne.css("left","100%").stop().animate({left:0});
    current=btnIndex;
  }
//아래 timer가 어떻게 움직이는거지??
  //시간마다실행
   timer();
  function timer() {
    id = setInterval(function () {
      let next = current + 1;
      if (next == visual.length) {
        next = 0;
      }
      button.eq(next).trigger("click");
    }, speed);
  }
  //clearInterval
  cleartime();
  function cleartime (){
    $("#Brandvisual,#buttonlist,.controls").mouseenter(function(){
      clearInterval(id);
    });
    $("#Brandvisual,#buttonlist,.controls").mouseleave(function(){
      timer();
      })
    }
    //좌우 컨트롤
    controls();
    function controls(){
      $(".controls .next").click(function(){
        btnIndex=btnIndex+1;
        if(btnIndex==visual.length){
          btnIndex=0;
        }
        button.removeClass("on");
        button.eq(btnIndex).addClass("on");
        let cu=visual.eq(current);
        let ne=visual.eq(btnIndex);
        cu.css("left",0).stop().animate({left:"-100%"})
        ne.css("left","100%").stop().animate({left:0});
        current=btnIndex;
        return false;
      })
      console.log(btnIndex)
      $(".controls .prev").click(function(){
        btnIndex=btnIndex-1;
        if(current==0){
          btnIndex=visual.length-1;
        }
        button.removeClass("on");
        button.eq(btnIndex).addClass("on");
        let cu=visual.eq(current);
        let ne=visual.eq(btnIndex);
        cu.css("left",0).stop().animate({left:"100%"})
        ne.css("left","-100%").stop().animate({left:0});
        current=btnIndex;
        return false;
      })
    }

})