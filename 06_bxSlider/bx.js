$(document).ready(function(){
    $('.bxslider').bxSlider({
      mode:'horizontal',
      speed:500,
      captions:true,
      controls:true,
      nextText:'π<i class="fa-solid fa-arrow-right"></i>',
      prevText:'π<i class="fa-solid fa-arrow-left"></i>',
      auto:true,//autoplay κ° μλλ©΄ autoControlsλ μλ¨
      autoControls:true,
      startText:'βΌ',
      stopText:'βΆ',
    });
    $('.videoSlider').bxSlider({
      video:true,
      //auto:true,
      onSliderLoad : function(currentIndex){
        //console.log(currentIndex)=0 μΈλ° ν΄λ‘ μΈ μ κ° 0λ²μ΄λκΉ κ°μ μ μΌλ‘ +1
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
  μ¬λΌμ΄λκ° λμ΄κ°λ λμμ μ¬μμκ°λ§νΌ μ¬μμ νλ―λ‘ μ€νλ μ¬λΌμ΄λλ μ¬μμ€μ§λ₯Ό νλ€.
  */
  //1.λμμμ μ΄λ©μλ
  //2. bxμ¬λΌμ΄λμμ onλ μμ μ°ΎκΈ°(λ°νλ°κΈ°)->νμ±νλλ μμμ μ΄λ¦μ΄ μλ€.
  /*onSliderLoad*/