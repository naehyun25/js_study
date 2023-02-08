<?php  // 노션에 주석뜻 있음 
    $ch=curl_init();
    curl_setopt($ch , CURLOPT_SSL_VERIFYPEER , false);
    curl_setopt($ch , CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch , CURLOPT_HEADER, 0);
    curl_setopt($ch , CURLOPT_URL, 'http://www.kopis.or.kr/openApi/restful/pblprfr?service=a31fe329cd40468e8b664b205d26e7ff&stdate=20220601&eddate=20221201&cpage=1&rows=5');

    $url_source=curl_exec($ch);
    echo $url_source;
?>
