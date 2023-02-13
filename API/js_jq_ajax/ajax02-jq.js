$(function(){
    //ajax 통신을 위한 함수
    $.ajax({//라이브러리 등은 메서드 안에 객체표기법을 많이 사용한다.
        url:'MOCK_DATA.json',//파일위치
        dataType : 'json',//파일형식
        success:function(data){
            //console.log(data)
            if(data.length>0){//데이터가 있을 경우
                var tb=$("<table/>")//혼자열고 혼자 닫음.
                for(var i in data){
                    //변수명에 영어대신 쓸수있는기호_(js변수)$(jq변슈)
                    var $id=data[i].id;
                    console.log(data)
                    //console.log(data[i])데이터값 확인해서 변수에 집어넣는다.
                    var $first_name=data[i].first_name;
                    var $last_name=data[i].last_name;
                    var $email=data[i].email;
                    var $gender=data[i].gender;
                    var $ip_address=data[i].ip_address;
                    var row = $('<tr/>').append(
                        $('<td/>').text($id),
                        $('<td/>').text($first_name),
                        $('<td/>').text($last_name),
                        $('<td/>').text($email),
                        $('<td/>').text($gender)
                    )
                tb.append(row)
                }
                $('.wrap').append(tb)
            }
        }
    })


})    
