
    const slide=$(".banner_img");
    let btnIndex=0;
    let current=0;
    const totalnum=slide.find("li").length
    const imgWidth=slide.find("li").eq(0).width();
    const copy=slide.find("li").clone().css("opacity",0.5)
    //복사본 붙이기
    slide.append(copy)
    //버튼으로 prev, next 움직이기
    let prevBtn = $(".swipper .prev")
    let nextBtn = $(".swipper .next")
    $(".next").click(function(){
        if(current==totalnum)
        {current=0; slide.css("margin-left",0)}
        current++
        slide.stop().animate({"margin-left":-imgWidth*current},500)
        console.log(current)
    })
    //shownumber=1;
//2. <> 버튼으로 넥스트 prev 선택하기
//3. autoplay
//4. pause 와 play  버튼으로 재생멈춤 처리
//5. 