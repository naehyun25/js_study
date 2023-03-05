// 즉시실행함수 자기스스로 호출하고 한번만 실행
(function(){
    let g_containerInViewport;
    //함수의 호출
    init();
    function init(){
        setStickyContainersSize();
        bindEvents();
    };

    //휠이벤트 바인드
    function bindEvents(){
        window.addEventListener('wheel', wheelHandler)
        //wheelHandler는 콜백함수 ->매개변수있을경우 ()쓰지만 없으면 그냥 이름만 불러도됨
       

    };
    //스티키요소가 화면에 보이고 있는지를 확인할 함수
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        //요소가 화면에 있을경우
        //document.documentElement <html lang="en"> 이 반환
            //즉 화면밖에 있는 요소가 진입을 시작하면 true
        return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
    }
    

    //스티키박스의 크기확인
    function setStickyContainersSize(){
        document.querySelectorAll('.sticky-container').forEach((container)=>{
            //스크롤양만큼 가로로 넘어가야되니까 스크롤높이=스티키컨테이너의 너비
            //scrollWidth = 숨겨진 영역까지 포함한 크기를 리턴
            const setStickyContainerHeight = container.querySelector("main").scrollWidth;
            container.setAttribute('style','height:'+setStickyContainerHeight+'px');
        });
    };

    //휠 이벤트핸들러
    function wheelHandler(e){
        //스티키요소의 화면 진입여부를 확인->isElemntInViewport
        //반환값을 순환이 가능한 객체로 만들어 새배열로 저장
        //querySelector, querySelectorAll 은 -> nodeList 형태로 반환
        //getElementsbyClassName, getElementbyId, -> html collections 
        //iterable
          // https://ko.javascript.info/iterable
        const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container')).filter(function (container) {
            return isElementInViewport(container);
        })[0];
        if (!containerInViewPort) {
            return;
        }

        let isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;//.sticky-container의 상단좌표를 스크롤보다 작은지 비교
        let isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;//.sticky-container 탑과 높이를 합하고(길이) 스크롤양보다 큰지비교
        let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;//true 는 보이는 상태

        console.log(containerInViewPort, containerInViewPort.offsetTop, isPlaceHolderBelowBottom);

        if (g_canScrollHorizontally) {
            containerInViewPort.querySelector('main').scrollLeft += e.deltaY;
        }
            //.sticky-container의 상단좌표를 스크롤보다 작은지 비교

        };
})();
