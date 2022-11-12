function innerCartPage(){
    var cartPage = `
    <div class="container">
        <div class="container-cart">
            <div class="container-pr">
                <h2>Cart</h2>
                <div class="products">
                    
                </div>
                
            </div>

            <div class="checkOut-aria">
                <h2>Summary</h2>
                <div class="total-bill">
                    <p class="label-total">Total:</p>
                    <p class="price-total"></p>
                </div>
                <div class="checkout-container">
                    <button class="checkout-button">Check Out</button>
                </div>
            </div>
        </div>

        <!-- Contain bill paid -->
        <div class="container-bill">
            <h2>Paid Bill</h2>
            <div class="main-container">
                <div class="bill" onclick="openBillDetail(this)">
                    <div class="image">
                        <img src="./assets/img/logo/V-Shoes-logo.png" alt="">
                    </div>
                    <div class="info">
                        <div class="main-content">
                            <p>Bill number: <span id="billID">1</span></p>
                            <p>Date create: <span>30/9/2002</span></p>
                            <p>Total: <span>25963000</span></p>
                        </div>
                        <div class="status">
                            <p>Status: <span>checked</span></p>
                        </div>
                    </div>
                </div>

                <div class="bill">
                    <div class="image">
                        <img src="./assets/img/logo/V-Shoes-logo.png" alt="">
                    </div>
                    <div class="info">
                        <div class="main-content">
                            <p>Bill number: <span>1</span></p>
                            <p>Date create: <span>30/9/2002</span></p>
                            <p>Total: <span>25963000</span></p>
                        </div>
                        <div class="status">
                            <p>Status: <span>checked</span></p>
                        </div>
                    </div>
                </div>

                <div class="bill">
                    <div class="image">
                        <img src="./assets/img/logo/V-Shoes-logo.png" alt="">
                    </div>
                    <div class="info">
                        <div class="main-content">
                            <p>Bill number: <span>1</span></p>
                            <p>Date create: <span>30/9/2002</span></p>
                            <p>Total: <span>25963000đ</span></p>
                        </div>
                        <div class="status">
                            <p>Status: 
                                <span>waiting
                                    <i class="fa-solid fa-spinner"></i>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="bill">
                    <div class="image">
                        <img src="./assets/img/logo/V-Shoes-logo.png" alt="">
                    </div>
                    <div class="info">
                        <div class="main-content">
                            <p>Bill number: <span>1</span></p>
                            <p>Date create: <span>30/9/2002</span></p>
                            <p>Total: <span>25963000</span></p>
                        </div>
                        <div class="status">
                            <p>Status: 
                                <span>checked
                                    <i class="fa-solid fa-check"></i>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    
    document.querySelector('#content').innerHTML = cartPage;
    innerProductToCartPage();
    setTotalPrice();
}

function innerProductToCartPage(){
    var container = document.querySelector('.container-cart').querySelector('.products');
    var select = '';
    var prs = '';
    var total = 0;
    var pr;

    //Lấy id giỏ hàng của account đang hoạt động
    var idCart = getCartIdByActiveAccount();
    lsCartDetail = JSON.parse(data.getItem("listCartDetail"));
    var productDetail;
    var size;
    //Vòng lặp lấy những sản phẩm trong card từ detail cart
    for(let i = 0; i < lsCartDetail.length; i++){
        if(idCart == lsCartDetail[i].idCart){
            productDetail = lsCartDetail[i];
            size = getSizeById(productDetail.idSize);
            pr = getProductById(productDetail.idProduct);
            console.log(size);
            
            total = calculateNewPrice(pr) * Number (productDetail.quantity);
            select = stringOptionSize(pr.id, JSON.parse(data.getItem("listProductDetail")), size.value);
            prs += `
            <div class="pr">
                <div class="delete" onclick="removeProductFromCart(this);" id=${pr.id} size="${size.value}">
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <div class="image">
                    <img src="${pr.image}2.jpg" alt="./assets/img/product/Asics/1/">
                </div>
                <div class="info">
                    <h3 class="name">${pr.name}</h3>
                    <h5 class="brand">Brand: ${pr.brand}</h5>
                    <div class="group-selection">
                        <div class="slection-size">
                            <p class="size">Size:</p>
                            <select name="size" id="size-cart">
                                ${select}
                            </select>
                        </div>
                        <div class="selection-quantity">
                            <p class="quantity">Quantity: </p>
                            <input type="number" name="quantity" id="quantity" value="${productDetail.quantity}">
                        </div>
                    </div>                                    
                    <p class="price-cart">Price: ${total}đ</p>
                </div>
            </div>`;
        }
    }
    
    console.log(prs);
    container.innerHTML = prs;
}

function stringOptionSize(idPr, listProductDetail, size){
    var options = '';
    lsSize = JSON.parse(data.getItem("listSize"))
    listProductDetail.forEach(element => {
        if(element.idProduct == idPr){
            lsSize.forEach(item => {
                if(element.idSize == item.id){
                    if(item.value == size)
                        options += `<option value="${item.id}" selected>${size}</option>`;
                    options += `<option value="${item.id}">${item.value}</option>`;
                }
                
            });
        }
    });
        
    return options;
}

function addProductToCart(inp){
    var id_pr = inp.id;
    var idCart;
    var idSize = inp.form.querySelector("#chosen-size").value;
    var quantity = Number(inp.form.querySelector("#quantity").value);

    //Kiểm tra xem account nào đang hoạt động và lấy id cart của account đó
    idCart = getCartIdByActiveAccount();
    console.log(idCart);
    if(idCart == null){
        alert("Please login to continue.");
        innerLoginPage();
    }else{
        checkAndAddToCartDetail(idCart, id_pr, idSize, quantity);
        setNotify();
    }
}

function getCartIdByActiveAccount(){
    lsCart = JSON.parse(data.getItem("listCart"));

    if(lsCart.length == 0) return null;

    for(let i = 0; i < lsCart.length; i++){
        if(lsCart[i].idAccount == activeAccount.idAcc){
            return lsCart[i].id;
        }
    }
}

function checkAndAddToCartDetail(idCart, idPr, idSize, quantity){

    lsCartDetail = JSON.parse(data.getItem("listCartDetail"));

    for(let i = 0; i < lsCartDetail.length; i++) {

        if(idCart == lsCartDetail[i].idCart && idPr == lsCartDetail[i].idProduct && idSize == lsCartDetail[i].idSize){
            lsCartDetail[i].quantity += quantity;
            data.setItem("listCartDetail", JSON.stringify(lsCartDetail));
            return;
        }
    }

    lsCartDetail = lsCartDetail.concat(new cartDetail(idCart, idPr, idSize, quantity));
    data.setItem("listCartDetail", JSON.stringify(lsCartDetail));
}

function removeProductFromCart(tagDel){
    var id_pr = tagDel.id;
    var size = tagDel.getAttribute('size');
    lsCartDetail = JSON.parse(data.getItem('listCartDetail'));
    var idCart = getCartIdByActiveAccount();
    for(let i = 0; i < lsCartDetail.length; i++){
        if(idCart == lsCartDetail[i].idCart && id_pr == lsCartDetail[i].idProduct && size == getSizeById(lsCartDetail[i].idSize)){
            lsCartDetail.splice(i,1);
            console.log(lsCartDetail);
        }
    }
    data.setItem("listCartDetail", JSON.stringify(lsCartDetail));
    innerProductToCartPage();
    setNotify();
    setTotalPrice();
}

function setTotalPrice(){
    var tagTotal = document.querySelector('.container-cart').querySelector('.price-total');
    var total = 0;

    //Lấy idCart hiện tại thông qua acccountActive
    var idCart = getCartIdByActiveAccount();
    lsCartDetail = JSON.parse(data.getItem('listCartDetail'));

    var pr;
    for(let i = 0; i < lsCartDetail.length; i++){
        pr = getProductById(lsCartDetail[i].idProduct);
        console.log(pr);
        if(lsCartDetail[i].idCart == idCart){
            console.log(lsCartDetail[i]);
            console.log(lsCartDetail[i].idCart);
            console.log(idCart);
            total += calculateNewPrice(pr) * lsCartDetail[i].quantity;
        }
    }

    tagTotal.innerHTML = `${total}đ`;
}

function setNotify(){
    //Lấy id của cart tương ứng với tài khoản đang sử dụng
    var idCart = getCartIdByActiveAccount();
    var lsCartDetail = JSON.parse(data.getItem('listCartDetail'));
    
    var l = 0;
    let i = 0;
    //Lấy sản phẩm bên trong listCartDetail
    while(i < lsCartDetail.length){

        if(idCart == lsCartDetail[l].idCart)
            l++;
        i++;
    }
    var notify = document.querySelector('#header').querySelector('.notify');

    if(l == 0){
        notify.style.display = 'none';
    }else{
        notify.setAttribute('data_count_pr',l);
        notify.style.display = 'block';
    }
}