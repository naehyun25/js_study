$(function(){
    $(window).mouseleave(function(e){
        var modalSeen = sessionStorage.getItem("modalSeen");
        if(e.toElement==null && !modalSeen){
            console.log("!모달",!modalSeen)
            $('body').addClass("mouse-out");
        }
    });
    $("#close-modal").click(function(e){
        e.preventDefault();
        $('body').removeClass("mouse-out");
        sessionStorage.setItem("modalSeen",true);
    });
});