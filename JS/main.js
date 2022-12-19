var data = window.localStorage;
if(data.getItem('listProduct') == null){
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
    var listStatistic = [];
    var tempSizeList = [];

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
    data.setItem("listSize", JSON.stringify(lsSize));
    data.setItem("tempList", JSON.stringify(tempSizeList));
    console.log("Có vào đây hoq");
    createData();
}


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

function LogOut()
{
    activeAccount = null
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

//Lấy những sản phẩm trong cart của tài khoản đang onl
function getProductInCurrentCart(){
    var idCart = getCartIdByActiveAccount();
    lsCartDetail = JSON.parse(data.getItem("listCartDetail"));
    var productInCart = [];
    for(let i = 0; i < lsCartDetail.length ; i++){
        if(idCart == lsCartDetail[i].idCart){
            productInCart = productInCart.concat(lsCartDetail[i]);
        }
    }
    return productInCart;
}

function getCartIdByActiveAccount(){
    lsCart = JSON.parse(data.getItem("listCart"));

    if(lsCart.length == 0 || activeAccount == null) return null;

    for(let i = 0; i < lsCart.length; i++){
        if(lsCart[i].idAccount == activeAccount.idAcc){
            return lsCart[i].id;
        }
    }
}



function createData(){
    //Create size data
    lsSize = JSON.parse(data.getItem("listSize"));
    for(i = 0; i < 8; i++){
        lsSize = lsSize.concat(new size(`S${i+38}` , (38 + i)));
        lsSize = lsSize.concat(new size(`S${i + parseFloat(38.5)}` , (parseFloat(38.5) + i)));
    }

    data.setItem("listSize", JSON.stringify(lsSize));




    //Create product data
    lsProduct = JSON.parse(data.getItem("listProduct"));
    lsProductDetail = JSON.parse(data.getItem("listProductDetail"));
    var id = createGeneralID(lsProduct);
    //Tạo một đối tượng sản phẩm theo hàm khởi tạo (xem bên file product.js)
    var pr1 = new product(id, "Asics Gel Tatic - Đen Trắng Xanh", 2599000, true, 0, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, SpEVA, cổ thấp, ôm chân thoải mái. Bật nhảy êm, thích hợp chơi sân indoor.", "./assets/img/product/Asics/1/", "Asics");
    lsProduct = lsProduct.concat(pr1);              
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr2 = new product(id, "Asics Sky Elite 2 - Trắng Đen 2022", 3699000, false, 15, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, SpEVA, RUBBER ,AHARPLUS, cực ôm chân thoải mái. Bật nhảy êm, nhẹ, cực êm, thích hợp chơi sân indoor.","./assets/img/product/Asics/2/","Asics");
    lsProduct = lsProduct.concat(pr2);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S45', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr3 = new product(id, "Asics GeL NETBURNER BALLISTIC FF 3 - Xanh Rêu 2022", 3499000, true, 15, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, SpEVA, cổ thấp, cực ôm chân thoải mái. Bật nhảy êm, nhẹ, cực êm, thích hợp chơi sân indoor, xi măng.","./assets/img/product/Asics/3/","Asics");
    lsProduct = lsProduct.concat(pr3);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S45', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr4 = new product(id, "Asics GeL Hoop V14", 2650000, false, 15, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, SpEVA, cực ôm chân thoải mái. Bật nhảy êm, nhẹ, cực êm, thích hợp chơi sân indoor.","./assets/img/product/Asics/4/","Asics");
    lsProduct = lsProduct.concat(pr4);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S45', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr5 = new product(id, "Asics Gel Tatic Hồng", 2499000, true, 15, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, SpEVA, cực ôm chân thoải mái. Bật nhảy êm, nhẹ, cực êm, thích hợp chơi sân indoor.","./assets/img/product/Asics/5/","Asics");
    lsProduct = lsProduct.concat(pr5);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr6 = new product(id, "Asics Nữ GeL Rocket 10 - Trắng Xanh Dương", 1699000, false, 15, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, SpEVA, cổ thấp, cực ôm chân thoải mái. Bật nhảy êm, nhẹ, cực êm, thích hợp chơi sân indoor.","./assets/img/product/Asics/6/","Asics");
    lsProduct = lsProduct.concat(pr6);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr7 = new product(id, "Asics Rocket 10", 1599000, true, 15, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, SpEVA, cổ thấp, cực ôm chân thoải mái. Bật nhảy êm, nhẹ, cực êm, thích hợp chơi sân indoor.","./assets/img/product/Asics/7/","Asics");
    lsProduct = lsProduct.concat(pr7);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr8 = new product(id, "Asic Gel Court  Hunter 2 - Xanh Viền Đen", 1999000, false, 0, "Mesh, da tổng hợp, lưỡi gà rời. NC Rupper, công nghệ Gel. Bật nhảy êm, di chuyện đa hướng, thoáng khí, thích hợp chơi tennis, bóng chuyền .","./assets/img/product/Asics/8/","Asics");
    lsProduct = lsProduct.concat(pr8);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S45', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr9 = new product(id, "Asics V-Swift FF MT 3 - Đỏ Trắng", 3399000, true, 12, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, SpEVA. Cực ôm chân thoải mái. Bật nhảy êm, nhẹ, cực êm, form ôm thoải mái","./assets/img/product/Asics/9/","Asics");
    lsProduct = lsProduct.concat(pr9);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S45', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr10 = new product(id, "Asics Rocket 10 Xanh Ya 2022 ", 1699000, false, 20, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, SpEVA, RUBBER ,AHARPLUS, cực ôm chân thoải mái. Bật nhảy êm, nhẹ, cực êm, thích hợp chơi sân indoor.","./assets/img/product/Asics/10/","Asics");
    lsProduct = lsProduct.concat(pr10);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S36', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S36.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr11 = new product(id, "Asics V-Swift FF MT 3 - Đen Cam", 1699000, true, 1, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, SpEV, cổ thấp, ôm chân thoải mái Bật nhảy êm, nhẹ, cực êm, thích hợp chơi sân indoor","/assets/img/product/Asics/11/","Asics");
    lsProduct = lsProduct.concat(pr11);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr12 = new product(id, "Asics Upcourt 5 – Xanh", 1499000, true, 21, "Mesh, da tổng hợp, lưỡi gà rời. NC Rupper, EVA.  Bật nhảy êm, nhẹ, thoáng khí","/assets/img/product/Asics/12/","Asics");
    lsProduct = lsProduct.concat(pr12);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr13 = new product(id, "Asics Gel Rocket 10 - Xanh Đỏ 2022", 1699000, false, 3, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, SpEVA, RUBBER ,AHARPLUS, cực ôm chân thoải mái. Bật nhảy êm, nhẹ, cực êm, thích hợp chơi sân indoor.","./assets/img/product/Asics/13/","Asics");
    lsProduct = lsProduct.concat(pr13);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr14 = new product(id, "Asics Gel Rocket 10 - Xanh Gót Đỏ", 1699000, true, 4, "Mesh, da tổng hợp, lưỡi gà rời, Có Gel, SpEVA, cổ thấp, ôm chân thoải mái, Bật nhảy êm, nhẹ, cực êm, thích hợp chơi sân indoor", "./assets/img/product/Asics/14/","Asics");
    lsProduct = lsProduct.concat(pr14);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr15 = new product(id, "Asics Upcourt 5 - Trắng vàng Xanh", 1499000, false, 27, "Mesh, da tổng hợp, lưỡi gà rời. NC Rupper, EVA.  Bật nhảy êm, nhẹ, thoáng khí","/assets/img/product/Asics/15/","Asics");
    lsProduct = lsProduct.concat(pr15);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr16 = new product(id, "Asics GeL NETBURNER BALLISTIC FF MT 3 - Đen", 3499000, true, 15, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, SpEVA, RUBBER ,AHARPLUS, cực ôm chân thoải mái. Bật nhảy êm, nhẹ, cực êm, thích hợp chơi sân indoor.","./assets/img/product/Asics/16/","Asics");
    lsProduct = lsProduct.concat(pr16);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44.5', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr17 = new product(id, "Asics GeL Rocket 10 - Xanh Dương Trắng", 1699000, false, 28, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, cổ thấp, ôm chân thoải mái. Bật nhảy êm, nhẹ, cực êm, thích hợp chơi sân indoor.","./assets/img/product/Asics/17/","Asics");
    lsProduct = lsProduct.concat(pr17);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S45', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));


    id = createGeneralID(lsProduct);
    var pr18 = new product(id, "Asics Upcourt 4 - Trắng Cam", 1399000, true, 8, "Mesh, da tổng hợp, lưỡi gà rời. NC Rupper, EVA, cực ôm chân thoải mái. Bật nhảy êm, nhẹ, cực êm, thích hợp chơi sân indoor.","./assets/img/product/Asics/18/","Asics");
    lsProduct = lsProduct.concat(pr18);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr19 = new product(id, "Mizuno Wave Dimension Mid - Trắng Xanh", 2390000, false, 2, "Mesh, da tổng hợp, lưỡi gà rời. Khô thoáng. Trắng xanh, Cổ cao, ôm chân thoải mái","./assets/img/product/Mizuno/1/","Mizuno");
    lsProduct = lsProduct.concat(pr19);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S45', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S46', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr20 = new product(id, "Mizuno Lighting Z7 - Trắng Đen Vàng", 3600000, true, 7, "Mesh, da tổng hợp, lưỡi gà rời. Khô thoáng. Trắng Đen Vàng, 275gr,  Cổ cao, ôm chân thoải mái","./assets/img/product/Mizuno/2/","Mizuno");
    lsProduct = lsProduct.concat(pr20);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S45', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr21 = new product(id, "Mizuno Wave Momentum 2 Mid - Xanh Trắng", 3500000, false, 9, "Mesh, da tổng hợp, lưỡi gà rời. Khô thoáng. Xanh Trắng, đế nhẹ, cổ cao, ôm chân thoải mái","./assets/img/product/Mizuno/3/","Mizuno");
    lsProduct = lsProduct.concat(pr21);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S45', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr22 = new product(id, "Mizuno Lightning Z6 Mid - Xanh Trắng Đỏ", 3600000, true, 1, "Mesh, da tổng hợp, lưỡi gà rời. Khô thoáng. Xanh Trắng Đỏ, Cổ cao, ôm chân thoải mái, bật nhẹ, phù hợp nhiều loại sân","./assets/img/product/Mizuno/4/","Mizuno");
    lsProduct = lsProduct.concat(pr22);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S36', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr23 = new product(id, "Mizuno Wave Momentum 2 Mid - Trắng Xanh", 3350000, false, 2, "Mesh, da tổng hợp, lưỡi gà rời. Khô thoáng. Trắng xanh, Cổ cao, ôm chân thoải mái","./assets/img/product/Mizuno/5/","Mizuno");
    lsProduct = lsProduct.concat(pr23);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S45', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr24 = new product(id, "Mizuno Wave Dimension Mid - Đen Trắng", 2390000, true, 8, "Mesh, da tổng hợp, lưỡi gà rời. Khô thoáng. Trắng xanh, Cổ cao, ôm chân thoải mái","./assets/img/product/Mizuno/6/","Mizuno");
    lsProduct = lsProduct.concat(pr24);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S45', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S46', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr25 = new product(id, "Mizuno Wave Lightning Z6 Mid - Xanh Bạc", 1950000, false, 27, "Mesh, da tổng hợp, lưỡi gà rời. Khô thoáng. Xanh bạc, Cổ thấp, ôm chân thoải mái, Bật nhảy êm","./assets/img/product/Mizuno/7/","Mizuno");
    lsProduct = lsProduct.concat(pr25);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr26 = new product(id, "Mizuno Wave ThunderStorm - Đen Trắng Xanh", 1790000, true, 18, "Mesh, da tổng hợp, lưỡi gà rời. Khô thoáng. Đen trắng xanh, cổ thấp, ôm chân thoải mái","./assets/img/product/Mizuno/8/","Mizuno");
    lsProduct = lsProduct.concat(pr26);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S45', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S46', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr27 = new product(id, "Mizuno Wave ThunderStorm - Xanh Than", 1790000, false, 13, "Mesh, da tổng hợp, lưỡi gà rời. Khô thoáng. Xanh Than, Cổ thấp, ôm chân thoải mái","./assets/img/product/Mizuno/9/","Mizuno");
    lsProduct = lsProduct.concat(pr27);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S45', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S46', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr28 = new product(id, "Mizuno Wave ThunderStorm - Trắng Hồng", 1790000, true, 5, "Mesh, da tổng hợp, lưỡi gà rời. Khô thoáng. Trắng hồng, Cổ thấp, ôm chân thoải mái","./assets/img/product/Mizuno/10/","Mizuno");
    lsProduct = lsProduct.concat(pr28);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S36', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr29 = new product(id, "Mizuno Dynalitz Mid - Xanh Than", 1750000, false, 2, "Mesh, da tổng hợp, lưỡi gà rời. Khô thoáng. Công nghệ Wave huyền thoại. Tiêu chuẩn, thoải mái. Độ bền cao, linh hoạt.","./assets/img/product/Mizuno/11/","Mizuno");
    lsProduct = lsProduct.concat(pr29);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S45', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S46', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr30 = new product(id, "Mizuno Thunder Blade 3 Mid - Xanh Ngọc", 1750000, true, 30, "Xanh Ngọc, Mesh, da tổng hợp, lưỡi gà rời. Khô thoáng.","./assets/img/product/Mizuno/12/","Mizuno");
    lsProduct = lsProduct.concat(pr30);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S45', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr31 = new product(id, "Mizuno Thunder Blade 3 Mid - Đen Trắng Xanh", 1750000, false, 9, "Mesh, da tổng hợp, lưỡi gà rời. Khô thoáng. Công nghệ Wave huyền thoại. Tiêu chuẩn, thoải mái. Độ bền cao, linh hoạt.","./assets/img/product/Mizuno/13/","Mizuno");
    lsProduct = lsProduct.concat(pr31);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S45', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr32 = new product(id, "Mizuno Dynalitz - Trắng Hồng", 1750000, true, 2, "Trắng hồng, cổ thấp, ôm chân thoải mái","./assets/img/product/Mizuno/14/","Mizuno");
    lsProduct = lsProduct.concat(pr32);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S45', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S46', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr33 = new product(id, "Mizuno Dynalitz Mid - Đen Xanh", 1680000, false, 6, "Đen Xanh,  ôm chân thoải mái","./assets/img/product/Mizuno/15/","Mizuno");
    lsProduct = lsProduct.concat(pr33);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S45', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S46', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr34 = new product(id, "Mizuno Dynalitz - Xanh Than", 1680000, true, 19, "Xanh Than, cổ thấp, ôm chân thoải mái","./assets/img/product/Mizuno/16/","Mizuno");
    lsProduct = lsProduct.concat(pr34);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S45', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S46', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr35 = new product(id, "Mizuno Gate Sky Plus - Đỏ", 1800000, false, 15, "Mesh, da tổng hợp, lưỡi gà rời. Khô thoáng. Công nghệ Wave huyền thoại. Tiêu chuẩn, thoải mái. Độ bền cao, linh hoạt.","./assets/img/product/Mizuno/17/","Mizuno");
    lsProduct = lsProduct.concat(pr35);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr36 = new product(id, "Mizuno Gate Sky Plus - Đen Trắng Đỏ", 1800000, true, 2, "Mesh, da tổng hợp, lưỡi gà rời. Khô thoáng. EVA. Tiêu chuẩn, thoải mái. Độ bền cao, linh hoạt, bám sàn tốt, hạn chế trơn trượt","./assets/img/product/Mizuno/18/","Mizuno");
    lsProduct = lsProduct.concat(pr36);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr37 = new product(id, "Mizuno Gate Sky Plus - Trắng Bạc", 1800000, false, 7, "Mesh, da tổng hợp, lưỡi gà rời. Khô thoáng. EVA, Cổ thấp, Độ bền cao, linh hoạt, bám sàn tốt, hạn chế trơn trượt","./assets/img/product/Mizuno/19/","Mizuno");
    lsProduct = lsProduct.concat(pr37);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr38 = new product(id, "Mizuno Dynablitz Mid 2021 - Bạc Tím Xanh", 2390000, true, 2, "Mesh, da tổng hợp, lưỡi gà rời. Khô thoáng. EVA, Cổ thấp, Độ bền cao, linh hoạt, bám sàn tốt, hạn chế trơn trượt","./assets/img/product/Mizuno/20/","Mizuno");
    lsProduct = lsProduct.concat(pr38);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr39 = new product(id, "Mizuno Cyclone Speed 3 - Đen Xanh", 1450000, false, 19, "Mesh, da tổng hợp, lưỡi gà rời. Khô thoáng. Công nghệ Wave huyền thoại. Tiêu chuẩn, thoải mái. Độ bền cao, linh hoạt","./assets/img/product/Mizuno/21/","Mizuno");
    lsProduct = lsProduct.concat(pr39);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr40 = new product(id, "Beyono Golden Star C - Blue Yellow", 850000, false, 13, "Chất liệu Eva Phylon có độ đàn hồi cao, hỗ trợ giảm chấn, tạo cảm giác êm ái khi chơi bóng chuyền","./assets/img/product/Beyono/1/","Beyono");
    lsProduct = lsProduct.concat(pr40);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S45', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr41 = new product(id, "Beyono Golden Star C - Orangle Blue", 850000, true, 13, "Chất liệu Eva Phylon có độ đàn hồi cao, hỗ trợ giảm chấn, tạo cảm giác êm ái khi chơi bóng chuyền","./assets/img/product/Beyono/2/","Beyono");
    lsProduct = lsProduct.concat(pr41);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr42 = new product(id, "Beyono Warrior – Real", 1050000, false, 6, "Da Microfiber có độ bền cao, co giãn và chịu lực cực tốt, có độ mềm, mịn tạo cảm giác mát rất tự nhiên.","./assets/img/product/Beyono/3/","Beyono");
    lsProduct = lsProduct.concat(pr42);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr43 = new product(id, "Beyono Warrior – Brave", 1050000, true, 28, "Da Microfiber có độ bền cao, co giãn và chịu lực cực tốt, có độ mềm, mịn tạo cảm giác mát rất tự nhiên.","./assets/img/product/Beyono/4/","Beyono");
    lsProduct = lsProduct.concat(pr43);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr44 = new product(id, "Beyono Warrior – Young", 1050000, false, 23, "Đế giày được làm bằng cao su tự nhiên không màu, linh hoạt, khuôn định hình cứng cáp","./assets/img/product/Beyono/5/","Beyono");
    lsProduct = lsProduct.concat(pr44);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr45 = new product(id, "Beyono Golden Star C - Black White", 850000, true, 1, "Đế có độ bền cao, chịu ma sát tốt, giảm chấn khi bật nhảy tiếp đất, cổ cao hạn chế trường hợp lật sơ mi khi tiếp đất không đúng tư thế","./assets/img/product/Beyono/6/","Beyono");
    lsProduct = lsProduct.concat(pr45);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr46 = new product(id, "Beyono Golden Star C - Gree Gray", 850000, false, 13, "Chất liệu Eva Phylon có độ đàn hồi cao, hỗ trợ giảm chấn, tạo cảm giác êm ái khi chơi bóng chuyền","./assets/img/product/Beyono/7/","Beyono");
    lsProduct = lsProduct.concat(pr46);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S45', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr47 = new product(id, "BEYONO SKY DREAM – GREY", 650000, true, 19, "Đế có độ bền cao, chịu ma sát tốt, giảm chấn khi bật nhảy tiếp đất, cổ cao hạn chế trường hợp lật sơ mi khi tiếp đất không đúng tư thế","./assets/img/product/Beyono/8/","Beyono");
    lsProduct = lsProduct.concat(pr47);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr48 = new product(id, "BEYONO SKY DREAM – BLUE", 850000, false, 23, "chất liệu Eva Phylon có độ đàn hồi cao, hỗ trợ giảm chấn, tạo cảm giác êm ái khi chơi bóng chuyền","./assets/img/product/Beyono/9/","Beyono");
    lsProduct = lsProduct.concat(pr48);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr49 = new product(id, "BEYONO GOLDEN STAR C - RED BLACK", 850000, true, 13, "cổ thấp","./assets/img/product/Beyono/10/","Beyono");
    lsProduct = lsProduct.concat(pr49);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S45', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr50 = new product(id, "Kawasaki K081", 950000, false, 22, "Mesh, da tổng hợp, lưỡi gà rời, Rupper, EVA, Bật nhảy êm, nhẹ, thoáng khí","./assets/img/product/Kawasaki/1/","Kawasaki");
    lsProduct = lsProduct.concat(pr50);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr51 = new product(id, "Kawasaki K086 - Trắng", 1000000, true, 11, "Mesh, da tổng hợp, lưỡi gà rời, Rupper, EVA, Bật nhảy êm, nhẹ, thoáng khí","./assets/img/product/Kawasaki/2/","Kawasaki");
    lsProduct = lsProduct.concat(pr51);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr52 = new product(id, "Kawasaki K086 - Xanh", 1000000, false, 1, "Mesh, da tổng hợp, lưỡi gà rời, Rupper, EVA, Bật nhảy êm, nhẹ, thoáng khí","./assets/img/product/Kawasaki/3/","Kawasaki");
    lsProduct = lsProduct.concat(pr52);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr53 = new product(id, "Kawasaki K173 - Hồng", 1200000, true, 13, "Mesh, da tổng hợp, lưỡi gà rời, Rupper, EVA, Bật nhảy êm, nhẹ, thoáng khí","./assets/img/product/Kawasaki/4/","Kawasaki");
    lsProduct = lsProduct.concat(pr53);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr54 = new product(id, "Kawasaki K173 - Trắng", 1200000, false, 7, "Mesh, da tổng hợp, lưỡi gà rời, Rupper, EVA, Bật nhảy êm, nhẹ, thoáng khí, form ôm chân, bám sàn","./assets/img/product/Kawasaki/5/","Kawasaki");
    lsProduct = lsProduct.concat(pr54);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr55= new product(id, "Kawasaki K176 - Trắng Đỏ", 1290000, true, 8, "Mesh, da tổng hợp, lưỡi gà rời, Rupper, EVA, Bật nhảy êm, nhẹ, thoáng khí, form ôm chân, bám sàn","./assets/img/product/Kawasaki/6/","Kawasaki");
    lsProduct = lsProduct.concat(pr55);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr56 = new product(id, "Kawasaki K176 - Trắng Xanh", 1290000, false, 29, "Mesh, da tổng hợp, lưỡi gà rời, Rupper, EVA, Bật nhảy êm, nhẹ, thoáng khí, form ôm chân, bám sàn","./assets/img/product/Kawasaki/7/","Kawasaki");
    lsProduct = lsProduct.concat(pr56);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr57 = new product(id, "Kawasaki K080", 850000, true, 17, "Mesh, da tổng hợp, lưỡi gà rời, Rupper, EVA, Bật nhảy êm, nhẹ, thoáng khí, form ôm chân, bám sàn","./assets/img/product/Kawasaki/8/","Kawasaki");
    lsProduct = lsProduct.concat(pr57);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr58 = new product(id, "Kawasaki K085 - Trắng Xanh", 890000, false, 13, "Mesh, da tổng hợp, lưỡi gà rời,EVA đàn hồi cao, đế đàn hồi Popcorn, TPU chống xoắn phẳng, sợi carbon ổn định, Bật nhảy êm, trọng lượng nhẹ, thoáng khí, form ôm chân, bám sàn, độ bền cao","./assets/img/product/Kawasaki/9/","Kawasaki");
    lsProduct = lsProduct.concat(pr58);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr59 = new product(id, "Kawasaki K085 - Vàng", 890000, true, 0, "Mesh, da tổng hợp, EVA đàn hồi cao, đế đàn hồi Popcorn, TPU chống xoắn phẳng, sợi carbon ổn định, Bật nhảy êm, trọng lượng nhẹ, thoáng khí, form ôm chân, bám sàn, độ bền cao","./assets/img/product/Kawasaki/10/","Kawasaki");
    lsProduct = lsProduct.concat(pr59);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr60 = new product(id, "Kawasaki K088 - Trắng Đỏ", 990000, false, 3, "Mesh, da tổng hợp, đế phẳng chống xoắn TPU, Sợi carbon ổn định, cao su chống mài mòn, Bật nhảy êm, bám sân, nhẹ, thoáng khí","./assets/img/product/Kawasaki/11/","Kawasaki");
    lsProduct = lsProduct.concat(pr60);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr61 = new product(id, "Giày Kawasaki K088 - Trắng Xanh", 990000, true, 8, "Mesh, da tổng hợp, đế phẳng chống xoắn TPU, Sợi carbon ổn định, cao su chống mài mòn, Bật nhảy êm, bám sân, nhẹ, thoáng khí","./assets/img/product/Kawasaki/12/","Kawasaki");
    lsProduct = lsProduct.concat(pr61);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr62 = new product(id, "Kawasaki K098 - Cam Trắng", 1050000, false, 29, "Mesh, da tổng hợp, cao su chống mài mòn, Bật nhảy êm, bám sân, nhẹ, thoáng khí","./assets/img/product/Kawasaki/13/","Kawasaki");
    lsProduct = lsProduct.concat(pr62);lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr63 = new product(id, "Kawasaki K098 - Trắng Xanh", 1050000, true, 2, "Mesh, da tổng hợp, Rupper, EVA, Bật nhảy êm, bám sân, nhẹ, thoáng khí","./assets/img/product/Kawasaki/14/","Kawasaki");
    lsProduct = lsProduct.concat(pr63);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr64 = new product(id, "Kawasaki K098 - Xanh Dương", 1050000, false, 3, "Mesh, da tổng hợp, Rupper, EVA, Bật nhảy êm, bám sân, nhẹ, thoáng khí","./assets/img/product/Kawasaki/15/","Kawasaki");
    lsProduct = lsProduct.concat(pr64);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr65 = new product(id, "Kawasaki K367 - Trắng Đỏ", 1350000, true, 11, "Mesh, da tổng hợp, da PU tổng hợp cao su chống mài mòn, Bật nhảy êm, bám sân, nhẹ, thoáng khí","./assets/img/product/Kawasaki/16/","Kawasaki");
    lsProduct = lsProduct.concat(pr65);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr66 = new product(id, "Kawasaki K367 - Trắng Xanh", 1350000, false, 5, "Mesh, da PU tổng hợp, lưỡi gà rời Bật nhảy êm, bám sân, nhẹ, thoáng khí","./assets/img/product/Kawasaki/17/","Kawasaki");
    lsProduct = lsProduct.concat(pr66);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S36', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S45', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr67 = new product(id, "Kawasaki K565 - Xám Đỏ", 1530000, true, 8, "Mesh, da tổng hợp, đế phẳng chống xoắn TPU, Sợi carbon ổn định, cao su chống mài mòn, Bật nhảy êm, bám sân, nhẹ, thoáng khí","./assets/img/product/Kawasaki/18/","Kawasaki");
    lsProduct = lsProduct.concat(pr67);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr68 = new product(id, "Kawasaki Nữ K368 - Hồng", 1350000, false, 18, "Mesh, da tổng hợp, đế phẳng chống xoắn TPU, Sợi carbon ổn định, cao su chống mài mòn, Bật nhảy êm, bám sân, nhẹ, thoáng khí","./assets/img/product/Kawasaki/19/","Kawasaki");
    lsProduct = lsProduct.concat(pr68);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S35', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S35.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S36', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr69 = new product(id, "Adidas Ultraboost 22 Blue Rush Gx3061 ", 5200000, true, 8, "Ôm vừa, có dây buộc, Đế ngoài bằng cao su chống trơn trượt","./assets/img/product/Adidas/1/","Adidas");
    lsProduct = lsProduct.concat(pr69);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr70 = new product(id, "Adidas Ultraboost Dna Fx8770 J Black Red Blue ", 4500000, false, 0, "Ôm vừa, có dây buộc, Đế ngoài bằng cao su chống trơn trượt","./assets/img/product/Adidas/2/","Adidas");
    lsProduct = lsProduct.concat(pr70);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S36', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr71 = new product(id, "Adidas 4d Run 1.0 Parley Blue Spirit Fw1230 ", 2650000, true, 16, "Ôm vừa, có dây buộc, Đế ngoài bằng cao su có màu giống cao su tự nhiên, EVA","./assets/img/product/Adidas/3/","Adidas");
    lsProduct = lsProduct.concat(pr71);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr72 = new product(id, "Adidas Ultraboost 21 W Clear Mint Fy0409 ", 3200000, true, 14, "Ôm vừa, có dây buộc, Đế ngoài bằng cao su có màu giống cao su tự nhiên, EVA","./assets/img/product/Adidas/4/","Adidas");
    lsProduct = lsProduct.concat(pr72);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S36', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr73 = new product(id, "Adidas SUPERSTAR ", 2500000, false, 2, "cổ thấp, mũi giày vỏ sò, chất liệu cao cấp","./assets/img/product/Adidas/5/","Adidas");
    lsProduct = lsProduct.concat(pr73);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S36', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr74 = new product(id, "Adidas ULTRA 4DFWD ", 6000000, false, 2, "cổ thấp, SỢI PARLEY OCEAN PLASTIC, chuyển đọng mượt mà, ôm chân","./assets/img/product/Adidas/6/","Adidas");
    lsProduct = lsProduct.concat(pr74);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S36', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr75 = new product(id, "Adidas HARDEN STEPBACK 3 ", 2300000, true, 5, "cổ thấp, đế đàn hồi, ôm chân, bật nhẹ, thoáng khí","./assets/img/product/Adidas/7/","Adidas");
    lsProduct = lsProduct.concat(pr75);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr76 = new product(id, "Adidas STAN SMITH", 2500000, true, 23, "cổ thấp, phong cách kinh điển, phù hợp với thời đại","./assets/img/product/Adidas/8/","Adidas");
    lsProduct = lsProduct.concat(pr76);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S36', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr77 = new product(id, "Adidas FORUM LOW CL ", 2500000, true, 2, "màu sắc vintage, chất liệu da mịn và đế giày trắng ngà","./assets/img/product/Adidas/9/","Adidas");
    lsProduct = lsProduct.concat(pr77);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S36', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr78 = new product(id, "Adidas ADIZERO ADIOS PRO 3 ", 6500000, false, 9, "Hai lớp foam đàn hồi, Thiết kế nguyên khối kết hợp hài hòa giữa độ cứng cáp và khả năng hoàn trả năng lượng. Đế ngoài cao cấp tạo độ bám.","./assets/img/product/Adidas/10/","Adidas");
    lsProduct = lsProduct.concat(pr78);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S36', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S36.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr79 = new product(id, "Adidas SUPERNOVA ", 2850000, false, 13, " đệm Bounce và Boost mang lại sự thoải mái, Viền gót giày lót đệm cùng các chi tiết phản quang mang lại cảm giác ôm khít và tăng độ nổi bật.","./assets/img/product/Adidas/11/","Adidas");
    lsProduct = lsProduct.concat(pr79);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S36', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr80 = new product(id, "Adidas RUN FALCON 2.0 ", 1600000, true, 15, "Thân giày bằng vải lưới siêu thoáng khí. Đế ngoài bằng cao su bền bỉ","./assets/img/product/Adidas/12/","Adidas");
    lsProduct = lsProduct.concat(pr80);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr81 = new product(id, "Adidas FORUM 84 ", 3300000, false, 2, "quai dán chéo, cổ cao, da cao cấp, quai buộc trên cổ, mũi giày đục lỗ và 3 Sọc","./assets/img/product/Adidas/13/","Adidas");
    lsProduct = lsProduct.concat(pr81);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S36', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S36.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr82 = new product(id, "Adidas HYPERTURF ", 3700000, true, 0, "chất liệu vải ripstop, da nubuck, da lộn và vải lưới kết hợp tạo nên thân giày bền bỉ, EVA siêu nhẹ","./assets/img/product/Adidas/14/","Adidas");
    lsProduct = lsProduct.concat(pr82);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S36', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr83 = new product(id, "Adidas PUREBOOST 22 ", 3600000, false, 6, "sử dụng chất liệu tái chế, Đệm gót giày bên ngoài cố định bàn chân cho độ ôm chắc chắn","./assets/img/product/Adidas/15/","Adidas");
    lsProduct = lsProduct.concat(pr83);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S36', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S39', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S41', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr84 = new product(id, "Adidas HYPERTURF ADVENTURE W ", 3700000, true, 10, "cổ thấp, mũi giày vỏ sò, chất liệu cao cấp","./assets/img/product/Adidas/16/","Adidas");
    lsProduct = lsProduct.concat(pr84);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S36', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S36.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37.', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42.5', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    id = createGeneralID(lsProduct);
    var pr85 = new product(id, "Adidas EQ21 RUN 2.0 BOUNCE SPORT RUNNING ", 1300000, true, 20, "chất liệu tái chế, thiết kế ôm theo hình dáng bàn chân, Thân giày bằng vải lưới nhiều lớp cho cảm giác thông thoáng dễ chịu, cùng đế giữa Bounce đảm bảo độ đàn hồi","./assets/img/product/Adidas/17/","Adidas");
    lsProduct = lsProduct.concat(pr85);
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S36', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S37.5', 50));
    lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
    data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

    data.setItem("listProduct", JSON.stringify(lsProduct));

    //Tạo thông tin khách hàng, tài khoản admin
    lsCustomer = JSON.parse(data.getItem("listCustomer"));
    lsAccount = JSON.parse(data.getItem("listAccount"));
    lsCart = JSON.parse(data.getItem("listCart"));
    var idAccAdmin = createGeneralID(lsAccount);
    lsCustomer = lsCustomer.concat(new customer(createGeneralID(lsCustomer), "Admin", "", "", "", "", "", "./assets/img/avatar/auto/A.jpg", idAccAdmin));
    lsAccount = lsAccount.concat(new account(idAccAdmin,"admin","110802",new Date(),2));
    lsCart = lsCart.concat(new cart(createGeneralID(lsCart),idAccAdmin));

    data.setItem("listCart", JSON.stringify(lsCart));
    data.setItem("listCustomer", JSON.stringify(lsCustomer));
    data.setItem("listAccount", JSON.stringify(lsAccount));

}