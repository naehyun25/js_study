// forEach: 배열의 요소를 콜백함수를 활용하여 반복순환
const arr=[273,55,5798,15611,565,66]
arr.forEach(function(value,index,array){
  console.log(value)
  console.log(index)
  console.log(array)
})
// for of = value 만 반환한다
// for in= index만 반환한다.
//for Each => value, index, array 를 반환한다.


// filter: 원하는 값만 골라보기 // 값으로만 반환이아니라 새로운 배열로 만들어준다.=>그릇이필요함
let words =['스폰지밥','뚱이','다람이'];//mdn참고 콜백나오면 함수가 들어가야된다고보면됨
const result=words.filter(function(element,index,array){
  return element.length>=3;
})
//alert(result)

//map:배열을 새 값과 연결해서 새 배열로 저장한다.
words = words.map(function(value,index){
  return value+"💥💤💨"
})
document.write(`${words}<br>`)
document.write(words[0])
document.write(words[1])
document.write(words[2])

//.filter를 사용하여 arr배열에서 짝수만 출력해보세요.
let en = arr.filter(function(element){
  return element%2==0;
})
document.write(en)  // 이거 안쓰면 결과값이 안나오지 멍청아

