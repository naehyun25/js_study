$(function(){
  $.ajax({
    url:"feed.php",
    dataType:"xml",
    success:function(data){
        var $items=$(data).find('item')
        if($items.length>0){
            $items=$items.slice(0,10);//[0]~[10]개 선택
            var $ul=$('<ul/>');
            //$items.each() == $.each($items)똑같은거
            $.each($items, function(i,o){
                var $title = $(o).find('title').text()
                var $link = $(o).find('link').text()
                var $aTag = $('<a / >')
                $aTag.attr({'href':$link, 'target':'_blank'})
                $aTag.text($title)
                var $li = $("<li />")
                $li.append($aTag)
                $ul.append($li)
                // console.log(i,o,$title);
            })
            $('.wrap').append($ul)
            // CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. : 자바스크립트 보안정책 
            //php, josp 등으로 경유해서 사용해야함(서버언어) -> php 무료
        }
    }
  })  
})