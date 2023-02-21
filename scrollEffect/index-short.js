// js
const gap = 500;

function js(){
    const sections=document.querySelectorAll("section");
    let scrollTop;
    const h2 = document.querySelector("h2");
    const nav = document.querySelector("nav");
    const gnb = document.querySelectorAll(".gnb>li");
    const sideNav = document.querySelectorAll(".sideNav li");
    window.addEventListener("scroll",function(){
        scrollTop = window.scrollY;
        animate(scrollTop);
    });
    const animate=(sct)=>{
        sections.forEach(function(el,idx){
            let sectionTop=el.offsetTop;
            if(sct > sectionTop-gap){
                gsap.to(el, {backgroundColor: "#8d3dae"});
                removeOn(gnb);
                removeOn(sideNav);
                gnb[idx].classList.add("on");
                sideNav[idx].classList.add("on");
            }else{
                gsap.to(el, {backgroundColor: "yellow"});
            };
            
            (sct>=nav.clientHeight)?nav.classList.add("sticky"):nav.classList.remove("sticky");
        })
    };
    sideNav.forEach((el)=>{
        el.addEventListener("click",function(e){
            e.preventDefault();
            smooth(el);
            removeOn(sideNav);
            el.classList.add("on");
        });
    });
    gnb.forEach((el) => {
        el.addEventListener("click", function(e){
            e.preventDefault();
            smooth(el);
            removeOn(gnb);
            el.classList.add("on");
        });
    });    
};
js();

function smooth(el){
    document.querySelector(el.firstChild.getAttribute("href")).scrollIntoView({behavior:"smooth"});
}
function removeOn(obj){
    obj.forEach((o)=>{
        o.classList.remove("on");
    })
}