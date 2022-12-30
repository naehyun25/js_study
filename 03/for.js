
    document.addEventListener("DOMContentLoaded",function(){
     
     const menu1=document.querySeletorAll(".menu1 li")
     console.log(menu1[0]);
   
     for(let i=0; i<menu1.length; i++){
         menu1[i].style.color="blue"
       }
     //forEach:배열요소들을 반복실행하는 함수
     //전달 시 함수형태로 전달받음
     const menu2=document.querySelectorAll(".menu2 li")
     menu2.forEach(function (a){})//이름없는 함수도 있다. -> 이름없는 함수는 
     a.style.color="blue"
     console.log(a); 
 
     //const menu2=document.querySeletorAll()
     //const menu3=document.querySeletorAll()
     //const menu4=document.querySeletorAll()
     });
 
 
 
