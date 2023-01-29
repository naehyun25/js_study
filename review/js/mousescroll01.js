// addEventListener("DOMContentLoaded",function(){
//     const section = document.querySelector("section");
//     let progressBar = document.querySelector(".bar");
//     let text = document.querySelector(".txt");
//     const windowHeight = window.innerHeight;
//     let scrollTop;

//     window.addEventListener("scroll",function(){
//         scrollTop = window.pageYOffset;//windowd스크롤 y축값
   
//     let scrollHeight = section.clientHeight;//문서의 총높이
//     let scrollRealHeight = scrollHeight - windowHeight;
    
//     let scrollPercent = (scrollTop/scrollRealHeight)*100
//     console.log(scrollPercent)
//     let pct = Math.floor(scrollPercent)+"%";
//     text.textContent=pct;
//     progressBar.style.width = pct;
// })

// })
$(function(){
    const section = $("section");
    let progressBar = $(".bar");
    let text = $(".txt");
    const windowHeight = $(window).height();
    $(window).scroll(function(){
        let scrollTop = $(this).scrollTop();

        let scrollHeight = section.height();
        
        let scrollRealHeight = scrollHeight-windowHeight;
        let scrollPercent = (scrollTop/scrollRealHeight)*100;
        let textPercent = Math.floor(scrollPercent);
        
        text.text(textPercent+"%");
        progressBar.css("width", scrollPercent+"%")
    })
})