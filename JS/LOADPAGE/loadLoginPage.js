var check = false;

function innerLoginPage(){
    document.querySelector('#content').innerHTML= `<div class="container-login"></div>`;
    goToSignUpForm();
}

function goToSignInForm(){
    var containerLogin = document.querySelector('#main');

    
    var signInForm = `
    <div class="container-login">
        <div class="container-form container-signIn">
            <div class="clear-button" onclick="innerLandingPage(); slide();">
                <i class="fa-solid fa-x"></i>
            </div>

            <form class="signIn-form">
                <div class="heading-form">
                    <h2>Sign In</h2>
                </div>
                <div class="content-form">

                    
                    <!-- User name -->
                    <div class="username">
                        <label for="user">
                            <i class="fa-solid fa-user"></i>
                        </label>
                        <input type="text" name="user" id="user" placeholder="Enter user name *" oninput="checkingValidDataHoldTime(this);">
                    </div>
                    <div class="announce username-annouce"></div>

                    <!-- Password -->
                    <div class="password">
                        <label for="pass">
                            <i class="fa-solid fa-lock"></i>
                        </label>
                        <input type="password" name="pass" id="pass" placeholder="Password *" oninput="checkingValidDataHoldTime(this);">
                    </div>
                    <div class="announce password-annouce"></div>

                    
                </div>

                <div class="button">
                    <input type="button" value="Sign In" onclick="signIn(this);">
                </div>
                <div class="announce forgot-password"></div>

                <div class="link-signIn">
                    <p onclick="goToSignUpForm();">Sign Up</p>
                </div>
            </form>
        </div>
    </div>`;
    containerLogin.innerHTML=signInForm;
    
}

function goToSignUpForm(){
    var signUpForm = `
    <div class="container-login">
        <div class="container-form container-signUp">
            <div class="clear-button" onclick="innerLandingPage(); slide();">
                <i class="fa-solid fa-x"></i>
            </div>
            <form action="" method="get" class="signUp-form">
                <div class="heading-form">
                    <h2>Sign Up</h2>
                </div>
                <div class="content-form">

                    <!-- Customer name -->
                    <div class="customer-name">
                        <label for="name">
                            <i class="fa-solid fa-address-card"></i>
                        </label>
                        <input type="text" name="name" id="name" placeholder="Enter full name">
                    </div>

                    <!-- Address -->
                    <div class="address">
                        <label for="addr">
                            <i class="fa-solid fa-location-dot"></i>
                        </label>
                        <input type="text" name="adrress" id="addr" placeholder="Enter address">
                    </div>

                    <!-- Phone number -->
                    <div class="phonenumber">
                        <label for="phone">
                            <i class="fa-solid fa-phone"></i>
                        </label>
                        <input type="text" name="phone" id="phone" placeholder="Enter phone number *" oninput="checkingValidDataHoldTime(this);">
                    </div>
                    <div class="announce phone-annouce"></div>

                    <!-- Email -->
                    <div class="email">
                        <label for="email">
                            <i class="fa-solid fa-envelope"></i>
                        </label>
                        <input type="email" name="email" id="email" placeholder="Enter your email *" oninput="checkingValidDataHoldTime(this);">
                    </div>
                    <div class="announce email-annouce"></div>

                    <!-- User name -->
                    <div class="username">
                        <label for="user">
                            <i class="fa-solid fa-user"></i>
                        </label>
                        <input type="text" name="user" id="user" placeholder="Enter user name *" oninput="checkingValidDataHoldTime(this);">
                    </div>
                    <div class="announce username-annouce"></div>

                    <!-- Password -->
                    <div class="password">
                        <label for="pass">
                            <i class="fa-solid fa-lock"></i>
                        </label>
                        <input type="password" name="pass" id="pass" placeholder="Password *" oninput="checkingValidDataHoldTime(this);">
                    </div>
                    <div class="announce password-annouce"></div>

                    <!-- Repeat password -->
                    <div class="repeat">
                        <label for="re-pass">
                            <i class="fa-solid fa-lock"></i>
                        </label>
                        <input type="password" name="re-pass" id="re-pass" placeholder="Repeat Password*">
                    </div>
                    <div class="announce repeat-annouce"></div>
                </div>

                <div class="button">
                    <input type="button" value="Sign Up" onclick="addCustomer(this);">
                </div>

                <div class="link-signIn">
                    <p onclick="goToSignInForm();">Sign in</p>
                </div>
            </form>
        </div>
    </div>`;
    
    document.querySelector('#main').innerHTML = signUpForm;
}

