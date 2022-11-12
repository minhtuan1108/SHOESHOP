class bill{
    constructor(id, idKH, total, date, status){
        this.id = id;
        this.idKH = idKH;
        this.total = total;
        this.date = date;
        this.status = status;
    }
}

function getBillByID(idBill){
    lsBill = JSON.parse(data.getItem("listBill"));
    for(let i = 0; i< lsBill.length; i++){
        if(lsBill[i].id == idBill){
            return lsBill[i];
        }
    }
}