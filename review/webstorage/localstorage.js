let modalSeen;
let closeBtn = document.querySelector("#close-modal");
document.addEventListener("mouseleave",function(e){
    modalSeen = sessionStorage.getItem("modalSeen");
    console.log(e.toElement)
    if(modalSeen==null){
        document.querySelector('body').classList.add("mouse-out");
    }
});
closeBtn.addEventListener("click",function(e){
    e.preventDefault();
    document.querySelector('body').classList.remove('mouse-out');
    sessionStorage.setItem("modalSeen",true);
    console.log(sessionStorage.getItem("modalSeen"))
    
})
closeBtn.addEventListener("mouseover",function(e){
    console.log("나야",e.toElement);
})