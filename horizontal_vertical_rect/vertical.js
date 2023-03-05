const gnb = document.querySelectorAll(".gnb>li");
const gnbAnc = document.querySelectorAll(".gnb>li>a");
const sideNav = document.querySelectorAll(".sideNav>li");
const sideNavAnc = document.querySelectorAll(".sideNav>li>a");
const sections = document.querySelectorAll(".section");
let winH = window.innerHeight;
let winSct;
const gap=400;
//스크롤이벤트를 감지하는 함수 (스크롤이벤트바인딩)
window.addEventListener("scroll",function(){
    winSct=(window.pageYOffset || document.documentElement.scrollTop || window.scrollY);//브라우저호환성 , scrollY 표준
    sectionAni(winSct);
    sideNavAni();
    
});

//gnbAnc 클릭이벤트바인딩
gnbAnc.forEach((el)=>{
    el.addEventListener("click",function(e){
        e.preventDefault();//기본앵커속성막음
        document.querySelector(el.getAttribute("href")).
        scrollIntoView({behavior:"smooth", block:"center"})//선택한요소 기준으로 이동하는 함수
    });
});

//sideNavAnc 클릭이벤트바인딩
sideNavAnc.forEach((el)=>{
    el.addEventListener("click",function(e){
        e.preventDefault();//기본앵커속성막음
        document.querySelector(el.getAttribute("href")).
        scrollIntoView({behavior:"smooth", block:"center"})//선택한요소 기준으로 이동하는 함수
    });
});

//sideNavAnc에 애니메이트효과
function sideNavAni(){
    document.querySelector('.sideNav').style.top="0";
    setTimeout(()=>{
        document.querySelector('.sideNav').style.top=parseInt((winH-document.querySelector('.sideNav').clientHeight)/2)+"px";
    },400)
}

//sections 스크롤양 전달받는 함수
const sectionAni=(winSct)=>{
    (winSct>sections[0].offsetTop)? document.querySelector("nav").classList.add('sticky'):document.querySelector("nav").classList.remove('sticky');
        //     if(winSct>sections[0].offsetTop){
        // document.querySelector("nav").classList.add('sticky'}
    
        sections.forEach((o,i)=>{
        let sct=o.offsetTop;
        const delay=o.dataset.delay;
            //dataset : 사용자정의 속성 data는 그대로 쓰고 - 뒤는 알아서 작명
        if(winSct>sct-gap){
            //section의 data-delay 속성이 없는 경우
            if(delay==undefined){
                if(o.hasChildNodes('parallax')){
                    parallaxAni();
                }else{o.classList.add('sectionIn');}
            }else{
                setTimeout(()=>{o.classList.add('sectionIn');},delay);
            }
        
            //gnb on
            gnb.forEach((el)=>{
                el.classList.remove('on');
            });
            gnb[i].classList.add('on');
            sideNav.forEach((el)=>{
                el.classList.remove('on');
            });
            sideNav[i].classList.add('on');
        };
    });
    function parallaxAni(){
        const parallax = document.querySelectorAll('.parallax>.pbox');
        parallax.forEach((o)=>{
            const delay=o.dataset.delay;
            o.classList.remove("sectionIn");
              setTimeout(()=>{o.classList.add('sectionIn');},delay);
        });
    };
};

