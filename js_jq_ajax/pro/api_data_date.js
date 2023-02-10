//날짜생성
let date = new Date();
let year = String(date.getFullYear());
let month = String(date.getMonth()+1).padStart(2,"0");
let day = String(date.getDate()).padStart(2,"0");
let now = year+month+day;