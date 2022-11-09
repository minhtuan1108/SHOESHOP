var lsProduct = JSON.parse(data.getItem("listProduct"));
//Tạo một đối tượng sản phẩm theo hàm khởi tạo (xem bên file product.js)
var pr1 = new product(1, "Asics Gel Tatic - Đen Trắng Xanh", 2599000, 49, 0, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, SpEVA, cổ thấp, ôm chân thoải mái. Bật nhảy êm, thích hợp chơi sân indoor.", "./assets/img/product/Asics/1/", "Asics", 38, 43, 0);
lsProduct = lsProduct.concat(pr1);
var pr2 = new product(2, "Asics Sky Elite 2 - Trắng Đen 2022", 3699000, 37, 15, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, SpEVA, RUBBER ,AHARPLUS, cực ôm chân thoải mái. Bật nhảy êm, nhẹ, cực êm, thích hợp chơi sân indoor.","./assets/img/product/Asics/2/","Asics", 40, 45, 0);
lsProduct = lsProduct.concat(pr2);
var pr3 = new product(3, "Asics Sky Elite 2 - Trắng Đen 2022", 3699000, 37, 15, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, SpEVA, RUBBER ,AHARPLUS, cực ôm chân thoải mái. Bật nhảy êm, nhẹ, cực êm, thích hợp chơi sân indoor.","./assets/img/product/Asics/2/","Asics", 40, 45, 0);
lsProduct = lsProduct.concat(pr3);
var pr4 = new product(4, "Asics Sky Elite 2 - Trắng Đen 2022", 3699000, 37, 15, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, SpEVA, RUBBER ,AHARPLUS, cực ôm chân thoải mái. Bật nhảy êm, nhẹ, cực êm, thích hợp chơi sân indoor.","./assets/img/product/Asics/2/","Asics", 40, 45, 0);
lsProduct = lsProduct.concat(pr4);
var pr5 = new product(5, "Asics Sky Elite 2 - Trắng Đen 2022", 3699000, 37, 15, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, SpEVA, RUBBER ,AHARPLUS, cực ôm chân thoải mái. Bật nhảy êm, nhẹ, cực êm, thích hợp chơi sân indoor.","./assets/img/product/Asics/2/","Asics", 40, 45, 0);
lsProduct = lsProduct.concat(pr5);
var pr6 = new product(6, "Asics Sky Elite 2 - Trắng Đen 2022", 3699000, 37, 15, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, SpEVA, RUBBER ,AHARPLUS, cực ôm chân thoải mái. Bật nhảy êm, nhẹ, cực êm, thích hợp chơi sân indoor.","./assets/img/product/Asics/2/","Asics", 40, 45, 0);
lsProduct = lsProduct.concat(pr6);
var pr7 = new product(7, "Asics Sky Elite 2 - Trắng Đen 2022", 3699000, 37, 15, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, SpEVA, RUBBER ,AHARPLUS, cực ôm chân thoải mái. Bật nhảy êm, nhẹ, cực êm, thích hợp chơi sân indoor.","./assets/img/product/Asics/2/","Asics", 40, 45, 0);
lsProduct = lsProduct.concat(pr7);
var pr8 = new product(8, "Asics Sky Elite 2 - Trắng Đen 2022", 3699000, 37, 15, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, SpEVA, RUBBER ,AHARPLUS, cực ôm chân thoải mái. Bật nhảy êm, nhẹ, cực êm, thích hợp chơi sân indoor.","./assets/img/product/Asics/2/","Asics", 40, 45, 0);
lsProduct = lsProduct.concat(pr8);

//Bà có thể console.log như sau để xem mảng bà đã nhập
data.setItem("listProduct", JSON.stringify(lsProduct));

