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
var pr1 = new product(id, "Asics Gel Tatic - Đen Trắng Xanh", 2599000, 0, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, SpEVA, cổ thấp, ôm chân thoải mái. Bật nhảy êm, thích hợp chơi sân indoor.", "./assets/img/product/Asics/1/", "Asics");
lsProduct = lsProduct.concat(pr1);
lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S38', 50));
lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S40', 50));
lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S42', 50));
lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S43', 50));
lsProductDetail = lsProductDetail.concat(new productDetail(id, 'S44', 50));
data.setItem("listProductDetail", JSON.stringify(lsProductDetail));

id = createGeneralID(lsProduct);
var pr2 = new product(id, "Asics Sky Elite 2 - Trắng Đen 2022", 3699000, 15, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, SpEVA, RUBBER ,AHARPLUS, cực ôm chân thoải mái. Bật nhảy êm, nhẹ, cực êm, thích hợp chơi sân indoor.","./assets/img/product/Asics/2/","Asics");
lsProduct = lsProduct.concat(pr2);

id = createGeneralID(lsProduct);
var pr3 = new product(id, "Asics Sky Elite 2 - Trắng Đen 2022", 4050000, 15, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, SpEVA, RUBBER ,AHARPLUS, cực ôm chân thoải mái. Bật nhảy êm, nhẹ, cực êm, thích hợp chơi sân indoor.","./assets/img/product/Asics/2/","Asics");
lsProduct = lsProduct.concat(pr3);

id = createGeneralID(lsProduct);
var pr4 = new product(id, "Asics Sky Elite 2 - Trắng Đen 2022", 1999000, 15, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, SpEVA, RUBBER ,AHARPLUS, cực ôm chân thoải mái. Bật nhảy êm, nhẹ, cực êm, thích hợp chơi sân indoor.","./assets/img/product/Asics/2/","Asics");
lsProduct = lsProduct.concat(pr4);

id = createGeneralID(lsProduct);
var pr5 = new product(id, "Asics Sky Elite 2 - Trắng Đen 2022", 2699000, 15, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, SpEVA, RUBBER ,AHARPLUS, cực ôm chân thoải mái. Bật nhảy êm, nhẹ, cực êm, thích hợp chơi sân indoor.","./assets/img/product/Asics/2/","Asics");
lsProduct = lsProduct.concat(pr5);

id = createGeneralID(lsProduct);
var pr6 = new product(id, "Asics Sky Elite 2 - Trắng Đen 2022", 3699000, 15, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, SpEVA, RUBBER ,AHARPLUS, cực ôm chân thoải mái. Bật nhảy êm, nhẹ, cực êm, thích hợp chơi sân indoor.","./assets/img/product/Asics/2/","Asics");
lsProduct = lsProduct.concat(pr6);

id = createGeneralID(lsProduct);
var pr7 = new product(id, "Asics Sky Elite 2 - Trắng Đen 2022", 3699000, 15, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, SpEVA, RUBBER ,AHARPLUS, cực ôm chân thoải mái. Bật nhảy êm, nhẹ, cực êm, thích hợp chơi sân indoor.","./assets/img/product/Asics/2/","Asics");
lsProduct = lsProduct.concat(pr7);

id = createGeneralID(lsProduct);
var pr8 = new product(id, "Asics Sky Elite 2 - Trắng Đen 2022", 3699000, 15, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, SpEVA, RUBBER ,AHARPLUS, cực ôm chân thoải mái. Bật nhảy êm, nhẹ, cực êm, thích hợp chơi sân indoor.","./assets/img/product/Asics/2/","Asics");
lsProduct = lsProduct.concat(pr8);

//Bà có thể console.log như sau để xem mảng bà đã nhập
data.setItem("listProduct", JSON.stringify(lsProduct));


//Tạo thông tin khách hàng, tài khoản admin
lsCustomer = JSON.parse(data.getItem("listCustomer"));
lsAccount = JSON.parse(data.getItem("listAccount"));
var idAccAdmin = createGeneralID(lsAccount);
lsCustomer = lsCustomer.concat(new customer(createGeneralID(lsCustomer), "Admin", "", "", "", "", "", "./assets/img/avatar/auto/A.jpg", idAccAdmin));
lsAccount = lsAccount.concat(new account(idAccAdmin,"admin","110802",new Date(),2));
data.setItem("listCustomer", JSON.stringify(lsCustomer));
data.setItem("listAccount", JSON.stringify(lsAccount));