//Hàm xử lý dữ liệu tài khoản đăng ký
function addCustomer(button){
    var formContent = button.form.querySelector('.content-form');
    var name = formContent.querySelector("#name");
    var addr = formContent.querySelector("#addr");
    var email = formContent.querySelector("#email");
    var phone = formContent.querySelector("#phone");
    var user = formContent.querySelector("#user");
    var pass = formContent.querySelector("#pass");
    var rePass = formContent.querySelector("#re-pass");
    var errorIndexs = [];
    
    
    
    if(!isValidPhoneNumber(phone.value)){
        console.log("Sai số điện thoại");
        errorIndexs = errorIndexs.concat(phone);
    }

    if(!isValidEmail(email.value)){
        console.log("Có vào đây không!");
        errorIndexs = errorIndexs.concat(email);
    }

    if(!isValidUserName(user.value)){
        errorIndexs = errorIndexs.concat(user);
    }

    if(!isValidPassword(pass.value)){
        errorIndexs = errorIndexs.concat(pass);
    }


    if(errorIndexs.length == 0){
        var announce = formContent.querySelector('.repeat-annouce');

        if(formContent.querySelector('#re-pass').value == pass.value){
            announce.style.display = 'none';
            if(isInitCustomer(email.value, phone.value,user.value)){
                alert("Sign in successfully! Welcom to become our member.");
                saveDataCustomer(name.value, addr.value, phone.value, email.value, user.value, pass.value);
                innerLandingPage();
                check = false;
            }
                         
        }else{
            check = true;
            rePass.focus();
            announce.style.display = 'block';
            if(rePass.value == ''){
                announce.innerHTML = '*Repeat password can\'t empty';
            }
            announce.innerHTML = '*Your repeat password is incorrect!';
        }
    }else{
        errorIndexs[0].focus;
        check = true;
    }
    return true;
    
}

//Tạo giỏ hàng cho khách hàng
function createCart(idAccount){
    lsCart = JSON.parse(data.getItem("listCart"));
    var idCart = createGeneralID(lsCart);
    lsCart = lsCart.concat(new cart(idCart, idAccount));
    data.setItem("listCart", JSON.stringify(lsCart));
}

function saveAccount(id, username, pass, position){
    lsAccount = JSON.parse(data.getItem("listAccount"));
    var acc = new account(id, username, pass, new Date(), position);
    lsAccount = lsAccount.concat(acc);
    data.setItem("listAccount", JSON.stringify(lsAccount));
}

function saveDataCustomer(name, addr, phone, email, username, pass){
    lsCustomer = JSON.parse(data.getItem("listCustomer"));
    var id = createGeneralID(lsCustomer);
    var idAcc = createGeneralID(JSON.parse(data.getItem("listAccount")));
    var custom = new customer(id, name, phone, email, addr, idAcc);


    lsCustomer = lsCustomer.concat(custom);
    saveAccount(idAcc, username, pass, 1);
    activeAccount = custom;
    data.setItem("activeAccount", JSON.stringify(activeAccount));
    data.setItem("listCustomer", JSON.stringify(lsCustomer));

    //Sau khi đăng ký sẽ tạo cho khách hàng một giỏ hàng
    createCart(idAcc);
}

function isValidPhoneNumber(phone){
    var announce = document.querySelector('.phone-annouce');
    var len = phone.length;
    console.log(len);
    var annouceText='';
    if(phone == ''){
        annouceText = '*Phone number can\'t empty';
        console.log(annouceText);
    }else{
        if(len < 10 || len > 12){
            annouceText = '*Your phone number should be 10-12 numbers';
            console.log(annouceText);
        }else{
            try {
                parseInt(phone);
                console.log("Đúng số điện thoại!");
                announce.style.display='none';
                return true;
            } catch (error) {
                annouceText = '*Please, enter number 0-9';
                console.log(annouceText);
            }
        }
    }
    announce.style.display='block';
    announce.innerHTML = annouceText;
    return false;
    
}


function isValidEmail(email){
    var regex = /^[A-Z0-9._]+@[A-Z0-9._]+\.[A-Z]{2,4}$/i;
    var checked = email.match(regex);
    var announce = document.querySelector('.email-annouce');
    var annouceText = '';

    console.log(email);
    if(email == ''){
        annouceText = '*Email can\'t empty'
    }else{
        if(checked != email){    
            annouceText = '*Sorry, only fill follow digits a-z, 0-9, A-Z, ., _';
            
        }else{
            announce.style.display='none';
            return true;
        } 
    }

    announce.innerHTML = annouceText;
    announce.style.display='block';
    return false;
}

