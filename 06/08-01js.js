const section=document.querySelector("section");
let progressBar=document.querySelector(".bar");
let text=document.querySelector(".txt");

const windowHeight=window.innerHeight;
let scrollTop;

window.addEventListener('scroll',function(){
  scrollTop = window.scrollY
  let scrollHeight = section.clientHeight;
  let scrollRealHeight=scrollHeight-windowHeight;
  let scrollPercent =(scrollTop/scrollRealHeight)*100;
  let scrollAmount = Math.floor(scrollPercent);
  console.log(scrollAmount); 
  text.textContent=(scrollAmount+"%")
  //progressBar.style.width=(scrollAmount+"%")
  progressBar.style.height=(scrollAmount+"%")
})