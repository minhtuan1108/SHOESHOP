

function close_OrderDetail()
{
    document.getElementById("modal").style.display = "none";
}

function showOrderDetail(x)
{
    lsBill= JSON.parse(localStorage.getItem('listBill'));
    lsBillDetail = JSON.parse(localStorage.getItem('listBillDetail'));
    lsProduct = JSON.parse(localStorage.getItem("listProduct"));
    lsCustomer = JSON.parse(localStorage.getItem('listCustomer'));
    
    let str1 = ''
    for(let i = 0; i < lsCustomer.length; i++)
    {
        if(lsBill[x].idKH == lsCustomer[i].id)
            str1 =  '<ul id="ClientInfor-Order">'+
                        '<li class="ClientInfor ClientInfor-Name list_style">   <p>User name: ' + lsCustomer[i].name + '</p></li>'+
                        '<li class="ClientInfor ClientInfor-Phone list_style">  <p>Phone number  : ' + lsCustomer[i].phoneNumber + '</p></li>'+
                        '<li class="ClientInfor ClientInfor-Address list_style"><p>Address :       ' + lsCustomer[i].address + '</p></li>'+
                    '</ul>';
    }

    let str2 =  '   <tr>\n '+
                '   <td class="table_pd_first_column text_center">Product Name</td>\n' +
                '   <td class="table_pd_second_column text_center">Image</td>\n' +
                '   <td class="table_pd_third_column text_center">Brand</td>\n' +
                '   <td class="table_pd_fouth_column text_center">Size</td>\n' +
                '   <td class="table_pd_fifth_columnn text_center">Quantity</td>\n' +
                '   <td class="table_pd_sixth_column text_center">Price</td>\n' +
                '   <td class="table_pd_seventh_column text_center">Total</td>\n' +
                '   <td class="table_pd_eight_column text_center">Type</td>\n' +
                '   </tr>'
    for (let i = 0; i < lsBillDetail.length; i++) 
        if(lsBillDetail[i].idBill == lsBill[x].id)
            for (let j = 0; j < lsProduct.length; j++) 
                if(lsBillDetail[i].idProduct == lsProduct[j].id)
                    str2 +=  '<tr><td class="text_center" style="width: 20%">' + lsProduct[j].name + '</td>' +
                            '<td class="text_center"><img class="size_img" src="'+lsProduct[j].image +'" alt=""></td>' +
                            '<td class="text_center">' + lsProduct[j].brand + '</td>' +
                            '<td class="text_center">' + lsBillDetail[i].idSize + '</td>' +
                            '<td class="text_center">' + lsBillDetail[i].quantity + '</td>' +
                            '<td class="text_center">' + lsProduct[j].price + '</td>' +
                            '<td class="text_center">' + lsProduct[j].price*lsBillDetail[i].quantity + '</td>' +
                            '<td class="text_center">' + lsProduct[j].type + '</td></tr>'
    document.getElementById('modal').style.display = "flex";
    document.getElementById('ClientInforArea').innerHTML = str1; 
    document.getElementById('DetailOrderArea').innerHTML = str2; 
}

function checkDate()
{
    let start = document.getElementById('dateStartInput').value;
    let end = document.getElementById('dateEndInput').value;
    if(start != '' && end != '' && start > end)
    {
        alert('Date error');
        return 0;
    }
    return 1;
}

function displaylsBillDetail(i)
{
    let str =  '<tr><td class="text_center">' + lsBill[i].id + '</td>' +
                    '<td class="text_center">' + lsBill[i].idKH + '</td>' +
                    '<td class="text_center">' + lsBill[i].date + '</td>' +
                    '<td class="text_center"><button class="btn" onclick="showOrderDetail('+i+')";>See detail</button></td>' +
                    '<td class="text_center">' + lsBill[i].total + '</td>' +
                    '<td class="text_center" id="message'+i+'"> ' + lsBill[i].status  +
                    '</td>'+
                    '<td class="text_center"><div id="toggle-btn"><label class="switch">'+
                    '   <input type="checkbox" id="checkbox'+i+'" onclick="check('+i+')";>'+
                    '   <span class="slider round"></span>'+
                    '</label></div></td>'
                    '</tr>'
    return str;
}

function displayAllOrder() {
    lsBill= JSON.parse(localStorage.getItem('listBill'));
    
    let str =   '   <tr>\n '+
                '   <td class="table_pd_first_column text_center">Order ID</td>\n' +
                '   <td class="table_pd_second_column text_center">Client ID</td>\n' +
                '   <td class="table_pd_third_column text_center">Date created</td>\n' +
                '   <td class="table_pd_seventh_column text_center">Detail</td>\n' +
                '   <td class="table_pd_fouth_column text_center">Total bill</td>\n' +
                '   <td class="table_pd_fifth_column text_center">Status</td>\n' +
                '   <td class="table_pd_sixth_column text_center">Confirm</td>\n' +
                '   </tr>';
        if(checkDate()){
            let start = document.getElementById('dateStartInput').value;
            let end = document.getElementById('dateEndInput').value;
                var count = str.length;
                if(start == '' && end == '')
                    for (let i = 0; i < lsBill.length; i++) {
                        str +=  displaylsBillDetail(i);
                    }              
                else if(start == '' && end != ''){
                    for (let i = 0; i < lsBill.length; i++) 
                        if(lsBill[i].date < end)
                            str +=  displaylsBillDetail(i);      
                        }
                else if(start != '' && end == ''){
                    for (let i = 0; i < lsBill.length; i++) 
                        if(lsBill[i].date > start)
                            str +=  displaylsBillDetail(i);
                        }
                else{
                    for (let i = 0; i < lsBill.length; i++) 
                        if(lsBill[i].date > start && lsBill[i].date < end)
                            str +=  displaylsBillDetail(i);    
                        }
                
                if(str.length == count){    
                    str =  '<tr><td>No orders</td></tr>'
                }
            }     
            document.getElementById('displayListOrder').innerHTML = str; 
    }
function check(i) {
    lsBill= JSON.parse(localStorage.getItem('listBill'));
    if(document.getElementById('checkbox'+i+'').checked)
    {
        lsBill[i].status = 'Delivered';
        document.getElementById('message'+i+'').textContent = lsBill[i].status;
    }
    else
    {
        lsBill[i].status = 'Not delivery';
        document.getElementById('message'+i+'').textContent = lsBill[i].status;
    }
    localStorage.setItem('listBill',JSON.stringify(lsBill));
  }


function displayDH() {   
    document.getElementById('DSSP').style.display = "none";   
    document.getElementById('SSP').style.display = "none";
    document.getElementById('DH').style.display = "block";
    document.getElementById('ND').style.display = "none";
    document.getElementById('TK').style.display = "none";
}