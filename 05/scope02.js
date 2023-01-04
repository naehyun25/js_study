
//let sum=1;
function add(){
  let sum=10+20; //지역변수 sum
  multi=10*20; //앞에 키워드 let, const안쓰고 식별자만 쓰면 전역변수가 된다.
  total=sum;//30
  return sum
}
add();
console.log(sum)