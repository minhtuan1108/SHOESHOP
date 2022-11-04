//Đây là biến danh sách của sản phẩm
//Bà có thể qua file product.js để xem đổi tượng sản phẩm
var lsProduct = [];

//Tạo một đối tượng sản phẩm theo hàm khởi tạo (xem bên file product.js)
var pr1 = new product(1, "Asics Gel Tatic - Đen Trắng Xanh", 2599000, 9, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, SpEVA, cổ thấp, ôm chân thoải mái. Bật nhảy êm, thích hợp chơi sân indoor", "./assets/img/product/Asics/1/", "Asics", 38, 43);
lsProduct = lsProduct.concat(pr1);
var pr2 = new product(2, "Asics Sky Elite 2 - Trắng Đen 2022", 3699000, 15, "Mesh, da tổng hợp, lưỡi gà rời. Có Gel, SpEVA, RUBBER ,AHARPLUS, cực ôm chân thoải mái. Bật nhảy êm, nhẹ, cực êm, thích hợp chơi sân indoor","./assets/img/product/Asics/2/","Asics", 40.5, 45);
lsProduct = lsProduct.concat(pr2);

//Bà có thể console.log như sau để xem mảng bà đã nhập
console.log(lsProduct);
