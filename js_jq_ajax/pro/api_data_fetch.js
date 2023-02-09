var url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'AveojOZ5ZNcfL29JQhWKdzFdcIOInK0reWkvwc%2B%2Bmzf5gGSgUoHNv24YP3jNGPiXAUqNyYSfpr2dtsynkZJOgg%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1000'); /**/
queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); /**/
queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent(now); /**/
queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent('0600'); /**/
queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent('60'); /**/
queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent('124'); /**/

async function getPosts(){
    const res = await fetch(`${url}${queryParams}`);
    console.log("res",res)
    const data = await res.json(); // fetch에서 사용할 수 있는 데이터는 json, text 만 있다.
    return data;
}
setPosts();
async function setPosts(){
    const posts = await getPosts();
    const datas = posts.response.body.items.item;
    console.log(posts.response.body.items.item);
    datas.forEach((data) => {
        const postEl = document.createElement("div");
        postEl.classList.add("post");
        postEl.innerHTML=`
        <div class="area">지역:강남</div>
        <div class="number">측정시간:${data.baseTime}</div>
        <h2 class="post-title">카테고리:${data.category}</h2>
        <div class="post-body">측정값:${data.obsrValue}</div>
        `;
        document.body.appendChild(postEl);
    })
}