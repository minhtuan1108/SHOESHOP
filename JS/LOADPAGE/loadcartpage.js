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
    let cartPrs = JSON.parse(data.getItem("cart"));
    var len = cartPrs.length;
    var pr;
    if(len == 0){
        prs = 'Không có sản phẩm nào trong giỏ';
    }else{
        for (let i = 0; i < len; i++) {
            pr = cartPrs[i];
            total = calculateNewPrice(pr)*pr.quantity;
            select = stringOptionSize(pr.min_size, pr.max_size, pr.size);
            prs += `
            <div class="pr">
                <div class="delete" onclick="removeProductFromCart(this);" id=${pr.id} size="${pr.size}">
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
                            <input type="number" name="quantity" id="quantity" value="${pr.quantity}">
                        </div>
                    </div>                                    
                    <p class="price-cart">Price: ${total}</p>
                </div>
            </div>`;
            
        }
    }
    console.log(prs);
    container.innerHTML = prs;
}

function stringOptionSize(min, max, size){
    var options = '';
    for(i = min; i <= max ; i++){
        if(size == i){
            options += `<option value="${i}" selected>${i}</option>`;
        }
        options += `<option value="${i}">${i}</option>`;
    }
    return options;
}

function addProductToCart(inp){
    var id_pr = inp.id;
    var size = inp.form.querySelector("#chosen-size").value;
    var quantity = Number(inp.form.querySelector("#quantity").value);
    var prCart;
    lsProduct = JSON.parse(data.getItem("listProduct"));
    cart = JSON.parse(data.getItem("cart"));
    for(i = 0; i < lsProduct.length; i++){
        if(id_pr == lsProduct[i].id){
            prCart = lsProduct[i];
            prCart.quantity = quantity;
            prCart.size = size;
            cart = checkAndAddToCart(prCart, cart);
            break;
        }
    }
    data.setItem("cart", JSON.stringify(cart));
    setNotify();
}

function checkAndAddToCart(pr, cart){
    console.log(cart);
    for(i = 0; i < cart.length; i++) {
        if(pr.id == cart[i].id && pr.size == cart[i].size){
            cart[i].quantity += Number(pr.quantity);
            return cart;
        }
    }
    return cart.concat(pr);
}

function removeProductFromCart(tagDel){
    var id_pr = tagDel.id;
    var size = tagDel.getAttribute('size');
    cart = JSON.parse(data.getItem('cart'));
    for(i = 0; i < cart.length; i++){
        if(id_pr == cart[i].id && size == cart[i].size){
            cart.splice(i,1);
            console.log(cart);
        }
    }
    data.setItem("cart", JSON.stringify(cart));
    innerProductToCartPage();
    setNotify();
    setTotalPrice();
}

function setTotalPrice(){
    var tagTotal = document.querySelector('.container-cart').querySelector('.price-total');
    var total = 0;
    var cart = JSON.parse(data.getItem('cart'));
    var pr;
    for(i = 0; i < cart.length; i++){
        pr = cart[i];
        total += calculateNewPrice(pr) * pr.quantity;
    }

    tagTotal.innerHTML = `${total}đ`;
}

function setNotify(){
    var cart = JSON.parse(data.getItem('cart'));
    var l = cart.length;
    var notify = document.querySelector('#header').querySelector('.notify');

    if(l == 0){
        notify.style.display = 'none';
    }else{
        notify.setAttribute('data_count_pr',l);
        notify.style.display = 'block';
    }
}