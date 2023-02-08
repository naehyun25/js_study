const postContainer = document.querySelector('#posts-container'),
loading = document.querySelector('.loader'),
filter = document.querySelector('#filter');

let limit = 5; page = 1;

async function getPost(){
    const origin = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
    const data = await origin.json();
    return data;
}

showPosts();
async function showPosts(){
    const posts = await getPost();
    console.log(posts);
    posts.forEach((post) => {
        const posteach = document.createElement('div');
        posteach.classList.add('post');
        posteach.innerHTML=`
            <div class="number">${post.id}</div>
            <div class="post-info">
                <h2 class="post-title">${post.title}</h2>
                <p class="post-body">${post.body}</p>
            </div>
        `;
        postContainer.appendChild(posteach);
    })
}

filter.addEventListener('input',filterPosts);

function filterPosts(e){
    const term = e.target.value.toUpperCase();
    posts = document.querySelectorAll('.post');
    posts.forEach((post) => {
        const title = post.querySelector(".post-title").innerText.toUpperCase();
        const body = post.querySelector(".post-body").innerText.toUpperCase();
        if(title.indexOf(term)>-1||body.indexOf(term)>-1){
            post.style.display="flex";
        }else{post.style.display="none";}
    }) 
}

window.addEventListener("scroll",function(){
    // const obj = document.documentElement
    // const a = {
    //     scrollTop:obj.scrollTop,
    //     scrollHeight:obj.scrollHeight,
    //     clientHeight:obj.clientHeight,
    // }
    const {scrollTop,scrollHeight,clientHeight}=document.documentElement;
    console.log(scrollTop,scrollHeight,clientHeight);
    
    if(scrollTop+clientHeight>=scrollHeight){
        showLoading();
    }
})


function showLoading(){
    loading.classList.add("show");
    setTimeout(function(){
        loading.classList.remove("show");
        setTimeout(function(){
            page++;
            showPosts();
        },300);
    },1000);
}