window.onload=innerLandingPage();

function innerLandingPage(){
    var content = document.getElementById('content');
    var contentInner=
    `<div class="slide-container">
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
        
    </div>`
    content.innerHTML=contentInner;
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

