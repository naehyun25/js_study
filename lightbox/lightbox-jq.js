$(function(){
    var $button = $('.gallery li a'),
    $target=$('#lightbox-overlay'),
    $targetImg=$target.find('img');
    
    $button.click(function(){
        var newImg = $(this).find('img').attr('data-lightbox');
        var oldImg = $(this).find('img').attr('src');
        $target.addClass('visible')
        //$targetImg.attr('src',oldImg)
        $targetImg.attr('src',newImg)
    })
    $target.click(function(){
         $target.removeClass('visible');
    })
})

내거
$(function(){
    let imgs = $('.gallery li a img');
    const layer = $('#lightbox-overlay');
    imgs.click(function(){
        layer.addClass('visible');
        let popImg = $(this).attr('data-lightbox');
        layer.find('img').attr('src',popImg);
    });
    layer.click(function(){
        layer.removeClass('visible');
    })
})

addEventListener('DOMContentloaded',function(){
    console.log("hoi")
})