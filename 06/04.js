// let list1=document.querySelectorAll("#list1>li");
// console.log(list1)
// //list 로 반환되면 무조건 포문  : 노드리스트를 까면 forEach 도 들어있다
// list1.forEach(function(el,idx){
//   //console.log(el,idx)
//   el.textContent=("aaa"+idx)//괄호 안써도됨
//   el.classList.add("a"+idx)
// })

//<-----------1/10-------------------->//

// let list2=document.querySelector(".theObj")
// //innerHTML //Math.random(난수생성기)
// list2.innerHTML="<span>"+Math.random()+"</span>"
// //원래내용없어지고 덧씌워짐
// list2.setAttribute("data-role","acceessbillity")
// //a태그의 target 속성 변경을 일괄처리할 수도 있음
// //속성,속성값 입력 ->속성 및 속성값을 변경해주는게 가능함
// let list22 = list2. getAttribute("class")
// console.log(list22);
// document.querySelector(".theObj").nextElementSibling.innerHTML="<span>"+list22+"</span>"
// //answer//
// //list2.nextElementsSibling.textcontent=list22;

// let list3=document.querySelector("#list3");
// // list3.innerHTML="<li>추가한list6</li>"
// //=> 홀랑 없어지고 위에것만 남음 
// //=은 값의 재할당 // a=a+1 이런식으로 돼야한다.  a+1
// list3.innerHTML+="<li>추가한list6</li>"

// //추가하고싶은인자위치, 넣고싶은내용
// //afterbegin -> (내부에서)가장첫번째로추가시킴
// list3.insertAdjacentHTML('afterbegin','<li>추가한list</li>')
// //beforeend ->(내부에서)가장막내로 추가시킴
// list3.insertAdjacentHTML('beforeend','<li>얍!!추가한list</li>')
// //바로앞에 beforebegin
// list3.insertAdjacentHTML('beforebegin','<div>beforebegin!!추가한div</div>')
// //바로뒤에 afterend
// list3.insertAdjacentHTML('afterend','<div>afterend!!추가한div</div>')

// let list3Li=document.querySelectorAll("#list3>li")
// list3Li[4].insertAdjacentHTML('beforebegin','<li>🙄뿅</li>')





//제이쿼리도 $(()=>{})로 표현할 수 있음
$(function(){
let list1=$("#list1>li");
//console.log(list1)
list1.each(function(idx,el){
  //console.log(idx,el)//제이쿼리는 인덱스번호가 앞에 나온다. 항상 찍어볼것 - 그래서변수명바꿔줌안헷갈리게
  $(el).addClass("a"+idx)//el을 달러에 담아주는거-객체화시키는거!! 까먹지말고 
  $(el).text("a"+idx)
//제이쿼리는 한 대상에 여러 함수를 붙일 수가 있음. <-> js는 덮어쓰기가 되니까 1개씩
 //$(el).addClass("a"+idx).text("a"+idx) : 이렇게 줄일 수 있음.
 // el.textContent=("aaa"+idx)
 // el.classList.add("a"+idx)
  });
 //<-----------1/10-------------------->//
 let list2=$(".theObj");
 list2.html("<span>"+Math.random()+"</span>")
 list2.attr("data-role","acceessbillity")/* setAttribute */
//인자한개는 가져와()
//한개 안에 속성을 쓰면 그 속성을 가져옴("")
//두개쓰면 교체("","")
list2.attr("class","abcd");
 let list22 = list2.attr("class")//getAttribute
 $(list2).next().html(list22);
list2.html("<span>"+list22+"</span>") //마우스올리면 이걸로 바꾸고 빠져나가면 따른걸로 바꾸고하는 식으로 쓸 수 있음
 //getAttribute=attr

 let list3=$("#list3");
  list3.append("<li>추가한list6</li>")//afterbegin
  list3.prepend("<li>추가한list6</li>")//beforebeend
//< 제이쿼리는 이것밖에 없다.. 나머지는 선택해서 추가
let list33 = $("#list3 li")
list33.eq(4).before("<li>용추가한list6</li>")
list33.eq(4).after("<li>용용추가한list6</li>")
// list3.insertAdjacentHTML('afterend','<div>afterend!!추가한div</div>')

// let list3Li=document.querySelectorAll("#list3>li")
// list3Li[4].insertAdjacentHTML('beforebegin','<li>🙄뿅</li>')



 // 객체안의 변수-> 속성은=, 함수->메서드는() 
 //=>모르겠으면 콘솔에 객체화시켜서 찍어보면 안에 나옴.. 
 //=> f는 함수, 아닌건 변수속성

});