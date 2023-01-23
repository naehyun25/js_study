$(function(){
    $.ajax({
        url:"ajax03_review.php",
        dataType : "xml",
        success : function(data){
            console.log(data)
            var $items=$(data).find('item')
            if($items.length>0){
                $items=$items.slice(0,10);
                var $ul = $('<ul />');
                $.each($items, function(i,o){
                    var $title = $(o).find('title').text()
                    var $link = $(o).find('link').text()
                    var $aTag = $('<a />')
                    $aTag.attr({'href':$link, 'target':'_blank'})
                    $aTag.text($title)
                    var $li = $("<li />")
                    $li.append($aTag)
                    $ul.append($li)
                })
                $('.wrap').append($ul)
            }
        }
    })
})