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
    window.addEventListener("scroll",function(){
        scrollTop = window.pageYOffset;//(1)
        scrollTop = document.documentElement.scrollTop;//(2)
        scrollTop = window.scrollY;//(3)
        //1,2 비슷한데 1은 윈도우 기준으로 얼마나 떨어졌는지, 2는 문서기준, 3은 최근거 (pageYoffset->scrollY)=>현재 표준임
        h2.innerHTML=scrollTop;
        animate(scrollTop);
        //forEach문을 함수로 만들어서 scrollTop 값을 매개변수로전달
    });
    const animate=(sct)=>{
        sections.forEach(function(el){
            let sectionTop=el.offsetTop;
            if(sct > sectionTop-gap){
                el.classList.add("sectionIn");
            }else{
                el.classList.remove("sectionIn");
            };
            // if(sct>gap){
                    //if(sct>gap*2){nav.style.background="blue"}이렇게도 사용가능
            //     nav.classList.add("sticky");
            // }else{
            //     nav.classList.remove("sticky");
            // }
            //-> 삼항연산자로 변경
            (sct>=gap)?nav.classList.add("sticky"):nav.classList.remove("sticky");
        })
        
    };
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



//jq
$(function(){
    //jq();
    function jq(){
        const sections=$("section");
        let scrollTop;
        const h2 = $("h2");
        const gap = 500;
        $(window).scroll(
            function(){
                scrollTop = $(this).scrollTop();
                //jq 는 읽는게 없으니까 ()를 써서 값을 가져옴 무조건 소괄호를 쓰세요. 
                //jq는 무조건 method 입니다.
                h2.innerHTML=scrollTop;
                animate(scrollTop);
            }
        )
    
        const animate=(sct)=>{
            sections.each((idx,el)=>{
                //el이 jq 객체로 반환되지 않고 일반태그로 반환되니까 
                //매번 반환값을 객체로 변환해야함.
                let tg=$(el)
                let sectionTop=tg.offset().top;
                if(sct > sectionTop-gap){
                    tg.addClass("sectionIn");
                }else{tg.removeClass("sectionIn")}
                /* index를 활용하는법
                let tg = sections.eq(idx);
                if(sct>tg.offset().top-gap){
                    tg.addClass("sectionIn")
                }
                
                */
            })
        };
    }
})

//jq 완성코드는 코딩대장에서 확인하세요