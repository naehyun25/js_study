/* Javascript Sample*/
var xhr = new XMLHttpRequest();
var url = 'http://api.kcisa.kr/API_CNV_053/request'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + '6c65f8a2-c3bc-466f-a86d-b83929134f47'; /*서비스키*/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /*세션당 요청레코드수*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /*페이지수*/
queryParams += '&' + encodeURIComponent('keyword') + '=' + encodeURIComponent('공연'); /*검색어*/

xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
if (this.readyState == 4) {

console.log('status: ' + this.status);
console.log('resultCode: ' + $(this.responseText).find('resultCode').text());
console.log('resultMsg: ' + $(this.responseText).find('resultMsg').text());

var item = $(this.responseText).find('item');


$(item).each(function(){

console.log("title" + $(this).find("title").text());
console.log("description" + $(this).find("description").text());
console.log("viewCount" + $(this).find("viewCount").text());
console.log("url" + $(this).find("url").text());
console.log("imageObject" + $(this).find("imageObject").text());
console.log("localId" + $(this).find("localId").text());
console.log("sourceTitle" + $(this).find("sourceTitle").text());
console.log("eventSite" + $(this).find("eventSite").text());
console.log("type" + $(this).find("type").text());
console.log("contactPoint" + $(this).find("contactPoint").text());
console.log("charge" + $(this).find("charge").text());
console.log("audience" + $(this).find("audience").text());
console.log("period" + $(this).find("period").text());

});

};

}
xhr.send('');