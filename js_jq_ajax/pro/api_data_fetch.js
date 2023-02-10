const castCon= document.querySelector('#container');
let statusText,rainIcon,locText;
rainIcon=['<i class="bi bi-cloud-drizzle"></i>','<i class="bi bi-brightness-high"></i>','<i class="bi bi-cloud"></i>','<i class="bi bi-cloud-snow"></i>',];

let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/'; 
/*URL 옵션:getUltraSrtNcst-초단기실황, getVilageFcst(단기예보)*/
let params={
    type:['getUltraSrtNcst','getVilageFcst'],
    key : 'AveojOZ5ZNcfL29JQhWKdzFdcIOInK0reWkvwc%2B%2Bmzf5gGSgUoHNv24YP3jNGPiXAUqNyYSfpr2dtsynkZJOgg%3D%3D',
    pageNo:'1',
    numOfRows : '10',
    dataType : 'JSON',
    base_date : now,
    base_time : '0600',
    nx : '61',
    ny : '128'
}

url = `${url}${params.type[0]}?serviceKey=${params.key}&pagNo=${params.pageNo}&numOfRows=${params.numOfRows}&dataType=${params.dataType}&base_date=${params.base_date}&base_time=${params.base_time}&nx=${params.nx}&ny=${params.ny}`
console.log(now)
// var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'AveojOZ5ZNcfL29JQhWKdzFdcIOInK0reWkvwc%2B%2Bmzf5gGSgUoHNv24YP3jNGPiXAUqNyYSfpr2dtsynkZJOgg%3D%3D'; /*Service Key*/
// queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
// queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1000'); /**/
// queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); /**/
// queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent(now); /**/
// queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent('0600'); /**/
// queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent('60'); /**/
// queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent('124'); /**/

async function getPosts(){
    const res = await fetch(url);
    console.log("res",res)
    const data = await res.json(); // fetch에서 사용할 수 있는 데이터는 json, text 만 있다.
    return data;
}
// setPosts();
// async function setPosts(){
//     const posts = await getPosts();
//     console.log(posts.response)
//     const datas = posts.response.body.items.item;
//     console.log(posts.response.body.items.item);
//     datas.forEach((data) => {
//         const postEl = document.createElement("div");
//         postEl.classList.add("post");
//         postEl.innerHTML=`
//         <div class="area">지역:강남</div>
//         <div class="number">측정시간:${data.baseTime}</div>
//         <h2 class="post-title">카테고리:${data.category}</h2>
//         <div class="post-body">측정값:${data.obsrValue}</div>
//         `;
//         document.body.appendChild(postEl);
//     })
// }
setPosts();
async function setPosts(){
    const posts = await getPosts();
    console.log(posts);
    const datas = posts.response.body.items.item;
    console.log(datas);
    //ehdwjrdythtodtjd
    const castEl=document.createElement('table');
    castEl.classList.add('table'); // 부트스트랩디자인이용할거임
    const tr = document.createElement('tr');




    let cast={
        baseDate:datas[0].baseDate,
        rain:datas[0].obsrValue+5,
        rainInfo:function(){
            let info = this.rain;
            if(info==0){
                statusText="맑음";
                rainIcon=rainIcon[1];
            }else{
                if(info==1){
                    statusText='비옴';
                    rainIcon=rainIcon[0];
                }else if(info==2){
                    statusText='비/눈';
                    rainIcon=rainIcon[2];
                }else{
                    statusText='모지';
                rainIcon=rainIcon[3];}
            }

        },
        temperature:datas[3].obsrValue,
        wind:datas[5].obsrValue,
        nx:datas[0].nx,
        ny:datas[0].ny,
        loc:function(){
            let point=[this.nx,this.ny];
            console.log(point);
            if(point[0]==73 && point[1]==134){
                locText="서울/강남"
            }
        }
    }
    cast.rainInfo();
    cast.loc();
    tr.innerHTML=`
        <td>오늘날짜 : ${cast.baseDate}</td>
        <td>지역 : 서울/강남</td>
        <td>강수형태 : ${statusText}${rainIcon} </td>
        <td>기온 : ${cast.temperature}℃</td>
        <td>바람 : ${cast.wind}/ms</td>
    `
    castEl.appendChild(tr);
    castCon.appendChild(castEl)
} 