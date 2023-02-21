$(document).ready(function(){
    $('.bxslider').bxSlider({
      mode:'horizontal',
      speed:500,
      captions:true,
      controls:true,
      nextText:'😍<i class="fa-solid fa-arrow-right"></i>',
      prevText:'😍<i class="fa-solid fa-arrow-left"></i>',
      auto:true,//autoplay 가 안되면 autoControls도 안됨
      autoControls:true,
      startText:'◼',
      stopText:'▶',
    });
    $('.videoSlider').bxSlider({
      video:true,
      //auto:true,
      onSliderLoad : function(currentIndex){
        //console.log(currentIndex)=0 인데 클론인 애가 0번이니까 강제적으로 +1
        $('.videoSlider div').eq(currentIndex+1).find('video').get(0).play();
      },
      onSlideAfter : function($slideElement,oldIndex,newIndex){
        console.log($slideElement,oldIndex,newIndex)
        $slideElement.siblings().find('video').get(0).pause();
        $slideElement.find('video').get(0).play();

      }
    });
    $('.active').bxSlider({
        loop:true,
        controls:true,
        auto:true,
        autoControls:true,
        onSliderLoad : function(currentIndex){
          $('.active li').eq(currentIndex+1).addClass("active");
        },
        onSlideAfter : function($slideElement){
          $slideElement.addClass('active').siblings().
            removeClass('active');
        }
      });
  });
  /*
  슬라이드가 넘어가도 동영상 재생시간만큼 재생을 하므로 오프된 슬라이드는 재생중지를 한다.
  */
  //1.동영상제어메서드
  //2. bx슬라이드에서 on된 요소 찾기(반환받기)->활성화되는 요소에 이름이 있다.
  /*onSliderLoad*/