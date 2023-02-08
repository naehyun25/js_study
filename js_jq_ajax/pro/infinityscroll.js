//스크립트를 적용할 요소를 상수에 저장!
const postContainer = document.querySelector('#posts-container'),//빈div
loading=document.querySelector('.loader'),
filter=document.querySelector('#filter');

let limit = 5, page = 1;

//API에서 POST(게시글)를 fetch로 통신하는 함수
async function getPosts(){
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
    const data=await res.json();
    return data;
}

showPosts();
//DOM에 보여주는 함수
async function showPosts(){
    //console.log("열려라",getPosts())-> show안의 getpost는 data-결과값을 갖고있다.
    const posts = await getPosts();
    console.log(posts);
    posts.forEach((post)=>{
        const postEl = document.createElement('div');
        postEl.classList.add('post');
        postEl.innerHTML=`
            <div class="number">${post.id}</div>
            <div class="post-info">
                <h2 class="post-title">${post.title}</h2>
                <p class="post-body">${post.body}</p>
            </div>`
        console.log(post);
        postContainer.appendChild(postEl);
    })
}

//loader 함수 - 로딩중이라는걸 알려주는 함수 동그라미 똥똥똥
function showLoading(){
    loading.classList.add('show')
    setTimeout(()=>{
        loading.classList.remove('show');
        setTimeout(() => {
            page++;
            showPosts();
        },300)
    },1000);
}
//window-scroll
window.addEventListener('scroll',function(){
    /*
    scrollTop:요소의 수직스크롤
    scrollHeight : 스크롤높이
    */
    const obj = document.documentElement;
    // const a = {
    //     scrollTop:obj.scrollTop,
    //     scrollHeight:obj.scrollHeight,
    //     clientHeight:obj.clientHeight,
    // }
    const {scrollTop,scrollHeight,clientHeight} = document.documentElement
    console.log(document.documentElement.scrollTop)
    console.log(document.documentElement.scrollHeight)
    console.log(document.documentElement.clientHeight)
    console.log("디스트럭처링:",scrollTop,scrollHeight,clientHeight)
    //-> 속성과 속성값이 같을때 이렇게 해서 한줄씩 꺼내서 쓸 수 있다.

    if(scrollTop+clientHeight>=scrollHeight-6){
        showLoading();
    }

})

//검색키워드 필터링 함수
function filterPosts(e){
    //alert(e);
    const term=e.target.value.toUpperCase();
    //console.log(term)
    posts=document.querySelectorAll(".post");
    posts.forEach((post) => {
        const title=post.querySelector(".post-title").innerText.toUpperCase();
        const body=post.querySelector(".post-body").innerText.toUpperCase();
        //fliter
        //indexOf 같은 문자열 index번호, 없으면 -1
        if(title.indexOf(term)>-1 || body.indexOf(term)>-1){
            post.style.display="flex";
        }else{
            post.style.display="none";
        }
    })

}

//filter 값을 넣으면 받아오기
filter.addEventListener('input',filterPosts)
//addEvent 자체 핸들러가 가지고 있는 인자를 넘기는게 자동으로 되서(e) 안붙여도됨