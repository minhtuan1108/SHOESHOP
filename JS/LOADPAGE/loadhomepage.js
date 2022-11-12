window.onload=innerLandingPage();

function innerLandingPage(){
    var content = document.getElementById('main');
    var contentInner=
    `<div id="header">
        <div id="container">
            <div id="logo"></div>
            <div id="nav">
                <ul id="nav-list">
                    <li onclick="innerLandingPage();" id="home">Home
                        <div class="animate"></div>
                    </li>
                    <li onclick="innerProductPage();" id="pr-page-nav">Products
                        <div class="animate"></div>
                    </li>
                    <li>Favourite
                        <div class="animate"></div>
                    </li>
                    <li>Discount
                        <div class="animate"></div>
                    </li>
                    <li onclick="innerContact();">About us
                        <div class="animate"></div>
                    </li>
                    <!-- <li>Giới thiệu
                        <div class="animate"></div>
                    </li> -->
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

                <div class="account-icon icon">
                    <i class="ti-user"></i>
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
                    <img src="./assets/img/slider/First.png" alt="">
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
                    <img src="./assets/img/slider/Second.png" alt="">
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
                    <img src="./assets/img/slider/Third.png" alt="">
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

            <div class="products hot">
                <h1><i class="fa-sharp fa-solid fa-fire-flame-curved"></i>Hot</h1>

                <div class="container">
                    <div class="product">
                        <img src="./assets/img/product/demo.jpg" alt="">
                        <p class="name">METASPEED SKY</p>
                    </div>
                    <div class="product">
                        <img src="./assets/img/product/demo.jpg" alt="">
                        <p class="name">METASPEED SKY</p>
                    </div>
                    <div class="product">
                        <img src="./assets/img/product/demo.jpg" alt="">
                        <p class="name">METASPEED SKY</p>
                    </div>
                    <div class="product">
                        <img src="./assets/img/product/demo.jpg" alt="">
                        <p class="name">METASPEED SKY</p>
                    </div>
                </div>
            </div>

            <div class="products sport">
                <h1><i class="fa-sharp fa-solid fa-volleyball"></i>Sport</h1>
                <div class="container">
                    <div class="product">
                        <img src="./assets/img/product/demo.jpg" alt="">
                        <p class="name">METASPEED SKY</p>
                    </div>
                    <div class="product">
                        <img src="./assets/img/product/demo.jpg" alt="">
                        <p class="name">METASPEED SKY</p>
                    </div>
                    <div class="product">
                        <img src="./assets/img/product/demo.jpg" alt="">
                        <p class="name">METASPEED SKY</p>
                    </div>
                    <div class="product">
                        <img src="./assets/img/product/demo.jpg" alt="">
                        <p class="name">METASPEED SKY</p>
                    </div>
                </div>
            </div>

            <div class="products affordable">
                <h1><i class="fa-sharp fa-solid fa-hand-holding-dollar"></i>Affordable</h1>
                <div class="container">
                    <div class="product">
                        <img src="./assets/img/product/demo.jpg" alt="">
                        <p class="name">METASPEED SKY</p>
                    </div>
                    <div class="product">
                        <img src="./assets/img/product/demo.jpg" alt="">
                        <p class="name">METASPEED SKY</p>
                    </div>
                    <div class="product">
                        <img src="./assets/img/product/demo.jpg" alt="">
                        <p class="name">METASPEED SKY</p>
                    </div>
                    <div class="product">
                        <img src="./assets/img/product/demo.jpg" alt="">
                        <p class="name">METASPEED SKY</p>
                    </div>
                </div>
            </div>

            <div class="products luxury">
                <h1><i class="fa-solid fa-star"></i>Luxury</h1>
                <div class="container">
                    <div class="product">
                        <img src="./assets/img/product/demo.jpg" alt="">
                        <p class="name">METASPEED SKY</p>
                    </div>
                    <div class="product">
                        <img src="./assets/img/product/demo.jpg" alt="">
                        <p class="name">METASPEED SKY</p>
                    </div>
                    <div class="product">
                        <img src="./assets/img/product/demo.jpg" alt="">
                        <p class="name">METASPEED SKY</p>
                    </div>
                    <div class="product">
                        <img src="./assets/img/product/demo.jpg" alt="">
                        <p class="name">METASPEED SKY</p>
                    </div>
                </div>
            </div>

        </div>

        <div class="map">
            <h1><i class="fa-solid fa-map"></i>Address</h1>
            <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.273207875388!2d106.61676371460538!3d10.713397992364312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752d5b6dd8ea7f%3A0x31d22e7d4e84c046!2zOTkgQW4gRC4gVsawxqFuZywgUGjGsOG7nW5nIDE2LCBRdeG6rW4gOCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1666253890040!5m2!1sen!2s" 
                allowfullscreen=""
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
                </iframe>
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

