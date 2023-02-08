/* Javascript Sample*/
var xhr = new XMLHttpRequest();
var url = 'http://api.kcisa.kr/API_CNV_053/request'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + '6c65f8a2-c3bc-466f-a86d-b83929134f47'; /*서비스키*/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /*세션당 요청레코드수*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /*페이지수*/
queryParams += '&' + encodeURIComponent('keyword') + '=' + encodeURIComponent(''); /*검색어*/

xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
if (this.readyState == 4) {

console.log('status: ' + this.status);
console.log('resultCode: ' + $(this.responseText).find('resultCode').text());
console.log('resultMsg: ' + $(this.responseText).find('resultMsg').text());

var item = $(this.responseText).find('item');
console.log("items",item);
 var tb = $("<table/>");
 $(item).each(function(){

     var title = ($(this).find("title").text());
     console.log(title)
     var description = ($(this).find("description").text());
     var viewCount = ($(this).find("viewCount").text());
     var url = ($(this).find("url").text());
     var imageObject = ($(this).find("imageObject").text());
     var localId = ($(this).find("localId").text());
     var sourceTitle = ($(this).find("sourceTitle").text());
     var eventSite = ($(this).find("eventSite").text());
     var type = ($(this).find("type").text());
     var contactPoint = ($(this).find("contactPoint").text());
     var charge = ($(this).find("charge").text());
     var audience = ($(this).find("audience").text());
     var period = ($(this).find("period").text());

     var img = $('<img>').attr('src',"imageObject");
     console.log(imageObject)

     var row = $('<tr/>').append(
         $('<td/>').text(title),
         $('<td/>').text(description),
         $('<td/>').text(viewCount),
         $('<td/>').text(url),
         $('<td/>').append(img),
         $('<td/>').text(localId),
         $('<td/>').text(sourceTitle),
         $('<td/>').text(eventSite),
         $('<td/>').text(type),
         $('<td/>').text(contactPoint),
         $('<td/>').text(charge),
         $('<td/>').text(audience),
         $('<td/>').text(period),
     )
     tb.append(row);
 });
 $('.wrap').append(tb);


};
}
xhr.send('');

