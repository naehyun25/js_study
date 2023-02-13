//ajax통신을 가능하게 하는 객체
var request = new XMLHttpRequest();
//데이터주소 설정
const url = 'MOCK_DATA.json'
//데이터형식 설정
//(response type : document 일때는 html 구조 그대로 통으로 가져옴)
//이번에는 데이터 형식이 다르므로(데이터베이스 그 자체임) 텍스트만 가져오면 
//console.log(request.readyState)//0:비동기방식이라 상태 값에 따라 반환이됨(위에서 아래로 쭉이아니라 open,send 보고 돌아옴)
request.onreadystatechange=function(){
    //onreadystatechange : 상태바뀔 때 동작하는 함수 request 객체안에있음 
    //(readystate쓰려면 onreadystatechange써야함 그 안에 있으니까)
    //바뀐 요청값을 얻을때는 onreadystatechange속성의 readyState 메서드활용 문법은 아래와같다.
    if (request.readyState==4 && request.status==200){
        //console.log(request.readyState)//4
        //console.log(this.responseText)
        jsonfunc(this.responseText)
    }
    
}
request.open("GET",url);
request.send();
//네트워크 통신으로 db 받기.
//받은 db를 가공해서 화면에 바인딩
function jsonfunc(responseText){
    console.log(responseText)
    let id = new Array();
    let first_name = new Array();
    let last_name = new Array();
    let email = new Array();
    let gender = new Array();
    let ip_address = new Array();
    //json 데이터를 text로 변환
    let jsonTxt=JSON.parse(responseText)
    //dom 요소준비
    const wrap = document.querySelector(".wrap")
    //table 태그생성
    let table = document.createElement("table")
    //반복문 사용해서 테이터 바인딩
    for (i=0; i<jsonTxt.length; i++){
        id[i]=jsonTxt[i].id;
        first_name[i] = jsonTxt[i].first_name;
        last_name[i] = jsonTxt[i].last_name;
        email[i] = jsonTxt[i].email;
        gender[i] = jsonTxt[i].gender;
        ip_address[i] = jsonTxt[i].ip_address;
        //tr,td  생성 후 데이터 넣기
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.appendChild(document.createTextNode(id[i]+""))
        let td2 = document.createElement("td");
        td2.appendChild(document.createTextNode(first_name[i]+""))
        let td3 = document.createElement("td");
        td3.appendChild(document.createTextNode(last_name[i]+""))
        let td4 = document.createElement("td");
        td4.appendChild(document.createTextNode(email[i]+""))
        let td5 = document.createElement("td");
        td5.appendChild(document.createTextNode(gender[i]+""))
        let td6 = document.createElement("td");
        td6.appendChild(document.createTextNode(ip_address[i]+""))

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)

        table.appendChild(tr)
    }
    wrap.appendChild(table)
}