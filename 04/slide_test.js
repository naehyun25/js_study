//visual li => visual(이미지)
//button li => button(버튼)
//current=>index no(현재의 인덱스넘버)
//
//버튼을 기준으로 현재의 인덱스넘버가 정해지고
//그 인덱스 넘버로
//1. 버튼클릭했을 때 기능하는 함수
//2. 이미지(비쥬얼)을 움직이는 함수
//3. 시간마다 자동으로 움직이는 함수
//를 움직인다.
//visual이 0,1,2

$(function(){
    const visual=$("#brandVisual>ul>li")
    const button=$("#buttonList>li")
    let current=0;

    //버튼
    button.click(function(){
        current=current+1;

    })


    //자동실행함수
    function timer(){
        setInterval(function(){
            let next=current+1;
            if(next==)
        })
    }

    //이동시키는 함수








})