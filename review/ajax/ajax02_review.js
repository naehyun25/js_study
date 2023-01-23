// addEventListener('DOMContentLoaded',()=>{
// const request = new XMLHttpRequest();
// const url = "ajax02_review.json"

// request.onreadystatechange=function(){
//     if(request.readyState==4 && request.status==200){
//         jsonfunc(this.responseText)
//     }
// }

// request.open("GET",url);
// request.send();

// function jsonfunc(responseText){
//     console.log(responseText)
//     let id = new Array();
//     let firstname = new Array();
//     let lastname = new Array();
//     let email = new Array();

//     let jsonTxt=JSON.parse(responseText)
//     console.log(jsonTxt)

//     let wrap = document.querySelector(".wrap")
//     let table = document.createElement("table")

//     for(i=0; i<jsonTxt.length; i++, a++){
//     id[i]=jsonTxt[i].id;
//     firstname[i]=jsonTxt[i].first_name;
//     console.log(firstname)
//     lastname[i]=jsonTxt[i].last_name;
//     email[i]=jsonTxt[i].email;

//     let tr=document.createElement('tr');
//     let td1 = document.createElement('td');
//     td1.appendChild(document.createTextNode(id[i]+''))
//     let td2 = document.createElement('td');
//     td2.appendChild(document.createTextNode(firstname[i]+''))
//     let td3 = document.createElement('td');
//     td3.appendChild(document.createTextNode(lastname[i]+''))
//     let td4 = document.createElement('td');
//     td4.appendChild(document.createTextNode(email[i]+''))
    
//     tr.appendChild(td1)
//     tr.appendChild(td2)
//     tr.appendChild(td3)
//     tr.appendChild(td4)

//     table.appendChild(tr)

// }
// wrap.appendChild(table)
// }
// })

$(function(){
    $.ajax({
        url : 'ajax02_review.json',
        dataType : 'json',
        success : function(data){
            console.log(data)
            if(data.length>0){
                var table = $('<table/>')
                for(var i in data){
                    var $id = data[i].id;
                    var $firstname = data[i].first_name;
                    var $lastname = data[i].last_name;
                    var $email = data[i].email;
                    var row = $('<tr/>').append(
                        $('<td/>').text($id),
                        $('<td/>').text($firstname),
                        $('<td/>').text($lastname),
                        $('<td/>').text($email)
                    )
                    table.append(row)
                }
                $('.wrap').append(table)
            }
        }
    })

})