// let list1=document.querySelectorAll("#list1>li");
// list1.forEach(function(el,idx){
//     el.textContent=("<span>안녕</span>"+idx)
//     el.classList.add("a"+idx)
// })

// let list2=document.querySelector(".theObj")
// list2.innerHTML="<soan>"+Math.random()+"</span>"

// list2.setAttribute("title","title이다")
// let list3=list2.getAttribute("title")
// list3=document.querySelector("#list3")
// list3.innerHTML+="<li>추가한애</li>"
// list3.innerHTML="<li>추가한애2</li>"
// list3.insertAdjacentHTML('afterbegin','<li>다시</li>')
// list3.insertAdjacentHTML('beforebegin','<li>다시2</li>')
// list3.insertAdjacentHTML('beforeend','<li>다시3</li>')
// list3.insertAdjacentHTML('afterend','<li>다시4</li>')

$(function(){
let list1 = $('#list1')
list1.find('li').text("야호")
let list2 = $('.theObj')
console.log(list2)
let a =list2.attr('title')
})