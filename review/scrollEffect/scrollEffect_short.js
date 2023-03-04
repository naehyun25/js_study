{const gap ='500';

const sections = document.querySelectorAll("section");
const nav = document.querySelector("nav");
const gnb = document.querySelectorAll(".gnb>li");
const sideNav = document.querySelectorAll(".sidenav li");

window.addEventListener("scroll",function(){
    scrollTop = window.scrollY;
    animate(scrollTop);
});

const animate = (sct) => {
    sections.forEach(function(el, idx){
        let sectionTop = el.offsetTop;
        if(sct > sectionTop-gap){
            el.classList.add("sectionIn");
            gnb.forEach((obj)=>{
                obj.classList.remove("on");
            });
            gnb[idx].classList.add("on");
            sideNav.forEach((obj)=>{
                obj.classList.remove("on");
            });
            sideNav[idx].classList.add("on");
        }else{el.classList.remove("sectionIn")};
        
        (sct>=nav.clientHeight)?nav.classList.add("sticky"):nav.classList.remove("sticky");
    });
};

sideNav.forEach((el)=>{
    el.addEventListener("click",function(e){
        e.preventDefault();
        IntoView(el);
        classControl(sideNav,el);
    });
});

gnb.forEach((el) => {
    el.addEventListener("click",function(e){
        e.preventDefault();
        IntoView(el);
        classControl(gnb,el);
        
    });
});}

function IntoView (el){
    document.querySelector(el.firstChild.getAttribute("href")).scrollIntoView({behavior:"smooth"});
}

function classControl(objs,el){
    objs.forEach((obj) => {
        obj.classList.remove("on")
    });
    el.classList.add("on")
}