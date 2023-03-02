//제어할 (스크롤) 요소가 여러개면 timeline 사용이 편함
let scroll_tl = gsap.timeline({
    scrollTrigger:{
        trigger:".factsContainer", //trigger 시킬 요소명
        markers:false,
        start:"top center",//스크롤바가 top에서 200 px 내려가면 스크롤 시작
        end : "+=300",
        scrub : true //사용한다 : true<-> false /  1:스크롤바를 잡는데 1초가 걸린다. 휠 속도와 스크롤바 움직이는 속도를 맞춘다.
    }
})
let facts = document.querySelectorAll(".fact");
scroll_tl.to('.factsContainer h2',{
    scale:1.2,
    duration:1,
    ease:'slow'
})
scroll_tl.to(facts,{
    xPercent:-85*(facts.length-1),
    scrollTrigger:{
        trigger:'.factsContainer_sm',
        start:'center center',
        pin:true,
        scrub:1,
        snab:1/(facts.length-1),
        end : () =>  `+=4320` // 대신 .factsContainer_sm.offsetWidth를 변수로지정해서해도됨
    }
})
//콘솔오류나면 아래거 붙이면 됨.
//gsap.config({trialWarn: false});