function isValidUserName(username){
    var regex = /^[A-Z0-9_-]+$/i;
    var checked = username.match(regex);
    var announce = document.querySelector('.username-annouce');
    var annouceText = '';
    if(username == ''){
        annouceText = '*User name can\'t empty';
    }else{
        if(username != checked){
            annouceText = '*Sorry, just fill a-z, A-Z, 0-9, -, _';
        }else{
            announce.style.display='none';
            return true;
        } 
    }

    announce.innerHTML = annouceText;
    announce.style.display = 'block';
    return false;
}

function isValidPassword(pass){
    var regex = /^[A-Z0-9]+$/i;
    var checked = pass.match(regex);
    var announce = document.querySelector('.password-annouce');
    var annouceText = '';
    if(pass == ''){
        annouceText = '*Password can\'t empty';
    }else{
        if(pass != checked){
            annouceText = '*Sorry, just fill a-z, A-Z, 0-9';
        }else{
            announce.style.display = 'none';
            return true;
        } 
    }

    announce.innerHTML = annouceText;
    announce.style.display = 'block';
    return false
}

function isInitCustomer(email, phone, username){
    lsCustomer = JSON.parse(data.getItem("listCustomer"));
    var frm = document.querySelector('form');
    var mailAnnounce = frm.querySelector('.email-annouce');
    var phoneAnnounce = frm.querySelector('.phone-annouce');
    for(i = 0; i < lsCustomer.length; i++){

        if(phone == lsCustomer[i].phoneNumber){
            phoneAnnounce.style.display = 'block';
            phoneAnnounce.innerHTML = '*This phone number was used';
            return false;
        }

        if(email == lsCustomer[i].email){
            mailAnnounce.style.display = 'block';
            mailAnnounce.innerHTML = '*This email was used'
            return false;
        }                    
    }

    lsAccount = JSON.parse(data.getItem("listAccount"));
    var userAnnouce = frm.querySelector('.username-annouce');
    for(i = 0; i < lsAccount.length; i++){
        if(username == lsAccount[i].username){
            userAnnouce.style.display = 'block';
            userAnnouce.innerHTML = '*This username was used'
            return false;
        }
    }

    return true;
}

//Hàm kiểm tra dữ liệu input của người dùng liên tục sau khi người dùng nhập sai
function checkingValidDataHoldTime(input){
    if(check){
        if(input.name == 'email') isValidEmail(input.value);
        if(input.name == 'phone') isValidPhoneNumber(input.value);
        if(input.name == 'user') isValidUserName(input.value);
        if(input.name == 'pass') isValidPassword(input.value);
    }
}

//Hàm xử lý đăng nhập
function signIn(button){
    var formContent= button.form.querySelector('.content-form');
    var user = formContent.querySelector("#user");
    var pass = formContent.querySelector("#pass");
    var errorIndexs = [];

    if(!isValidUserName(user.value)){
        errorIndexs = errorIndexs.concat(user);
    }

    if(!isValidPassword(pass.value)){
        errorIndexs = errorIndexs.concat(pass);
    }

    if(errorIndexs.length == 0){
        if(signInRightAccount(user.value, pass.value)){
            alert("Sign in successfully! Welcom to V-shoe");
            innerLandingPage();
        }
    }else{
        errorIndexs[0].focus;
    }

}

function signInRightAccount(username, password){
    lsAccount = JSON.parse(data.getItem("listAccount"));
    var annoucePass = document.querySelector('.password-annouce');
    var announceUsername = document.querySelector('.username-annouce');

    if(lsAccount.length == 0){
        announceUsername.style.display = 'block';
        announceUsername.innerHTML = 'Account is not exist';
        check = true;
        return false;
    }
    for(i = 0; i < lsAccount.length; i++){

        if(username == lsAccount[i].username){
            announceUsername.style.display = 'none';
            if(password == lsAccount[i].password){
                annoucePass.style.display = 'none';
                activeAccount = getCustomerByIdAccount(lsAccount[i].id);
                data.setItem("activeAccount", JSON.stringify(activeAccount));
                check = false;
                return true;
            }else{
                annoucePass.style.display = 'block';
                annoucePass.innerHTML = 'Incorrect password';
                check = true;
                return false;
            }
        }else{
            announceUsername.style.display = 'block';
            announceUsername.innerHTML = 'Account is not exist';
            check = true;
            return false;
        }
    }
}