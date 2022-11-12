class billDetail{
    constructor(idBill, idProduct, idSize, quantity, Subprice){
        this.idBill = idBill;
        this.idProduct = idProduct;
        this.idSize = idSize;
        this.quantity = quantity;
        this.Subprice = Subprice;
    }
}

function getListBillDetailByBillID(idBill){
    lsBillDetail = JSON.parse(data.getItem("listBillDetail"));
    var list = [];
    for(let i = 0; i < lsBillDetail.length; i++){
        if(lsBillDetail[i].idBill == idBill){
            list = list.concat(lsBillDetail[i]);
        }
    }
    return list;
}