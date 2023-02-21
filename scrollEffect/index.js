// js
// 1단계 스크롤양 알아보기
// 2단계 스크롤양이 요소top 값보다 커지면 .sectionIn 추가
// 3단계 마우스스크롤 되면 스크롤양이 gap 보다 크면  nav에  .sticky 추가.
const gap = 500;

function js(){
    const sections=document.querySelectorAll("section");
    let scrollTop;
    const h2 = document.querySelector("h2");
    const nav = document.querySelector("nav");
    const gnb = document.querySelectorAll(".gnb>li");
    const sideNav = document.querySelectorAll(".sideNav li");
    window.addEventListener("scroll",function(){
        scrollTop = window.pageYOffset;//(1)
        scrollTop = document.documentElement.scrollTop;//(2)
        scrollTop = window.scrollY;//(3)
        //1,2 비슷한데 1은 윈도우 기준으로 얼마나 떨어졌는지, 2는 문서기준, 3은 최근거 (pageYoffset->scrollY)=>현재 표준임
        animate(scrollTop);
        //forEach문을 함수로 만들어서 scrollTop 값을 매개변수로전달
    });
    const animate=(sct)=>{
        sections.forEach(function(el,idx){
            //idx:0,1,2,3,4,5,6-> gnb[idx]

            let sectionTop=el.offsetTop;
            if(sct > sectionTop-gap){
                //el.classList.add("sectionIn");//greenSock 쓰려고 주석처리
                gsap.to(el, {backgroundColor: "#8d3dae"});
                //greenSock->css속성은 카멜케이스로
                gnb.forEach((obj)=>{
                    obj.classList.remove('on')
                })
                gnb[idx].classList.add("on");
            }else{
                el.classList.remove("sectionIn");
            };
            
            // if(sct>gap){
                    //if(sct>gap*2){nav.style.background="blue"}이렇게도 사용가능
            //     nav.classList.add("sticky");
            // }else{
            //     nav.classList.remove("sticky");
            // }
            //-> 위의 if 문을 삼항연산자로 변경
            //(sct>=gap)?nav.classList.add("sticky"):nav.classList.remove("sticky");
            (sct>=nav.clientHeight)?nav.classList.add("sticky"):nav.classList.remove("sticky");
            //-> 위에거 조건변경 : nav의 높임나큼 스크롤이 내려오면 sticky
            /*
            ->innerHeight, heigth 는 window객체의 속성
            document 객체의 속성 이기 때문에 하위요소를 찾아서 높이를 취득해야함
            ->clientHeight : client가 들어가면 요소의 높이, 너비 얻기
            element.clientHeight 라고만 해도된다.
            */
        })
    };
    sideNav.forEach((el)=>{
        el.addEventListener("click",function(e){
            e.preventDefault();
            document.querySelector(el.firstChild.getAttribute("href")).scrollIntoView({behavior:"smooth"});
            sideNav.forEach((obj)=>{
                obj.classList.remove("on");
            })//그냥 gnb에 remove 붙이면 안됨... (배열이라)
            el.classList.add("on");
        });
    });
    gnb.forEach((el) => {
        el.addEventListener("click", function(e){
            e.preventDefault();
            document.querySelector(el.firstChild.getAttribute("href")).scrollIntoView({behavior:"smooth"});
            gnb.forEach((obj)=>{
                obj.classList.remove("on");
            })//그냥 gnb에 remove 붙이면 안됨... (배열이라)
            el.classList.add("on");
        });
    });    
};
js();