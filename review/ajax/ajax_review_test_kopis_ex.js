$(function(){
    console.log("ab")
    $.ajax({
        url:'http://www.kopis.or.kr/openApi/restful/pblprfr?service=a31fe329cd40468e8b664b205d26e7ff&stdate=20220601&eddate=20221201&rows=10&cpage=1',
        dataType : 'xml',
        success:function(data){
            if(data.length>0){
                console.log("data")
            }
        }
    })
})    
