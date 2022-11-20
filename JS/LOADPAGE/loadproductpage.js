function innerProductPage(){
    var content = document.getElementById('content');
    var contentInner = `
    <div class="product-page">
        <div class="container">
            <div class="left-column">
                <div class="brands">
                    <h2># Brands</h2>
                    <div class="brand" id="All" onclick="setActiveAndBanner(this)">All</div>
                    <div class="brand" id="Asics" onclick="setActiveAndBanner(this)">Asics</div>
                    <div class="brand" id="Mizuno" onclick="setActiveAndBanner(this)">Mizuno</div>
                    <div class="brand" id="Beyono" onclick="setActiveAndBanner(this)">Beyono</div>
                    <div class="brand" id="Nike" onclick="setActiveAndBanner(this)">Nike</div>
                    <div class="brand" id="Adidas" onclick="setActiveAndBanner(this)">Adidas</div>
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
                                <div class="container-radio" onclick="filterList();">
                                    <input type="radio" name="gender" id="true">
                                    <label for="true">Male</label>
                                </div>
                                <div class="container-radio" onclick="filterList();">
                                    <input type="radio" name="gender" id="false">
                                    <label for="false">Female</label>
                                </div>
                                <div class="container-radio" onclick="filterList();">
                                    <input type="radio" name="gender" id="none-gender" class="none">
                                    <label for="none-gender">No choosen</label>
                                </div>                                            
                            </div>
                        </div>
                        
                        <div class="price">
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
                                <div class="container-radio" onclick="filterList();">
                                    <input type="radio" name="size" id="S38">
                                    <label for="S38">38</label>
                                </div>
                                <div class="container-radio" onclick="filterList();">
                                    <input type="radio" name="size" id="S39">
                                    <label for="S39">39</label>
                                </div>
                                <div class="container-radio" onclick="filterList();">
                                    <input type="radio" name="size" id="S40">
                                    <label for="S40">40</label>
                                </div>
                                <div class="container-radio" onclick="filterList();">
                                    <input type="radio" name="size" id="S41">
                                    <label for="S41">41</label>
                                </div>
                                <div class="container-radio" onclick="filterList();">
                                    <input type="radio" name="size" id="S41.5">
                                    <label for="S41.5">41.5</label>
                                </div>
                                <div class="container-radio" onclick="filterList();">
                                    <input type="radio" name="size" id="S42">
                                    <label for="S42">42</label>
                                </div>
                                <div class="container-radio" onclick="filterList();">
                                    <input type="radio" name="size" id="S42.5">
                                    <label for="S42.5">42.5</label>
                                </div>
                                <div class="container-radio" onclick="filterList();">
                                    <input type="radio" name="size" id="S43">
                                    <label for="S43">43</label>
                                </div>
                                <div class="container-radio" onclick="filterList();">
                                    <input type="radio" name="size" id="S43.5">
                                    <label for="S43.5">43.5</label>
                                </div>
                                <div class="container-radio" onclick="filterList();">
                                    <input type="radio" name="size" id="S44">
                                    <label for="S44">44</label>
                                </div>
                                <div class="container-radio" onclick="filterList();">
                                    <input type="radio" name="size" id="S44.5">
                                    <label for="S44.5">44.5</label>
                                </div>
                                <div class="container-radio" onclick="filterList();">
                                    <input type="radio" name="size" id="S45">
                                    <label for="S45">45</label>
                                </div>
                                <div class="container-radio" onclick="filterList();">
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
                <h2 class="brand"></h2>
                <div class="banner">
                    
                </div>
                <div class="amount-product">
                    <div class="label-amount">Amount of product per page:</div>
                    <select name="product-on-page" id="amount" class="amount" onchange="filterList();">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                    </select>
                </div>
                <div class="container-products">
                    
                </div>

                <div class="pagination">
                    
                </div>
            </div>
        </div>
    </div>`;
    content.innerHTML=contentInner;
    checkDefaultInput();
    setActiveAndBanner(document.querySelector('.product-page').querySelector('#All'));
}

