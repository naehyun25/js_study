// let age=prompt('나이는','');

// if(age>=14&&age<=90){
//     alert('14세 이상 90세 이하시군요')
// }

// if(!(age>=14&&age<=90)){};

// if(age>=14||age<=90);


// if(username=='admin'){
//     let psw=prompt('패스워드는?','');
//     if(psw=='themaster'){
//         message='welcome'
//     }else if(psw==''||psw==null){
//         message='wrongpassword'
//     }else(message='canceled')
// }else if(username==''||username==null){
//     message='canceled'
// }else(message='bye')
// alert(message)

let i=0;
while(i<3){
    document.write(i)
    i++;
}

let a=0;
while(a){
    document.write(a)
    a--;
}

let b=0;
do{
    document.write(`<br>${b}`);
    b++;
}while(b<3);

for(let c =0; c<3; c++){
    document.write(`<br>${c}`)
}

for(let d=2; d<=10;d++){
    if(d%2==0){document.write(`<br>짝수${d}`)}
}
let e=0
while(e<3){
    document.write(`<br>number${e}!`)
    e++;
}

let hundred;
do{
    hundred=prompt('큰 숫자를 입력하세요');
}while(hundred<100);
