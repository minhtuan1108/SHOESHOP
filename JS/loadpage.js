window.onload=innerLandingPage();
window.addEventListener('click',function(){
    if(this.document.getElementById('home').selected){
        console.log("Có ai hoq cứu tui!");
        slide();
    }
});

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

function innerProductPage(){
    var content=document.getElementById('content');
    var contentInner = `
    <div class="product-page">
        <div class="container">
            <div class="left-column">
                <div class="brands">
                    <h2># Brands</h2>
                    <div class="brand" id="all">All</div>
                    <div class="brand" id="Asics">Asics</div>
                    <div class="brand" id="Mizuno">Mizuno</div>
                    <div class="brand" id="Beyono">Beyono</div>
                    <div class="brand" id="Nike">Nike</div>
                    <div class="brand" id="Adidas">Adidas</div>
                </div>
                <div class="option-filter">
                    <div class="title">
                        <h2># Filter</h2>
                        <button class="clear" onclick="checkDefaultInput();">Clear
                            <i class="fa-sharp fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div class="group-panel">
                        <div class="gen">
                            <div class="panel-heading" id="gen" onclick="hiddenAndShowPanel(this);">
                                <h3>By gender</h3>
                                <i class="fa-sharp fa-solid fa-chevron-down"></i>
                            </div>
                            <div class="panel-content" id="panel-gen">
                                <div class="container-radio">
                                    <input type="radio" name="gender" id="male">
                                    <label for="male">Male</label>
                                </div>
                                <div class="container-radio">
                                    <input type="radio" name="gender" id="female">
                                    <label for="female">Female</label>
                                </div>
                                <div class="container-radio">
                                    <input type="radio" name="gender" id="none-gender" class="none">
                                    <label for="none-gender">No choosen</label>
                                </div>                                            
                            </div>
                        </div>
                        
                        <div class="price" onclick="console.log('hello');">
                            <div class="panel-heading" id="price" onclick="hiddenAndShowPanel(this);">
                                <h3>By price</h3>
                                <i class="fa-sharp fa-solid fa-chevron-down"></i>
                            </div>
                            <div class="panel-content" id="panel-price" onclick="renderPriceScope();">
                                <div class="container-radio" onclick="renderCheckInput(this);">
                                    <input type="checkbox" name="price" id="mock1" value="300000">
                                    <label for="mock1">300000₫</label>
                                </div>
                                <div class="container-radio" onclick="renderCheckInput(this);">
                                    <input type="checkbox" name="price" id="mock2" value="1000000">
                                    <label for="mock2">1000000₫</label>
                                </div>
                                <div class="container-radio" onclick="renderCheckInput(this);">
                                    <input type="checkbox" name="price" id="mock3" value="2000000">
                                    <label for="mock3">2000000₫</label>
                                </div>  
                                <div class="container-radio" onclick="renderCheckInput(this);">
                                    <input type="checkbox" name="price" id="mock4" value="3000000">
                                    <label for="mock4">3000000₫</label>
                                </div>  
                                <div class="container-radio" onclick="renderCheckInput(this);">
                                    <input type="checkbox" name="price" id="mock5" value="4000000">
                                    <label for="mock5">4000000₫</label>
                                </div>  
                                <div class="container-radio" onclick="renderCheckInput(this);">
                                    <input type="checkbox" name="price" id="mock6" value="5000000">
                                    <label for="mock6">5000000₫</label>
                                </div> 
                                <div class="container-radio" onclick="renderCheckInput(this);">
                                    <input type="checkbox" name="price" id="none-price" class="none" value="0">
                                    <label for="none-price">No choosen</label>
                                </div>    
                                <div class="scope-price">
                                    <div>
                                        <input type="number" class="filter-min" value="300000">
                                        <span>₫</span>
                                    </div>
                                    
                                    <div>
                                        <input type="number" class="filter-max" value="5000000">
                                        <span>₫</span>
                                    </div>
                                </div>                                                    
                            </div>
                            
                        </div>
                        <div class="size">
                            <div class="panel-heading" id="size" onclick="hiddenAndShowPanel(this);">
                                <h3>By size</h3>
                                <i class="fa-sharp fa-solid fa-chevron-down"></i>
                            </div>
                            <div class="panel-content" id="panel-size">
                                <div class="container-radio">
                                    <input type="radio" name="size" id="38">
                                    <label for="38">38</label>
                                </div>
                                <div class="container-radio">
                                    <input type="radio" name="size" id="39">
                                    <label for="39">39</label>
                                </div>
                                <div class="container-radio">
                                    <input type="radio" name="size" id="40">
                                    <label for="40">40</label>
                                </div>
                                <div class="container-radio">
                                    <input type="radio" name="size" id="41">
                                    <label for="41">41</label>
                                </div>
                                <div class="container-radio">
                                    <input type="radio" name="size" id="41-5">
                                    <label for="41-5">41.5</label>
                                </div>
                                <div class="container-radio">
                                    <input type="radio" name="size" id="42">
                                    <label for="42">42</label>
                                </div>
                                <div class="container-radio">
                                    <input type="radio" name="size" id="42-5">
                                    <label for="42-5">42.5</label>
                                </div>
                                <div class="container-radio">
                                    <input type="radio" name="size" id="43">
                                    <label for="43">43</label>
                                </div>
                                <div class="container-radio">
                                    <input type="radio" name="size" id="none-size" class="none">
                                    <label for="none-size">No choosen</label>
                                </div>
                                <div class="size-guide">
                                    <p>You don't know how to choes exactly size? 
                                        <span class="chooes-size-guide" onclick="openChooseSizeGuide();">Let us</span>
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-content">
                <h2 class="brand">Giày Asics chính hãng</h2>
                <div class="banner">
                    <img src="./assets/img/product/banner/giay-asics-chinh-hang.jpg" alt="">
                </div>
                <div class="amount-product">
                    <div class="label-amount">Amount of product per page:</div>
                    <select name="product-on-page" id="amount" class="amount">
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                    </select>
                </div>
                <div class="container-products">
                    
                </div>

                <div class="pagination">
                    <div class="iopage page-number previous-button">
                        <i class="fa-solid fa-angle-left"></i>
                        Previous
                    </div>
                    <div class="page-number first-page">1</div>
                    <div class="page-number dot-page"></div>
                    <div class="page-number previous">3</div>
                    <div class="page-number current">4</div>
                    <div class="page-number next">5</div>
                    <div class="page-number dot-page"></div>
                    <div class="page-number last-page">10</div>
                    <div class="iopage page-number next-button">
                        Next
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    content.innerHTML=contentInner;
    innerProducts();

}

function innerProducts(){
    var listProduct = '';
    for(i = 0; i < lsProduct.length; i++){
        listProduct += lsProduct[i].showDetail();
    }
    console.log(listProduct);
    document.querySelector('.product-page').querySelector('.container-products').innerHTML = listProduct;
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

function hiddenAndShowPanel(obj){
    var idPanel = obj.id;
    var panel;
    var icon;
    switch (idPanel) {
        case "gen":
            panel = document.querySelector("#panel-gen");
            icon = document.querySelector(".gen").querySelector("i");
            console.log(panel);
            console.log(panel.style.display);
            console.log(panel.offsetHeight);

            break;
    
        case "price":
            panel = document.querySelector("#panel-price");
            icon = document.querySelector(".price").querySelector("i");
            break;

        case "size":
            panel = document.querySelector("#panel-size");
            icon = document.querySelector(".size").querySelector("i");
            break;

        default:
            break;
    }

    if(panel.offsetHeight == 0){
            console.log("none thì vào đây!");
            panel.style = `height: fit-content;
                            margin: 5px;
                            margin-bottom: 15px;
                            display: flex;
                            `;
            icon.style = 'transform: rotate(0);';
        }else {
            console.log("flex thì vào đây!");
            panel.style = `height: 0;
                            margin: 0;
                            display: none;
                            `;
            icon.style = 'transform: rotate(-90deg);'
        }
        console.log(panel);
}

function openChooseSizeGuide(){
    document.querySelector('.container-guide').style.display = 'flex';
}

function closeChooseSizeGuide(){
    document.querySelector('.container-guide').style.display = 'none';
}