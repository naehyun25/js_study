const color=['beige','coral','red','blue','green','purple','black',]
color.push("brown")
let i=0;


function colorBg(){
 
  let bodyTag=document.getElementsByTagName('body')[0]; // body태그는 1개뿐이지만 해당 함수는 무조건 배열로 값을 전달 받을 수 있기때문에 베열을 꼭 써줘야함 없어도
  bodyTag.style.backgroundColor=color[i]
  console.log(i);
  i++;
  if(i>color.length){i=0;}
}