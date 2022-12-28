//if else if
const date=new Date();
const hour=date.getHours();
if(hour<11){
  alert("아침먹자 배고파");
}else if(hour<15){
  alert("점심먹자 뭐먹지")
}else{
  alert("저녁먹자")
}
