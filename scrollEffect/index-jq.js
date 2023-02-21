// js
// 1단계 스크롤양 알아보기
// 2단계 스크롤양이 요소top 값보다 커지면 .sectionIn 추가
// 3단계 마우스스크롤 되면 스크롤양이 gap 보다 크면  nav에  .sticky 추가.
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