function setActiveAndBanner(brand){
    var brands = document.querySelector('.brands').querySelectorAll('.brand');
    var title = document.querySelector('.product-content').querySelector('.brand');
    var banner = document.querySelector('.product-content').querySelector('.banner');
    removeAllActiveClass(brands);
    brand.classList.add("active");
    switch (brand.id) {
        case "All":
            title.innerHTML = 'V-Shoe shopping';
            banner.innerHTML = `<video autoplay loop> <source src="./assets/video/V-shoes.mp4" type="video/mp4"></video>`;
            break;
    
        case "Asics":
            title.innerHTML = 'Giày Asics chính hãng';
            banner.innerHTML = `<img src="./assets/img/product/banner/giay-asics-chinh-hang.jpg" alt="">`;
            break;

        case "Mizuno":
            title.innerHTML = 'Giày Mizuno chính hãng';
            banner.innerHTML = `<img src="./assets/img/product/banner/giay-asics-chinh-hang.jpg" alt="">`;
            break;
        
        case "Beyono":
            title.innerHTML = 'Giày Beyono chính hãng';
            banner.innerHTML = `<img src="./assets/img/product/banner/giay-asics-chinh-hang.jpg" alt="">`;
            break;

        case "Nike":
            title.innerHTML = 'Giày Nike chính hãng';
            banner.innerHTML = `<img src="./assets/img/product/banner/giay-asics-chinh-hang.jpg" alt="">`;
            break;

        case "Adidas":
            title.innerHTML = 'Giày Adidas chính hãng';
            banner.innerHTML = `<img src="./assets/img/product/banner/giay-asics-chinh-hang.jpg" alt="">`;
            break;

        default:
            break;
    }
    filterList();
}

var g_lastList = [];
var amountProduct = 0;
function filterList(){
    var productPage = document.querySelector('.product-page');
    var brands = productPage.querySelector('.brands').querySelectorAll('.brand');
    var productContent = productPage.querySelector('.product-content');
    var groupPanels = productPage.querySelector('.group-panel');
    var panelGender = groupPanels.querySelector('.gen').querySelectorAll('input');
    var minPrice = groupPanels.querySelector('.price').querySelector('.scope-price').querySelector('.filter-min').value;
    var maxPrice = groupPanels.querySelector('.price').querySelector('.scope-price').querySelector('.filter-max').value;
    var panelSize = groupPanels.querySelector('.size').querySelectorAll('input');
    var size;
    var gender;
    var brand;
    var price;
    amountProduct = productContent.querySelector('#amount').value;
    
    //Lấy brand đang được chọn
    for(let i = 0; i < brands.length; i++){
        if(brands[i].classList.contains("active")){
            brand = brands[i].id;
        }
    }

    //Lấy gender đang được chọn
    panelGender.forEach(item =>{
        if(item.checked){
            gender = item.id;
        }
    });

    //Lấy size
    panelSize.forEach(item => {
        if(item.checked){
            size = item.id;
        }
    });

    //lấy price
    if(minPrice == ''){ 
        minPrice = 300000;
    }

    if(maxPrice == ''){
        maxPrice = 5000000;
    }

    //Lọc listProduct
    var filtedList = [];
    lsProduct = JSON.parse(data.getItem("listProduct"));
    lsProductDetail = JSON.parse(data.getItem("listProductDetail"));


    
    lsProduct.forEach(item => {
        price = calculateNewPrice(item);
        if(price >= minPrice && price <= maxPrice){
            filtedList = filtedList.concat(item);
        }
    });


    var lastList = [];
    var pr;

    if(brand != 'All'){
        for(let i = 0; i < filtedList.length; i++){
            if(filtedList[i].brand != brand){
                filtedList.splice(i, 1);
                i--;
            }
        }
    }

    if(size != 'none-size'){
        if(gender != 'none-gender'){
            filtedList.forEach(item =>{
                pr = getProductDetailByIdProductAndIdSize(item.id, size);
                if(pr != null) {
                    if(pr.type == gender){
                        lastList = lastList.concat(pr);
                    }
                }
            });
        }else{
            filtedList.forEach(item =>{
                pr = getProductDetailByIdProductAndIdSize(item.id, size);
                if(pr != null) {
                    lastList = lastList.concat(item);
                }
            });
        }
    }else{
        if(gender != 'none-gender'){
            filtedList.forEach(item =>{
                if(item.gender == gender){
                    lastList = lastList.concat(item);
                }
            });
        }else lastList = lastList.concat(filtedList);
    }
    g_lastList = [];
    g_lastList = g_lastList.concat(lastList);
    console.log("Global list filter: ");
    console.log(g_lastList);
    //Gọi phân trang
    pagination(lastList, amountProduct);
    //Đẩy sản phẩm vào khung chứa
    innerProducts(lastList, amountProduct, 1);
    setActiveForFirstPage();
}

