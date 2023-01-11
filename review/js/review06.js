var cat =new Object();
cat = {name:"나초", feature:"코숏",
eat: function(food){document.write(`${cat.name}는 ${food}를 좋아해요`)}
};
cat.eat("닭가슴살")


//add();
function add(a,b){
    let c;
    c=a+b;
    document.write(a+b)
}

add(1,2);
add("가","나")

// const hi=function(){
//     return('안녕하세요')
// }
// alert(hi);

// //arrow function
//  const hi1=() => {
//     return('안녕하세요')
//  }
//  alert(hi1);

//  //실행문이 한줄일경우 리턴과 중괄호 삭제 가능
//  const hi2 = () => '안녕하세요';
//  alert(hi2)

 //콜백함수
 const test=function(arr,callback){
    for(const e of arr)
    callback(e)
 }

 const general = function(z){
    document.write(`<br>${z}번`)
 }
let arr = ["안녕하세요"]
 test(arr,general)

 const str = [1,579,82,15,7564,2]
 str.forEach(function(a,b,c){
    console.log(a,b,c)})
//a:값 / b:인덱스번호 /c :배열전체
const result2 = str.filter(function(a){
    return a%2==0;
})
console.log(result2)