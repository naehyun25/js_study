<?php  // 노션에 주석뜻 있음 
    $ch=curl_init();
    curl_setopt($ch , CURLOPT_SSL_VERIFYPEER , false);
    curl_setopt($ch , CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch , CURLOPT_HEADER, 0);
    curl_setopt($ch , CURLOPT_URL, 'https://www.chosun.com/arc/outboundfeeds/rss/category/entertainments/?outputType=xml');

    $url_source=curl_exec($ch);
    echo $url_source;
?>