var totalPage;
function pagination(filtedList, amount){
    totalPage = Math.ceil(filtedList.length / amount);
    setUpPagination(totalPage);

}

function setUpPagination(numOfPage){
    var containerPagination = document.querySelector('.product-content').querySelector('.pagination');
    var button = '';
    if(numOfPage <= 4){
        for(let i = 0; i < numOfPage; i++){
            button +=`<div class="page-number current" onclick="actionSimplePagination(this);">${(i + 1)}</div>`;       
        }
    }else{
        button +=`
        <div class="iopage page-number previous-button" style="display:none;" onclick="actionPageButton(this)">
            <i class="fa-solid fa-angle-left"></i>
            Previous
        </div>
        <div class="page-number number first-page" style="display:none;" onclick="actionPageButton(this)">1</div>
        <div class="page-number dot-page dot1" style="display:none;"></div>
        <div class="page-number number previous" onclick="actionPageButton(this)">1</div>
        <div class="page-number number current" onclick="actionPageButton(this)">2</div>
        <div class="page-number number next" onclick="actionPageButton(this)">3</div>
        <div class="page-number dot-page dot2"></div>
        <div class="page-number number last-page" onclick="actionPageButton(this)">${numOfPage}</div>
        <div class="iopage page-number next-button" onclick="actionPageButton(this)">
            Next
            <i class="fa-solid fa-angle-right"></i>
        </div>`;
    }

    containerPagination.innerHTML = button;
}

//Xử lý action của các nút phân trang
function actionPageButton(btn){
    var activeBnt = getActiveBtn();
    var numberPage;
    var containerPagination = document.querySelector('.product-content').querySelector('.pagination');
    var previousButton = containerPagination.querySelector('.previous-button');
    var first = containerPagination.querySelector('.first-page');
    var dot1 = containerPagination.querySelector('.dot1');
    var pre = containerPagination.querySelector('.previous');
    var cur = containerPagination.querySelector('.current');
    var next = containerPagination.querySelector('.next');
    var dot2 = containerPagination.querySelector('.dot2');
    var last = containerPagination.querySelector('.last-page');
    var nextButton = containerPagination.querySelector('.next-button');
    removeAllActiveClass(containerPagination.querySelectorAll('.number'));

    if(btn.classList.contains("next-button")){
        numberPage = parseInt(activeBnt.textContent) + 1;
    }else{
        if(btn.classList.contains("previous-button")){
            numberPage = parseInt(activeBnt.textContent) - 1;
        }else{
            numberPage = btn.textContent;
        }
    }

    if(numberPage == 1){
        previousButton.style.display = 'none';
        first.style.display = 'none';
        dot1.style.display = 'none';
        dot2.style.display = 'block';
        last.style.display = 'block';
        nextButton.style.display = 'block';
        
        pre.innerHTML = 1;
        cur.innerHTML = 2;
        next.innerHTML = 3;
        pre.classList.add("active");
    }else{
        if(numberPage == totalPage){
            previousButton.style.display = 'block';
            first.style.display = 'block';
            dot1.style.display = 'block';
            dot2.style.display = 'none';
            last.style.display = 'none';
            nextButton.style.display = 'none';

            pre.innerHTML = (numberPage - 2);
            cur.innerHTML = (numberPage - 1);
            next.innerHTML = numberPage;
            next.classList.add("active");
        }else{
            if(numberPage == 2){
                previousButton.style.display = 'block';
                first.style.display = 'none';
                dot1.style.display = 'none';
                dot2.style.display = 'block';
                last.style.display = 'block';
                nextButton.style.display = 'block';
                
                pre.innerHTML = 1;
                cur.innerHTML = 2;
                next.innerHTML = 3;
            }else{
                if(numberPage == (totalPage - 1)){
                    previousButton.style.display = 'block';
                    first.style.display = 'block';
                    dot1.style.display = 'block';
                    dot2.style.display = 'none';
                    last.style.display = 'none';
                    nextButton.style.display = 'block';

                    pre.innerHTML = (numberPage - 1);
                    cur.innerHTML = (numberPage);
                    next.innerHTML = (Number(numberPage) + 1);
                }else{
                    previousButton.style.display = 'block';
                    first.style.display = 'block';
                    dot1.style.display = 'block';
                    dot2.style.display = 'block';
                    last.style.display = 'block';
                    nextButton.style.display = 'block';

                    pre.innerHTML = (numberPage - 1);
                    cur.innerHTML = numberPage;
                    next.innerHTML = (Number(numberPage) + 1);
                }
            }
            cur.classList.add("active");
        }
    }

    innerProducts(g_lastList, amountProduct, parseInt(numberPage));
}

