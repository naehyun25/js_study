
// $(function(){
// var sub=$(".sub");
// // console.log(sub)
// sub.css("display","none");
// $(".gnb>li>a").click(function(){
//   var k=$(this).next(".sub").css("display");
//   if(k==='none'){
//     $(this).next().SlideDown();
//   }else{
//     $(this).next().SlideUp();
//   }
//   console.log(k);
// })

// });



var sub = document.querySelector(".sub");
sub.style.transition='height .5s';
sub.style.overflow='hidden';
sub.style.height='0px';

document.querySelector(".gnb>li>a").addEventListener(
  'click', function(){
    var k=this.nextElementSibling.style.height;
    if(k==='0px'){
      this.nextElementSibling.style.height='100px'
    }else{
      this.nextElementSibling.style.height='0px'
    }
  }
)

