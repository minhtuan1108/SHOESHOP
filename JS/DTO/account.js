class account{
    constructor(id, username, password, dateCreate, positionID){
        this.id = id;
        this.username = username;
        this.password = password;
        this.dateCreate = dateCreate;
        this.positionID = positionID;
    }
}

function getAccountByID(idAccount){
    lsAccount = JSON.parse(data.getItem("listAccount"));
    for(let i = 0; i< lsAccount.length; i++){
        if(lsAccount[i].id == idAccount){
            return lsAccount[i];
        }
    }
}