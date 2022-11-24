var data = window.localStorage;

var lsProduct = [];
var lsSize = [];
var lsProductDetail = [];
var lsCart = [];
var lsCartDetail = [];
var lsBill = [];
var lsCustomer = [];
var lsMember = [];
var lsBillDetail = [];
var lsPosition = [];
var lsAccount = [];
var activeAccount = null;

data.setItem("listProduct",JSON.stringify(lsProduct));
data.setItem("listSize", JSON.stringify(lsSize));
data.setItem("listProductDetail", JSON.stringify(lsProductDetail));
data.setItem("listBill", JSON.stringify(lsBill));
data.setItem("listCartDetail", JSON.stringify(lsCartDetail));
data.setItem("listCustomer", JSON.stringify(lsCustomer));
data.setItem("listMember", JSON.stringify(lsMember));
data.setItem("listBillDetail",JSON.stringify(lsBillDetail));
data.setItem("listPosition", JSON.stringify(lsPosition));
data.setItem("listAccount", JSON.stringify(lsAccount));
data.setItem("listCart", JSON.stringify(lsCart));
data.setItem("activeAccount", JSON.stringify(activeAccount));


//Hàm ngưng động thời gian:)))
function wait(s){
    var d = new Date().getSeconds();
    var d1;
    do{
        d1 = new Date().getSeconds();
    }while(d1 - d < s);
}

// Hàm này để tạo ID 6kys tự gồm chữ và số ngẫu nhiên
function randonID(){
    var character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefjhijklmnopqrstuvwxyz0123456789';
    var id = '';
    for(i = 0; i < 6; i++){
        id += character[Math.floor(Math.random() * 62)];
    }

    return id;
}

// Hàm này để tại ID không trùng lặp
function createGeneralID(list){
    var id = randonID();
    var i = 0;
    console.log(list.length);
    while(i < list.length){
        if(id == list[i].id){
            i = 0;
            id = randonID();
            wait(5);
        }else{
            i++;
        }
    }

    return id;
}

//Hàm đọc ảnh từ file chooser
function chooseFile(fileInput){
    var sourceAvt ='';
    if(fileInput.files && fileInput.files[0]){
        var reader = new FileReader;
        reader.onload = function(e){
            sourceAvt = e.target.result;
            setAvatarSourceCustomer(sourceAvt);
            loadAvatar();
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

function setAvatarSourceCustomer(sourceAvatar){
    activeAccount.avatar = sourceAvatar;
    lsCustomer = JSON.parse(data.getItem("listCustomer"));

    for(let i = 0; i < lsCustomer.length; i++){
        if(lsCustomer[i].id == activeAccount.id){
            lsCustomer[i].avatar = sourceAvatar;
        }
    }

    data.setItem("activeAccount", JSON.stringify(activeAccount));
    data.setItem("listCustomer", JSON.stringify(lsCustomer));
}

//Hàm chuyển dạng số thành dạng tiền
function formatNumberToMoney(number){
    var money = number.toString().split('');
    var count = 0;
    for(let i = (money.length - 1); i > 0 ; i--){
        count++;
        if(count == 3){
            money.splice(i, 0, ',');
            count = 0;
        }
    }
    return money.join('');
}