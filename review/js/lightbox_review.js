// $(function(){
//     const $button = $(".gallery li a"),
//     $target = $("#lightbox-overlay"),
//     $targetImg = $target.find("img");

//     $button.click(function(){
//         $target.addClass("visible");
//         let newImg = $(this).find('img').attr('data-lightbox');
//         $targetImg.attr('src',newImg);
//     })
//     $target.click(function(){
//         $target.removeClass("visible");
//     })
// })
addEventListener("DOMContentLoaded",function(){
    const buttons = document.querySelectorAll('.gallery li a');
    const target = document.querySelector("#lightbox-overlay");
    const targetImg = document.querySelector("#lightbox-overlay img");
    const t1 = document.querySelector(".gallery-container")
    
    for(i=0; i<buttons.length; i++)
    buttons[i].onclick = function(){
        target.classList.add("visible");
        let newImg = this.firstChild.getAttribute("data-lightbox");
        targetImg.setAttribute('src',newImg)
    }
    target.onclick = function(){
        target.classList.remove("visible")
    }
})


