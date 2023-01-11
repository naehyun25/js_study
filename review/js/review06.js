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