window.onload=innerLandingPage();

function innerLandingPage(){
    var content = document.getElementById('main');
    var contentInner=
    `<div id="header">
        <div id="container">
            <div id="logo"></div>
            <div id="nav">
                <ul id="nav-list">
                    <li onclick="innerLandingPage();" id="home">
                        <i class="fa-solid fa-house"></i>
                        Home
                        <div class="animate"></div>
                    </li>
                    <li onclick="innerProductPage();" id="pr-page-nav">
                        <i class="fa-brands fa-shopify"></i>
                        Products
                        <div class="animate"></div>
                    </li>
                    <li onclick="innerLocationPage();">
                        <i class="fa-sharp fa-solid fa-location-dot"></i>
                        Location
                        <div class="animate"></div>
                    </li>
                    <li onclick="innerContact();">
                        <i class="fa-solid fa-barcode"></i>
                        About us
                        <div class="animate"></div>
                    </li>
                </ul>
            </div>
            <div id="group-account">

                <div class="search-icon icon">
                    <i class="ti-search"></i>
                </div>
                
                <div class="cart-icon icon" onclick="innerCartPage();">
                    <i class="ti-shopping-cart"></i>
                    <div class="notify" data_count_pr="0"></div>
                </div>

                <div class="setting-icon icon" title="Change mode" style="display:none" onclick="changeMode(this)">
                    <i class="fa-sharp fa-solid fa-gear"></i>
                    <div class="option-mode popUp-card" style="display:none">
                        <p>Customer mode</p>
                        <p>Manager mode</p>
                    </div>
                </div>

                <div class="account-icon icon" onclick="containerInfoCustomer(this);">
                    <i class="ti-user"></i>
                    <div class="account-info popUp-card" style="display:none">
        
                    </div>
                </div>
                
                <div class="login icon" data-before="Login" onclick="innerLoginPage();">
                    <i class="ti-shift-right"></i>
                </div>
            </div>
        </div>
    </div>

    <div id="content">   
        <div class="slide-container">
            <div class="slider">

                <!--First background-->
                <input type="radio" name="radio-buttons" id="first" checked>
                <div class="slide-image image-3">
                    <img src="./assets/img/home/slider/First.png" alt="">
                    <div class="slide-prepare">
                        <!--left-->
                        <div class="left-bar">
                            <label for="third" class="previous">
                                <i class="ti-angle-left"></i>
                            </label>
                        </div>
                        
                        <!--right-->
                        <div class="right-bar">
                            <label for="second" class="next">
                                <i class="ti-angle-right"></i>
                            </label>
                        </div>
                    </div>
                </div>

                <!--Second background-->
                <input type="radio" name="radio-buttons" id="second">
                <div class="slide-image image-2">
                    <img src="./assets/img/home/slider/Second.png" alt="">
                    <div class="slide-prepare">
                        <!--left-->
                        <div class="left-bar">
                            <label for="first" class="previous">
                                <i class="ti-angle-left"></i>
                            </label>
                        </div>
                        
                        <!--right-->
                        <div class="right-bar">
                            <label for="third" class="next">
                                <i class="ti-angle-right"></i>
                            </label>
                        </div>
                    </div>
                </div>
                
                <!--Third background-->
                <input type="radio" name="radio-buttons" id="third">
                <div class="slide-image image-3">
                    <img src="./assets/img/home/slider/Third.png" alt="">
                    <div class="slide-prepare">
                        <!--left-->
                        <div class="left-bar">
                            <label for="second" class="previous">
                                <i class="ti-angle-left"></i>
                            </label>
                        </div>
                        
                        <!--right-->
                        <div class="right-bar">
                            <label for="first" class="next">
                                <i class="ti-angle-right"></i>
                            </label>
                        </div>
                    </div>
                </div>
                
                <div class="radio-dots">
                    <label for="first" class="radio-dot" id="img-dot1"></label>
                    <label for="second" class="radio-dot" id="img-dot2"></label>
                    <label for="third" class="radio-dot" id="img-dot3"></label>
                </div>

            </div>
        </div>


        <div class="demo-products">
            <h1 class="title-shopping">
                <i class="fa-solid fa-bag-shopping"></i>
                V-shoe Shopping
            </h1>
            <div class="products hot">
                <div class="banner-products">
                    <div class="container">

                        <h1><i class="fa-sharp fa-solid fa-fire-flame-curved"></i>Hot</h1>

                        <div class="product">
                            <img src="./assets/img/product/demo.jpg" alt="">
                        </div>
                        <div class="product">
                            <img src="./assets/img/product/demo.jpg" alt="">
                        </div>
                        <div class="product">
                            <img src="./assets/img/product/demo.jpg" alt="">
                        </div>
                        <div class="product">
                            <img src="./assets/img/product/demo.jpg" alt="">
                        </div>
                    </div>

                    <div class="banner">
                        <img src="./assets/img/home/banner/hot.png" alt="">
                    </div>
                </div>
                
            </div>

            <div class="products sport">
                <div class="banner-products">

                    <div class="banner">
                        <img src="./assets/img/home/banner/sport.png" alt="">
                    </div>

                    <div class="container">
                        <h1><i class="fa-sharp fa-solid fa-volleyball"></i>Sport</h1>

                        <div class="product">
                            <img src="./assets/img/product/demo.jpg" alt="">
                        </div>
                        <div class="product">
                            <img src="./assets/img/product/demo.jpg" alt="">
                        </div>
                        <div class="product">
                            <img src="./assets/img/product/demo.jpg" alt="">
                        </div>
                        <div class="product">
                            <img src="./assets/img/product/demo.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>

            <div class="products affordable">
                <div class="banner-products">
                    <div class="container">
                        <h1><i class="fa-sharp fa-solid fa-hand-holding-dollar"></i>Affordable</h1>

                        <div class="product">
                            <img src="./assets/img/product/demo.jpg" alt="">
                        </div>
                        <div class="product">
                            <img src="./assets/img/product/demo.jpg" alt="">
                        </div>
                        <div class="product">
                            <img src="./assets/img/product/demo.jpg" alt="">
                        </div>
                        <div class="product">
                            <img src="./assets/img/product/demo.jpg" alt="">
                        </div>
                    </div>

                    <div class="banner">
                        <img src="./assets/img/home/banner/affordable.png" alt="">
                    </div>
                </div>
            </div>

            <div class="products luxury">
                <div class="banner-products">

                    <div class="banner">
                        <img src="./assets/img/home/banner/luxury.png" alt="">
                    </div>

                    <div class="container">

                        <h1><i class="fa-solid fa-star"></i>Luxury</h1>

                        <div class="product">
                            <img src="./assets/img/product/demo.jpg" alt="">
                        </div>
                        <div class="product">
                            <img src="./assets/img/product/demo.jpg" alt="">
                        </div>
                        <div class="product">
                            <img src="./assets/img/product/demo.jpg" alt="">
                        </div>
                        <div class="product">
                            <img src="./assets/img/product/demo.jpg" alt="">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <div class="footer">
        <div class="top-footer">
            <div class="email">
                <div class="logo">
                    <p>V-Shoes.</p>
                </div>
                <form action="" method="get">
                    <label for="email">Subscribe & get 10% off your next order</label>
                    <input type="email" name="txtemail" id="email" placeholder="Enter your email...">
                    <input type="submit" value="Subscribe" id="button">
                    <div class="icon-contact">
                        <i class="icon-tw fa-brands fa-twitter"></i>
                        <i class="icon-fb fa-brands fa-facebook"></i>
                        <i class="icon-ig fa-brands fa-square-instagram"></i>
                        <i class="icon-yt fa-brands fa-youtube"></i>
                    </div>
                </form>
            </div>
            <div class="relate">
                <div class="info">
                    <h3>Customer care</h3>
                    <p>Contact us</p>
                    <p>FAQs</p>
                    <p>Returns & Exchanges</p>
                    <p>Tearms of service</p>
                    <p>Privacy Policy</p>
                </div>
                <div class="info">
                    <h3>Shop</h3>
                    <p>Hot</p>
                    <p>Favourite</p>
                    <p>Discount</p>
                    <p>Voucher</p>
                    <p>Sale</p>
                </div>
                <div class="info">
                    <h3>My Account</h3>
                    <p>Sign in/Register</p>
                    <p>My Wishlist</p>
                    <p>My Cart</p>
                </div>
            </div>
        </div>

        <div class="payment-card">
            <p><i class="fa-regular fa-copyright"></i> 2022 V-shoes, Inc.</p>
            <div class="icon-card">
                <img src="./assets/img/footer/payment-removeb.png" alt="">
            </div>
        </div>
    </div>

    <!-- Popup items -->
    <div class="container-popUp">
        
    </div>
    <!-- End popup items -->`;
    content.innerHTML=contentInner;
    i=0;
    slide();
}

