let gnbLiA = document.querySelector(".gnb>li>a");
console


$(function(){
let gnbliA = $(".gnb>li>a");
console.log(gnbliA)
gnbliA.click(function(){
    const sub = $('.sub');
    sub.removeClass('on');
    $(this).next().addClass("on");
})
});
// function toggle(){ 
//     if(!$(this).next().hasClass("on"))
//     {sub.removeClass("on"),
//       $(this).next().addClass("on");
//   }else{sub.removeClass("on")}
//     };

    
// let check=false;
// let aH=$('.sub>li>a').outerHeight();
// console.log(aH)
// const gnbLiA = $(".gnb>li>a");
// gnbLiA.click(function(){    
//     const sub = $(".sub")
// sub.css('height',"0px")
// $(this).next().css("height",aH*4-12+"px");
// })