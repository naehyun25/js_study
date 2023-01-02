//while로 구구단 5단만들기
var j=1;
while(j<=9){
  document.write("5x"+j+"="+j*5+"<br>");
  j++;
}

//do while 1부터 10까지의 합

let x=0;
let total=0;
do{
  x++;
  total=total+x;
  document.write(x)
  document.write(total)
 // if(x!=10) document.write("+")
}while(x<10);
document.write(total)
document.write("="+total)