var i=0;

slide();
function slide(){
    var arrslide=document.getElementsByName('radio-buttons');
    if(arrslide[i] != null){
        arrslide[i].checked=true;
        if(arrslide[i].checked){
            console.log(arrslide[i].id + "is checked");
        }
        i++;
        if(i >= 3){
            i=0;
        }
        setTimeout(slide, 4000);
    }
    
}

function changeMode(modeBtn){
    var settingBtn = modeBtn.querySelector('.option-mode');
    var settingIcon = modeBtn.querySelector('i');
    if(settingBtn.style.display == 'none'){
        settingIcon.style = `transform: rotate(90deg);`
        settingBtn.style.display = 'block';
    }else{
        settingIcon.style = `transform: rotate(0deg);`
        settingBtn.style.display = 'none';
    }
}

function containerInfoCustomer(tag){
    var accoutInfo = tag.querySelector('.account-info');
    var selection = tag.querySelector('#selection-file');
    if(accoutInfo.style.display == 'none'){

        if(activeAccount == null){
            accoutInfo.innerHTML = "Nothing here";
        }else{
            accoutInfo.innerHTML = `
            <div class="avt-container">
                <div class="avt">
                    <img src="${activeAccount.avatar}" alt="">
                </div>
                <input type="file" name="selection-file" id="selection-file" class="change-avt" onchange="chooseFile(this);">
            </div>
            <div class="customer-info">
                <div class="custom-name">
                    <p class="title">Name: </p>
                    <p class="content">${activeAccount.name}</p>
                </div>
                <div class="custom-dob">
                    <p class="title">DoB: </p>
                    <p class="content">${activeAccount.dob}</p>
                </div>
                <div class="custom-pnum">
                    <p class="title">Phone: </p>
                    <p class="content">${activeAccount.phoneNumber}</p>
                </div>
                <div class="custom-email">
                    <p class="title">Email: </p>
                    <p class="content">${activeAccount.email}</p>
                </div>
            </div>`;
        }
        accoutInfo.style.display = 'flex';
    }else{
        console.log(accoutInfo.textContent == 'Nothing here');
        console.log(selection.checked == false);
        if(accoutInfo.textContent == 'Nothing here' || selection.checked){
            accoutInfo.style.display = 'none';
        }
        
    }
}