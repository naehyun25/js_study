// $(function(){
// let gnbliA = $(".gnb>li>a");
// console.log(gnbliA)
// gnbliA.click(function(){
//     const sub = $('.sub');
//     sub.removeClass('on');
//     $(this).next().addClass("on");
// })
// });

// $(function(){
//     let a = $(".gnb>li>a");
//     let sub = $(".sub")
//     a.click(
//     function toggle(){
//         if(!$(this).next().hasClass("on")){
//             sub.removeClass("on"),
//             $(this).next().addClass("on");
//         }else{sub.removeClass("on")
//         };
//     })
// })

let ah = $(".sub>li>a").outerHeight();
const gnblia = $(".gnb>li>a");
gnblia.click(
    function(){
        let tg = $(this);
        let suba = tg.next().find("a").length;
        $(".sub").css("height","0px")
        tg.next().css("height",ah*suba+"px");
    }
)