document.querySelector('.product-page')

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
    checkDefaultInput();
}

function innerProducts(){
    var listProduct = '';
    lsProduct = JSON.parse(data.getItem("listProduct"));
    for(i = 0; i < lsProduct.length; i++){
        listProduct += showDetailProduct(lsProduct[i]);
    }
    document.querySelector('.product-page').querySelector('.container-products').innerHTML = listProduct;
    
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
    var container = document.querySelector('.container-popUp');
    container.innerHTML=`<div class="size-guide">
                            <img src="./assets/img/product/chon-size.png" alt="">
                            <i class="fa-solid fa-xmark" onclick="closeChooseSizeGuide();"></i>
                        </div>`;
    container.style.display = 'flex';
}

function closeChooseSizeGuide(){
    document.querySelector('.container-popUp').style.display = 'none';
}

function openProductCard(view_button){
    var container = document.querySelector('.container-popUp');
    var id_pr = view_button.querySelector('.id-product').textContent;
    lsProduct = JSON.parse(data.getItem("listProduct"));
    for(i = 0; i < lsProduct.length; i++){
        if(lsProduct[i].id == id_pr){
            container.innerHTML = showProductInForm(lsProduct[i]);
            innerOptionSize(lsProduct[i].min_size, lsProduct[i].max_size, "chosen-size");
        }     
    }
    
    container.style.display='flex'
}

function closeProductCard(){
    document.querySelector('.container-popUp').style.display = 'none';
}

var model=document.querySelector('.container-popUp');
window.onclick=function(event){
    if(event.target == model){
        closeChooseSizeGuide();
    }
    
}

function checkDefaultInput(){
    var noneInp = document.getElementsByClassName('none');
    for( i = 0; i < noneInp.length; i++){
        noneInp[i].checked = true;
    }
    var allInp = document.querySelector('#panel-price').querySelectorAll('input');
    for(i = 0; i < allInp.length; i++){
        if(allInp[i].id != 'none-price'){
            allInp[i].checked = false; 
        }
        
    }
}

function renderCheckInput(inpContainer){
    var allInp = document.querySelector('#panel-price').querySelectorAll('input');
    var inp = inpContainer.querySelector('input');

    if(inp.id != 'none-price' && inp.checked == true){
        document.querySelector('#none-price').checked = false;
    }else{
        if(inp.id == 'none-price'){
            for(i = 0; i < allInp.length; i++){
                if(allInp[i].id != 'none-price'){
                   allInp[i].checked = false; 
                }
                
            }
        }
    }
}

function renderPriceScope(){
    var panelPrice = document.querySelector('#panel-price');
    var scopePrice = document.querySelector('.scope-price');
    var allInp = panelPrice.querySelectorAll('input');
    var amount = allInp.length;
    var min = scopePrice.querySelector('.filter-min');
    var max = scopePrice.querySelector('.filter-max');
    var checkedInput = [];
    var count = 0;

    // Check if input noneprice is checked set default scope price
    for( i=0; i<amount; i++){
        if(allInp[i].checked){
            checkedInput = checkedInput.concat(allInp[i]);
        }
    }

    if(panelPrice.querySelector('#none-price').checked || checkedInput.length == 0){
        min.value = 300000;
        max.value = 5000000;
        return;
    }


    if(checkedInput.length == 1){
        min.value = 300000;
        max.value = checkedInput[0].value;
        return;
    }

    min.value = checkedInput[0].value;
    if(checkedInput.length == 2){
        max.value = checkedInput[1].value;
        return;
    }else{
        max.value = checkedInput[checkedInput.length-1].value;
        return;
    }    
}