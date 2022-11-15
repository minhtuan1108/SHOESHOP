class productDetail{
    constructor(idProduct, idSize, quantity){
        this.idProduct = idProduct;
        this.idSize = idSize;
        this.quantity = quantity;
    }
}

function getProductDetailByIdProductAndIdSize(idProduct, idSize){
    lsProductDetail = JSON.parse(data.getItem("listProductDetail"));
    for(let i = 0; i < lsProductDetail.length; i++) {
        // console.log("ID Size: " + idSize);
        // console.log("Id Size of item: " + lsProductDetail[i].idSize);
        if(idProduct == lsProductDetail[i].idProduct && idSize == lsProductDetail[i].idSize){
            // console.log("Vào đây r nè");
            return lsProductDetail[i];
        } 
    }
    return null;
}