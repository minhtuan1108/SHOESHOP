
//Reset
function resetInput(){
    document.getElementById("client-account").value= ""
    document.getElementById("client-password").value= ""
    document.getElementById("client-access").value= ""
    document.getElementById("client-name").value= ""
    document.getElementById("client-address").value= ""
    document.getElementById("client-gender").value= ""
    document.getElementById("client-phone").value= ""
    document.getElementById("client-email").value= ""
    document.getElementById("client-birthday").value= ""
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

function isValidPhoneNumber(){
    let phone = document.getElementById("client-phone").value
    var len = phone.length;
    var annouceText='';
    if(phone == ''){
        annouceText = '*Phone number can\'t empty';
    }else{
        if(len < 10 || len > 12){
            annouceText = '*Your phone number should be 10-12 numbers';
        }else{
            try {
                parseInt(phone);
                return true;
            } catch (error) {
                annouceText = '*Please, enter number 0-9';
            }
        }
    }
    document.getElementById("client-phone").value=""
    document.getElementById("client-phone").placeholder= annouceText
    return false;
    
}

function isValidEmail(){
    let email = document.getElementById("client-email").value
    var regex = /^[A-Z0-9._]+@[A-Z0-9._]+\.[A-Z]{2,4}$/i;
    var checked = email.match(regex);
    var annouceText = '';
    if(email == ''){
        annouceText = '*Email can\'t empty'
    }else{
        if(checked != email){    
            annouceText = '*Sorry, only fill follow digits a-z, 0-9, A-Z, ., _';
            
        }else{
            return true;
        } 
    }
    document.getElementById("client-email").value="";
    document.getElementById("client-email").placeholder = annouceText;
    return false;
}

function isValidUserName(){
    let username = document.getElementById("client-account").value
    var regex = /^[A-Z0-9_-]+$/i;
    var checked = username.match(regex);
    var annouceText = '';
    if(username == ''){
        annouceText = '*User name can\'t empty';
    }else{
        if(username != checked){
            annouceText = '*Sorry, just fill a-z, A-Z, 0-9, -, _';
        }else{
            return true;
        } 
    }
    document.getElementById("client-account").value = "";
    document.getElementById("client-account").placeholder = annouceText;
    return false;
}

function isValidPassword(){
    let pass = document.getElementById("client-password").value
    var regex = /^[A-Z0-9]+$/i;
    var checked = pass.match(regex);
    var annouceText = '';
    if(pass == ''){
        annouceText = '*Password can\'t empty';
    }else{
        if(pass != checked){
            annouceText = '*Sorry, just fill a-z, A-Z, 0-9';
        }else{
            return true;
        } 
    }
    document.getElementById("client-password").value = "";
    document.getElementById("client-password").placeholder = annouceText;
    return false
}

function isInitCustomer(){
    if(document.getElementById("update").style.display == "block")
     return true;
    lsCustomer = localStorage.getItem("listCustomer") ? JSON.parse(localStorage.getItem("listCustomer")) : []
    let username = document.getElementById("client-account").value
    let email = document.getElementById("client-email").value
    let phone = document.getElementById("client-phone").value
    for(i = 0; i < lsCustomer.length; i++){

        if(phone == lsCustomer[i].phoneNumber){
            document.getElementById("client-phone").value=""
            document.getElementById("client-phone").placeholder = '*This phone number was used';
            return false;
        }

        if(email == lsCustomer[i].email){
            document.getElementById("client-email").value=""
            document.getElementById("client-email").placeholder = '*This email was used'
            return false;
        }                    
    }

    lsAccount = localStorage.getItem("listAccount") ? JSON.parse(localStorage.getItem("listAccount")) : []
    for(let i = 0; i < lsAccount.length; i++){
        if(username == lsAccount[i].username){
            document.getElementById("client-account").value=""
            document.getElementById("client-account").placeholder = '*This username was used'
            return false;
        }
    }
    return true;
}
//Kiểm tra dữ liệu nhập
function validateInput() {
    let formElement = document.querySelector(".client_form")
    let inputElement = formElement.querySelectorAll(".form_input")
    for (let i=0;i < inputElement.length;i++) {
        if (inputElement[i].value === "") {           
            inputElement[i].parentElement.querySelector(".error-message").innerText = "lỗi";              
        }
        else{           
            inputElement[i].parentElement.querySelector(".error-message").innerText = "";
        }
    }
    if(!(isValidPhoneNumber()))
        inputElement[1].parentElement.querySelector(".error-message").innerText = "lỗi";
    if(!(isValidEmail()))
        inputElement[2].parentElement.querySelector(".error-message").innerText = "lỗi";
    if(!(isValidPassword()))
        inputElement[3].parentElement.querySelector(".error-message").innerText = "lỗi";
    if(!(isValidUserName()))
        inputElement[4].parentElement.querySelector(".error-message").innerText = "lỗi";
    if(!(isInitCustomer()))
        inputElement[5].parentElement.querySelector(".error-message").innerText = "lỗi";
}
//Thêm mới khách hàng
function addNew() {
    validateInput()
    let formElement = document.querySelector(".client_form")
    let errorElement = formElement.querySelectorAll(".error-message")
    let arrErrorElememt = []
    for (let i= 0; i < errorElement.length; i++) {
        arrErrorElememt.push(errorElement[i].innerText)
    }
    let checkerrorElememnt = arrErrorElememt.every(value => value === "")
    if (checkerrorElememnt){
        let listCustomer = localStorage.getItem("listCustomer") ? JSON.parse(localStorage.getItem("listCustomer")) : []
        let lsAccount = localStorage.getItem("listAccount") ? JSON.parse(localStorage.getItem("listAccount")) : []
        let lsCart = localStorage.getItem("listCart") ? JSON.parse(localStorage.getItem("listCart")) : []
        let idCustomer= createGeneralID(listCustomer)
        let idAccount= createGeneralID(lsAccount)
        let idCart= createGeneralID(lsCart)
        let day= new Date()
        let account = document.getElementById("client-account").value
        let password=document.getElementById("client-password").value
        let access
        if(document.getElementById("client-access").value=="Khách hàng")
            access = 1
        else if(document.getElementById("client-access").value=="Admin")
            access = 2
        let name = document.getElementById("client-name").value
        let address = document.getElementById("client-address").value
        let gender = document.getElementById("client-gender").value
        let phone = document.getElementById("client-phone").value
        let email = document.getElementById("client-email").value
        let birthday = document.getElementById("client-birthday").value
        listCustomer.push({
            id: idCustomer,
            name: name,
            address: address,
            gender: gender,
            phoneNumber: phone,
            email: email,
            dob: birthday,
            idAcc: idAccount,
            avatar: avatar
        })
        if(listCustomer[listCustomer.length-1].avatar=="")
         setAutoAvatarForCustomer(listCustomer[listCustomer.length-1])
        lsAccount.push({
            id: idAccount,
            username: account,
            password: password,
            positionID: access,
            dateCreate: day
        })
        lsCart.push({
            id: idCart,
            idAccount: idAccount
        })

        //Thêm dữ liệu vào localStorage
        localStorage.setItem("listCustomer",JSON.stringify(listCustomer))
        localStorage.setItem("listAccount",JSON.stringify(lsAccount))
        localStorage.setItem("listCart",JSON.stringify(lsCart))
        renderClient()
        resetInput()
    }
    else
        alert("Insufficient or incorrect input information");
}

//Hiển thị danh sách khách hàng
function renderClient(){
    let lsAccount = localStorage.getItem("listAccount") ? JSON.parse(localStorage.getItem("listAccount")) : []                   
    let client = '   <tr>\n '+
                '   <td class="table_pd_second_column text_center">STT</td>\n' +
                '   <td class="table_pd_second_column text_center">IdAccount</td>\n' +
                '   <td class="table_pd_second_column text_center">Username</td>\n' +
                '   <td class="table_pd_second_column text_center">Pasword</td>\n' +
                '   <td class="table_pd_second_column text_center">Privilege</td>\n' +
                '   <td class="table_pd_second_column text_center">Date created</td>\n' +
                '   <td class="table_pd_seventh_column text_center">Detail Customer</td>\n' +
                '   <td class="table_pd_fifth_column text_center">Edit</td>\n' +
                '   <td class="table_pd_seventh_column text_center">Delete</td>\n' +
                '   </tr>';
    if(lsAccount.length === 0)
        client += `<tr><td>Chưa có khách hàng nào cả</td></tr>`
    else{
    lsAccount.map((value, index)=>{
        let access
        if(value.positionID==1)
            access="Khách hàng"
        else
            access="Admin"
        client += `<tr class="a_client">
        <td class="text_center">${index+1}</td>
        <td class="text_center">${value.id}</td>
        <td class="text_center">${value.username}</td>
        <td class="text_center">${value.password}</td>
        <td class="text_center">${access}</td>
        <td class="text_center">${value.dateCreate}</td>
        <td class="text_center"><button class="btn" id="ct" onclick="openDetail(${index})" ="closeDetail">See</button></td>
        <td class="text_center"><button class="btn" onclick="editClient(${index})">Edit</button></td>
        <td class="text_center"><button class="btn" onclick="deleteClient(${index})">Delete</button></td>
    </tr>`
    }
    )}
    document.getElementById("tableContent").innerHTML = client;
}
function setAutoAvatarForCustomer(customer){
    var fullName = customer.name;
    var firstName = fullName.split(' ');
    var firstCharacter = firstName[firstName.length - 1].split('')[0];
    customer.avatar = `./assets/img/avatar/auto/${firstCharacter}.jpg`;
}
//Hiển thị thông tin chi tiết khách hàng
function openDetail(index) {
    document.getElementById("showDetail").style.display = "flex";
        let listCustomer = localStorage.getItem("listCustomer") ? JSON.parse(localStorage.getItem("listCustomer")) : []
        console.log(listCustomer)
        if(listCustomer[index].avatar=="")
        listCustomer[index].avatar=setAutoAvatarForCustomer(listCustomer[index])
        let chitiet = `
        <div id="left">
                <ul>
                    <li>ID Customer</li>
                    <li>Name</li>
                    <li style="height: 110px">Avatar</li>
                    <li>Address</li>
                    <li>NumberPhone</li>
                    <li>Gender</li>
                    <li>Email</li>
                    <li>BirthDay</li>
                </ul>
            </div>
        <div id="right">
        <ul>
        <li class="text_center">${listCustomer[index].id}</li>
        <li class="text_center">${listCustomer[index].name}</li>
        <li class="text_center"><img src="${listCustomer[index].avatar}" alt=""></li>
        <li class="text_center">${listCustomer[index].address}</li>
        <li class="text_center">${listCustomer[index].phoneNumber}</li>
        <li class="text_center">${listCustomer[index].gender}</li>
        <li class="text_center">${listCustomer[index].email}</li>
        <li class="text_center">${listCustomer[index].dob}</li>
    </ul>
    </div>`
    document.getElementById('modalcustomer').style.display = "flex";
    document.getElementById("showDetail").innerHTML = chitiet;
}
function closeDetail(){
    document.getElementById("modalcustomer").style.display = "none";  
}
//Nhập lại thông tin khách hàng
function editClient(index){
    let listCustomer = localStorage.getItem("listCustomer") ? JSON.parse(localStorage.getItem("listCustomer")) : []
    let lsAccount = localStorage.getItem("listAccount") ? JSON.parse(localStorage.getItem("listAccount")) : []
    document.getElementById("client-account").value = lsAccount[index].username
    document.getElementById("client-password").value = lsAccount[index].password
    if(lsAccount[index].positionID==1)
    document.getElementById("client-access").value = "Customer"
    else
    document.getElementById("client-access").value = "Admin"
    document.getElementById("client-name").value = listCustomer[index].name
    document.getElementById("client-address").value = listCustomer[index].address
    document.getElementById("client-phone").value = listCustomer[index].phoneNumber
    document.getElementById("client-gender").value = listCustomer[index].gender
    document.getElementById("client-email").value = listCustomer[index].email
    document.getElementById("client-birthday").value = listCustomer[index].dob
    document.getElementById("client-index").value = index
    document.getElementById("add_header").style.display = "none"
    document.getElementById("editHeader").style.display = "block"

    document.getElementById("save").style.display = "none"
    document.getElementById("update").style.display = "block"
}
//Sửa thông tin
function changeClient(){
    validateInput()
    let formElement = document.querySelector(".client_form")
    let errorElement = formElement.querySelectorAll(".error-message")
    let arrErrorElememt = []
    for (let i= 0; i < errorElement.length; i++) {
        arrErrorElememt.push(errorElement[i].innerText)
    }
    let checkerrorElememnt = arrErrorElememt.every(value => value === "")
    if (checkerrorElememnt){
    let listCustomer = localStorage.getItem("listCustomer") ? JSON.parse(localStorage.getItem("listCustomer")) : []
    let lsAccount = localStorage.getItem("listAccount") ? JSON.parse(localStorage.getItem("listAccount")) : []
    let index = document.getElementById("client-index").value
    listCustomer[index] = {
        id :    listCustomer[index].id,
        idAcc: lsAccount[index].id,
        name: document.getElementById("client-name").value,
        avatar: document.getElementById("client-image").value,
        address: document.getElementById("client-address").value,
        phoneNumber: document.getElementById("client-phone").value,
        gender: document.getElementById("client-gender").value,
        email: document.getElementById("client-email").value,
        dob: document.getElementById("client-birthday").value,
    }
    if(listCustomer[index].avatar=="")
         setAutoAvatarForCustomer(listCustomer[index])
    let value
    if(document.getElementById("client-access").value=="Khách hàng")
        value=1
    else
        value=2
    lsAccount[index] = {
        id :    lsAccount[index].id,
        dateCreate: new Date(),
        username: document.getElementById("client-account").value,
        password: document.getElementById("client-password").value,
        positionID: value,
    }
    localStorage.setItem("listCustomer", JSON.stringify(listCustomer))
    localStorage.setItem("listAccount", JSON.stringify(lsAccount))
    document.getElementById("save").style.display = "block"
    document.getElementById("update").style.display = "none"

    document.getElementById("add_header").style.display = "block"
    document.getElementById("editHeader").style.display = "none"
    renderClient()
    resetInput()
    }
    else
        alert("Insufficient or incorrect input information");
}
//Xóa thông tin
function deleteClient(index) {
    let listCustomer = localStorage.getItem("listCustomer") ? JSON.parse(localStorage.getItem("listCustomer")) : []
    let lsAccount = localStorage.getItem("listAccount") ? JSON.parse(localStorage.getItem("listAccount")) : []
    let lsCart = localStorage.getItem("listCart") ? JSON.parse(localStorage.getItem("listCart")) : []
    if (confirm("Are you sure you want to delete?")){
        listCustomer.splice(index, 1)
        lsAccount.splice(index, 1)
        lsCart.splice(index, 1)
    }
    localStorage.setItem("listCustomer", JSON.stringify(listCustomer))
    localStorage.setItem("listAccount", JSON.stringify(lsAccount))
    localStorage.setItem("listCart", JSON.stringify(lsCart))
    renderClient()
}

function clientForm()
{
    let str  =  
                '       <div class="client_form" >                 ' +
                '       <div class="client_row client_account">  ' +
                '       <label for="name" class="form_label">Username*: </label>' +
                '       <input placeholder= " Nhập tên tài khoản" class="form_input" type="text" id="client-account">  ' +
                '       <div class="error-message"></div>'+
                '       </div>'+

                '       <div class="client_row client_password">  ' +
                '       <label for="name" class="form_label">Password*: </label>' +
                '       <input placeholder= " Nhập mật khẩu" class="form_input" type="text" id="client-password">  ' +
                '       <div class="error-message"></div>'+
                '       </div>'+

                '       <div class="client_row client_access">'+
                '       <label for="name" class="form_label">Privilege: </label>' +
                '       <select class="form_input" name="" id="client-access">'+
                    '       <option value="Khách hàng">Customer</option>'+
                    '       <option value="Admin">Admin</option>'+
                '       </select>'+
                '       <div class="error-message"></div>'+
                '       </div>'+

                '       <div class="client_row client_name">'+
                '       <label for="name" class="form_label">Name*: </label>' +
                '       <input placeholder= " Nhập họ tên" class="form_input" type="text" id="client-name">  ' +
                '       <div class="error-message"></div>'+
                '       </div>'+


                '       <div class="client_row client_address">  '+
                '       <label for="name" class="form_label">Address*: </label>'+
                '       <input placeholder=" Nhập địa chỉ" class="form_input" type="text" id="client-address">'+
                '       <div class="error-message"></div>'+
                '       </div>'+
        
                '       <div class="client_row client_phone">'+
                '       <label for="name" class="form_label">Number Phone*: </label>'+
                '       <input placeholder=" Nhập số điện thoại" class="form_input" type="text" id="client-phone">'+
                '       <div class="error-message"></div>'+
                '       </div>'+
                
                '       <div class="client_row client_gender">'+
                '       <label for="name" class="form_label">Gender: </label>'+
                '       <select class="form_input" name="" id="client-gender">'+
                    '       <option value="Nam">Male</option>'+
                    '       <option value="Nữ">Female</option>'+
                    '       <option value="No chossen">No choosen</option>'+
                '       </select>'+
                '       <div class="error-message"></div>'+
                '       </div> ' +
        
                '       <div class="client_row client_email">'+
                '       <label for="name" class="form_label">Email*: </label>'+
                '       <input placeholder=" Nhập email" class="form_input" type="text" id="client-email">'+
                '       <div class="error-message"></div>'+
                '       </div>'+
                
                '       <div class="client_row client_birthday">'+
                '       <label for="name" class="form_label">Birthday: </label>'+
                '       <input placehover=" Nhập ngày sinh" class="form_input" type="date" id="client-birthday">'+
                '       <div class="error-message"></div>'+
                '       </div>'+
                
                
                '       <div class="form-group">'+
                    '       <input id="client-index" type="hidden">'+
                '       </div>'+

                '       <div class="client_row">'+
                '           <button class="btn" id="save" onclick="addNew()">Thêm</button>'+
                '           <button class="btn" id="update" onclick="changeClient()" style="display: none">Lưu</button>'
                '       </div>'+

                '       </div>'
    document.getElementById('addClientField').innerHTML = str;
}

function displayND() {   
    document.getElementById('DSSP').style.display = "none";   
    document.getElementById('SSP').style.display = "none";
    document.getElementById('ND').style.display = "block";
    document.getElementById("editHeader").style.display = "none"
    document.getElementById('TK').style.display = "none";
    document.getElementById('DH').style.display = "none";
}