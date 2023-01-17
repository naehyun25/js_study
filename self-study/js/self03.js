$( function() {
    $( "#departure" ).datepicker({
        dateFormat: "yy-mm-dd",
        changeMonth:true,
        showOn: "both",
        buttonImage: "https://cdn-icons-png.flaticon.com/512/71/71403.png",
        monthNames:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월',],
        monthNamesShort :['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월',],
        showAnim : 'bounce'
    });
    var random=['인천','도쿄','김포']  
    $('#airport').autocomplete({
        source:random,
        autoFocus: true,
        disabled: true
      })
    $('#meal').selectmenu({width:400, })
    $('#bags').css('display','block').buttonset();
    $('#next').button({
        icons:{first:'ui-icon-circle-arrow-e'}
        //icon: "ui-icon-caret-1-e",
        //iconPosition: "end"
      })
    $('#telme').dialog({
        autoOpen:false,
        width:500,
        draggable: true,
        modal: true,
        show: { effect: "blind", duration: 800 }
      })
    $('#telmeLink').click(function(e){
        e.preventDefault(),
        $('#telme').dialog('open',$('p[title]').tooltip({content:'wow'}))
      })

  } );