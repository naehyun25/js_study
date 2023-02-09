$(function(){
    //ajax 통신을 위한 함수
    console.log("di");
    $.ajax({
        url:'http://api.kcisa.kr/API_CNV_053/request?serviceKey=6c65f8a2-c3bc-466f-a86d-b83929134f47&numOfRows=10&pageNo=1',
        dataType : 'xml',
        success:function(data){
                console.log(data)
                //var tb=$("<table/>")//혼자열고 혼자 닫음.
                //for(var i in data){
                    //변수명에 영어대신 쓸수있는기호_(js변수)$(jq변슈)
                    // var $id=data[i].id;
                    // console.log(data)
                    //console.log(data[i])데이터값 확인해서 변수에 집어넣는다.
                    // var $first_name=data[i].first_name;
                    // var $last_name=data[i].last_name;
                    // var $email=data[i].email;
                    // var $gender=data[i].gender;
                    // var $ip_address=data[i].ip_address;
                    // var row = $('<tr/>').append(
                    //     $('<td/>').text($id),
                    //     $('<td/>').text($first_name),
                    //     $('<td/>').text($last_name),
                    //     $('<td/>').text($email),
                    //     $('<td/>').text($gender)
                    // )
                //tb.append(row)
                //}
                //$('.wrap').append(tb)
            
        }
    })


})    
