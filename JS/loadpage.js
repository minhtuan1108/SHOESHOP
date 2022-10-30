window.onload=insertLandingPage();
window.addEventListener('click',function(){
    if(this.document.getElementById('home').selected){
        slide();
    }
});

function insertLandingPage(){
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
}

var i=0;

slide();
function slide(){
    var arrslide=document.getElementsByName('radio-buttons');
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

function innerContact(){
    let list=[];
    list[0]=new Member("Võ Minh Tuấn", "3120410591","https://www.facebook.com/profile.php?id=100052483311803", "https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/273714156_460777322348374_4709534381351556646_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wMwdS39Apf0AX_M8pn_&tn=Td5he0jOTvh8hM6j&_nc_ht=scontent.fsgn8-2.fna&oh=00_AfALlrnS-u_oyf1ihaUccdqOSBkFy0Ue2jSE5piE3x8J6g&oe=63606833");
    list[1]=new Member("Lã Trần Minh Anh", "3120410028", "https://www.facebook.com/minhanh.latran.5", "https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-1/287201411_1260364664703828_5898508697427628098_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=J5fXTwZHxcEAX8QtI0u&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfBLooVkXe3SGDMbpo8y3FsSvh9hlBcozFsYLbsO79Ar1Q&oe=6361CBB2");
    list[2]=new Member("Nguyễn Hồ Khánh An", "3121410048", "https://m.facebook.com/100013596907860/", "https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-1/307112432_1498984490564767_8117870515551418617_n.jpg?stp=dst-jpg_p320x320&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=NE2XfFdW8AUAX9cPLuL&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfC_gvqJxP6hKyZTfiuAxDIKkV3einiPb7CNQEri8uvPCA&oe=6362DD0B");
    list[3]=new Member("Lê Vạn An", "3121560009", "https://www.facebook.com/profile.php?id=100047180527357", "https://scontent.fsgn13-4.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=po1ozqaSBowAX_ZWCNh&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfDkBgovEC46vQVdRFa1HWnKI1N0SMNEE-HM2-xZusoovw&oe=63845B78");


    var contactHtml=
    `<div class="container-info">
        <div class="container-cards" id="container-cards">
        </div>
    </div>`;

    document.getElementById('content').innerHTML=contactHtml;

    let cardHtml=" <!--Contact page-->";
    list.forEach((item) => {
        cardHtml+=item.returnInfoHtml();
    });

    console.log(cardHtml);

    document.getElementById('container-cards').innerHTML=cardHtml;
}