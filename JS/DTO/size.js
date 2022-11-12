class size{
    constructor(id, value){
        this.id = id;
        this.value = value;
    }
}

function getSizeById(sizeID){
    lsSize = JSON.parse(data.getItem("listSize"));
    for(let i = 0; i < lsSize.length; i++){
        if(lsSize[i].id == sizeID){
            return lsSize[i];
        }
    }
}