//1~10까지 수에서 짝수끼리 더해서 출력하세요.
var k=1;
var n=10;
var sum=0;
for(k=1; k<=n; k++){
  if(k%2===1) continue //실행할 조건이 1줄일 경우 중괄호를 안쓰기도한다. 
  //continue= 참이(홀수)면 그냥 통과!

console.log(k)//2,4,6,8,10
sum=sum+k;// == sum+=k;
console.log("<hr>"+sum);
}