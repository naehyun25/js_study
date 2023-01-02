/* tab-wrapper 버튼과 패널의 부모 
tab-menu버튼그룹 >a 요소
tab-content 패널그룹 >div요소
*/
var tabWrapper = $(".tab-wrapper");
tabWrapper.each(function () {
  var currentEl = $(this);
  console.log(currentEl)
  var menus = currentEl.find(".tab-menu a");
  var panels = currentEl.find(".tab-content>div");

  menus.click(function (e) {
    e.preventDefault();
    let tg = $(this); //this 이벤트가 발생한 요소
    let currentLink = tg.attr("href");
    menus.removeClass("active");
    tg.addClass("active");
    panels.hide();
    $(currentLink).show();
  });
});

tabWrapper.each(function () {
menus.eq(0).addClass('active')
panels.eq(0).show();
})

