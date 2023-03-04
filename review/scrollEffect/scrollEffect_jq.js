$(function(){
    const gap =500;

    const sections = $("section");
    const nav = $("nav");
    const gnb = $(".gnb>li");
    const sideNav = $(".sidenav li");
    const h2 = $("h2");
    let scrollTop;

    $(window).scroll(
        function(){
            scrollTop = $(this).scrollTop();
            animate(scrollTop);
        }
    );
    
    const animate= (sct)=>{
        sections.each(function(idx,el){
            let target = $(el);
            let sectionTop=target.offset().top;
            if(sct > sectionTop-gap){
                target.addClass("sectionIn");
                gnb.removeClass("on");
                gnb.eq(idx).addClass("on");
                sideNav.removeClass("on");
                sideNav.eq(idx).addClass("on");
            }else{target.removeClass("sectionIn");};
            
            (sct>=nav.height())?nav.addClass("sticky"):nav.removeClass("sticky");
           
        });
    }
    // $(".gnb li").click(function(e){
    //     e.preventDefault();
    //     intoView(this);
    //     classControl($(".gnb li"),e)
    // });
    // $(".sideNav li").click(function(e){
    //     e.preventDefault();
    //     intoView(this);
    //     classControl($(".sideNav li"),e)
    // });
    

    // function intoView(el){
    //     let id = ($($(el).find("a").attr("href")))
    //     console.log(id)
    //     $(id).animate({"top":$(id).scrollTop()+"px"},500)
    // }
    // function classControl(objs, el) {
    //     objs.removeClass("on");
    //     $(el).addClass("on");
    //   }
    
    sideNav.click(function(e){
        console.log(e)
        console.log(this)
        e.preventDefault();
        sideNav.removeClass("on");
        $(this).addClass("on");
        console.log($(this).find("a").attr("href"));
        ($($(this).find("a").attr("href"))).animate({top:0},500)
    })

});

