let responseClone;
let fetched = fetch('http://api.kcisa.kr/API_CNV_053/request?serviceKey=6c65f8a2-c3bc-466f-a86d-b83929134f47&numOfRows=10&pageNo=1');
        fetched.then((response)=>{
            responseClone=response.clone();
            return response.json();
        })
        .then((data) => {console.log(data)}
        ,function(rejectreason){
            console.log("error",rejectreason,"대답",responseClone);
            let data = responseClone.json();
            console.log("데이터",data);
            responseClone.text().then((bodytext) => {console.log(bodytext)})
        })
        .then
        //실패시 
        fetched.catch((reason)=>{
            console.log("실패",reason)
        })