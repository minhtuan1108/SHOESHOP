class customer{
    constructor(id, name, dob, gender, phoneNumber, email, address, avatar, idAcc){
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.address = address;
        this.avatar = avatar;
        this.idAcc = idAcc;
    }
}

function getCustomerByIdAccount(idAcc){
    lsCustomer = JSON.parse(data.getItem("listCustomer"));
    for(let i = 0; i < lsCustomer.length; i++){
        if(lsCustomer[i].idAcc == idAcc){
            return lsCustomer[i];
        }
    }
}

function getCustomerByID(id){
    lsCustomer = JSON.parse(data.getItem("listCustomer"));
    for(let i = 0; i < lsCustomer.length; i++){
        if(lsCustomer[i].id == id){
            return lsCustomer[i];
        }
    }
}