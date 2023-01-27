document.addEventListener("DOMContentLoaded",()=>{
    var button = document.querySelectorAll('.gallery a'),
    target = document.querySelector("#lightbox-overlay"),
    targetImg = target.querySelector('img');
    for(i=0; i<button.length; i++){
        button[i].addEventListener("click",function(){
            let data = this.querySelector('img').getAttribute("data-lightbox");
            targetImg.setAttribute("src",data);
            target.classList.add("visible");
        })
    }
    target.onclick=function(){
        this.classList.remove("visible");
    }
})