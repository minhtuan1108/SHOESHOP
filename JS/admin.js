function InforUser()
{
    infor = JSON.parse(localStorage.getItem('activeAccount'));
    let str = `
    <div class="avt-container"> 
            <img src="${infor.avatar}" alt="" style="height: 40px; width: 40px;">
    </div>
    <div class="customer-info">
        <div class="custom-name">
            <p class="title">Name: ${infor.name}</p>
        </div>
        <div class="custom-dob">
            <p class="title">DoB: ${infor.dob}</p>
        </div>
        <div class="custom-pnum">
            <p class="title">Phone: ${infor.phoneNumber}</p>
        </div>
        <div class="custom-email">
            <p class="title">Email: ${infor.email}</p>
        </div>
    </div>`;
    if(document.getElementById('account-info').style.display == "none")
        {
            document.getElementById('account-info').style.display = "block";
            document.getElementById('account-info').innerHTML = str;
        }
    else
        document.getElementById('account-info').style.display = "none"
}
function showPreview(event) {
    if(event.target.files.length > 0){
       var src = URL.createObjectURL(event.target.files[0]);
       var preview = document.getElementById("file-preview");
       preview.src = src;
       preview.style.display = "block";
    }
}  

function showPreviewEdit(event) {
    if(event.target.files.length > 0){
       var src = URL.createObjectURL(event.target.files[0]);
       var preview = document.getElementById("file-preview-edit");
       preview.src = src;
       preview.style.display = "block";
       
    }
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


function chooseFileImg(event){
    if(event.target.files.length > 0){
        var src = URL.createObjectURL(event.target.files[0]);
        tempImg = src;
     }
}