function setActiveForFirstPage(){
    var containerPagination = document.querySelector('.product-content').querySelector('.pagination');
    var btns = containerPagination.querySelectorAll('.page-number');
    for(let i = 0; i< btns.length; i++){
        if(btns[i].textContent == 1 && btns[i].style.display != 'none'){
            btns[i].classList.add("active");
            return;
        }
    }
}

function getActiveBtn(){
    var containerPagination = document.querySelector('.product-content').querySelector('.pagination');
    var btns = containerPagination.querySelectorAll('.page-number');
    for(let i = 0; i< btns.length; i++){
        if(btns[i].classList.contains("active")){
            return btns[i];
        }
    }
}

//Hàm inner sản phẩm cho phân trang dưới 4 trang
function actionSimplePagination(btn){
    var pageNumber = btn.textContent;
    //add active class cho thẻ này
    var containerPagination = document.querySelector('.product-content').querySelector('.pagination');
    removeAllActiveClass(containerPagination.querySelectorAll('.page-number'));
    btn.classList.add("active");
    innerProducts(g_lastList, amountProduct, pageNumber);
}

function removeAllActiveClass(listClassActive){
    for(let i = 0; i < listClassActive.length; i++){
        listClassActive[i].classList.remove("active");
    }
}

function innerProducts(filtedList, amount, pagenumber){
    var listProduct = '';
    var startIndex = (parseInt(pagenumber) - 1)*amount;
    var endIndex;
    
    if(pagenumber*amount >= filtedList.length){
        endIndex = parseInt(filtedList.length);
    }else endIndex = parseInt(pagenumber)*amount;

    for(let i = startIndex; i < endIndex; i++){
        listProduct += showDetailProduct(filtedList[i]);
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
            panel.style = `height: fit-content;
                            margin: 5px;
                            margin-bottom: 15px;
                            display: flex;
                            `;
            icon.style = 'transform: rotate(0);';
        }else {
            panel.style = `height: 0;
                            margin: 0;
                            display: none;
                            `;
            icon.style = 'transform: rotate(-90deg);'
        }
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
    lsProductDetail = JSON.parse(data.getItem("listProductDetail"));
    for(i = 0; i < lsProduct.length; i++){
        if(lsProduct[i].id == id_pr){
            container.innerHTML = showProductInForm(lsProduct[i]);
            innerOptionSize(id_pr, lsProductDetail, "chosen-size");
        }     
    }
    
    container.style.display='flex'
}

var model;
window.addEventListener('click', function(event){
    model = document.querySelector('.container-popUp');
    if(event.target == model){
        closeChooseSizeGuide();
    }
});

function closeProductCard(){
    document.querySelector('.container-popUp').style.display = 'none';
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

    renderPriceScope();
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
        filterList();
        return;
    }


    if(checkedInput.length == 1){
        min.value = 300000;
        max.value = checkedInput[0].value;
        filterList();
        return;
    }

    min.value = checkedInput[0].value;
    if(checkedInput.length == 2){
        max.value = checkedInput[1].value;
    }else{
        max.value = checkedInput[checkedInput.length-1].value;
    }
    
    filterList();
}