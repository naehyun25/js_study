let lis=document.querySelectorAll('li')

lis.forEach( (i,t) => {
    document.write(lis[t].textContent)
})
document.write('<br>'+lis.length)

document.body.myData={
    name : "nae",
    title : "mong"
};
console.log(document.body.myData.title)
document.body.sayTagName=function(){
    console.log(this.tagName)
};
document.body.sayTagName();

Element.prototype.sayHi=function(){
    document.write(`hello, im${this.tagName}`)
}
document.documentElement.sayHi();
document.body.sayHi();

document.write(elem.getAttribute('title'))
elem.setAttribute('text','123')

console.log(elem.outerHTML)
for(let attr of elem.attributes)
document.write(`<br>${attr.name}=${attr.value}`)

let user = {
    name:'what',
    age:25
}

for(let div of document.querySelectorAll('[show-info]')){let field = div.getAttribute('show-info');
div.innerHTML-user[field];}

let div = document.createElement('div');
let textNode = document.createTextNode('hi');
div.className='alert';
div.innerHTML='<b>안녕하세요</b>'
lis[0].insertAdjacentHTML('beforebegin',div)