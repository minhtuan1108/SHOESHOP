function innerCartPage(){

    if(activeAccount == null){
        alert("Please login to buy more ^.^");
        return;
    }

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
                    <button class="checkout-button" onclick="checkOut1();">Check Out</button>
                </div>
            </div>
        </div>

        <!-- Contain bill paid -->
        <div class="container-bill">
            <h2>Paid Bill</h2>
            <div class="main-container">
                
            </div>
        </div>
    </div>`;
    
    document.querySelector('#content').innerHTML = cartPage;
    innerProductToCartPage();
    innerBillPaid();
    setNotify();
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

    if(lsCartDetail.length == 0){
        prs = 'Cart is empty';
    }else{
        //Vòng lặp lấy những sản phẩm trong card từ detail cart
        for(let i = 0; i < lsCartDetail.length; i++){
            if(idCart == lsCartDetail[i].idCart){
                productDetail = lsCartDetail[i];
                size = getSizeById(productDetail.idSize);
                pr = getProductById(productDetail.idProduct);
                
                total = calculateNewPrice(pr) * Number (productDetail.quantity);
                select = stringOptionSize(pr.id, JSON.parse(data.getItem("listProductDetail")), size.value);
                prs += `
                <div class="pr">
                    <div class="delete" onclick="removeProductFromCart(this);" id=${pr.id} size=${size.value}>
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
    }
    
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
    var Subprice = calculateNewPrice(getProductById(id_pr)) * quantity;

    //Kiểm tra xem account nào đang hoạt động và lấy id cart của account đó
    idCart = getCartIdByActiveAccount();
    if(idCart == null){
        alert("Please login to continue.");
        innerLoginPage();
    }else{
        checkAndAddToCartDetail(idCart, id_pr, idSize, quantity, Subprice);
        setNotify();
    }
}

function getCartIdByActiveAccount(){
    lsCart = JSON.parse(data.getItem("listCart"));

    if(lsCart.length == 0 || activeAccount == null) return null;

    for(let i = 0; i < lsCart.length; i++){
        if(lsCart[i].idAccount == activeAccount.idAcc){
            return lsCart[i].id;
        }
    }
}

function checkAndAddToCartDetail(idCart, idPr, idSize, quantity, Subprice){

    lsCartDetail = JSON.parse(data.getItem("listCartDetail"));

    for(let i = 0; i < lsCartDetail.length; i++) {

        if(idCart == lsCartDetail[i].idCart && idPr == lsCartDetail[i].idProduct && idSize == lsCartDetail[i].idSize){
            lsCartDetail[i].quantity += quantity;
            lsCartDetail[i].Subprice += Subprice;
            data.setItem("listCartDetail", JSON.stringify(lsCartDetail));
            return;
        }
    }

    lsCartDetail = lsCartDetail.concat(new cartDetail(idCart, idPr, idSize, quantity, Subprice));
    data.setItem("listCartDetail", JSON.stringify(lsCartDetail));
}

function removeProductFromCart(tagDel){
    var id_pr = tagDel.id;
    var size = tagDel.getAttribute('size');
    lsCartDetail = JSON.parse(data.getItem('listCartDetail'));
    var idCart = getCartIdByActiveAccount();
    for(let i = 0; i < lsCartDetail.length; i++){
       
        if(idCart == lsCartDetail[i].idCart && id_pr == lsCartDetail[i].idProduct && size == getSizeById(lsCartDetail[i].idSize).value){
            lsCartDetail.splice(i,1);
            break;
        }
    }

    data.setItem("listCartDetail", JSON.stringify(lsCartDetail));
    innerProductToCartPage();
    setNotify();
    setTotalPrice();
}

function setTotalPrice(){
    var tagTotal = document.querySelector('.container-cart').querySelector('.price-total');
    var total = calculateTotalPriceOfCurrentCart();
    tagTotal.innerHTML = `${total}đ`;
}

function calculateTotalPriceOfCurrentCart(){
    //Lấy idCart hiện tại thông qua acccountActive
    var productsInCart = getProductInCurrentCart();
    var total = 0;
    var pr;

    for(let i = 0; i < productsInCart.length; i++){
        pr = getProductById(productsInCart[i].idProduct);
        total += calculateNewPrice(pr) * productsInCart[i].quantity;
    }
    return total;
}

function setNotify(){

    var l;
    //Nếu k có account đang hoạt động thì l = 0
    if(activeAccount == null) l = 0;
    else l = getProductInCurrentCart().length;
    var notify = document.querySelector('#header').querySelector('.notify');

    if(l == 0){
        notify.style.display = 'none';
    }else{
        notify.setAttribute('data_count_pr',l);
        notify.style.display = 'block';
    }
}

//Check out 1: Xuất hóa đơn mẫu cho khách
function checkOut1(){
    //Show hóa đơn cho khách hàng
    showBillCheckOut(calculateTotalPriceOfCurrentCart());    
}

//Check out 2: Lưu hóa đơn
function checkOut2(){
    lsBill = JSON.parse(data.getItem("listBill"));

    var idBill = createGeneralID(lsBill);
    var idCustomer = activeAccount.id;
    var total = calculateTotalPriceOfCurrentCart();
    var dateCreate = new Date().toLocaleDateString();
    var status = false;

    lsBill = lsBill.concat(new bill(idBill,idCustomer, total, dateCreate, status));
    storeBillDetail(idBill);
    data.setItem("listBill", JSON.stringify(lsBill));
    innerBillPaid();
    closeProductCard();
    clearCart();
    innerProductToCartPage();
    setNotify();
    setTotalPrice();
}

function storeBillDetail(idBill){
    lsBillDetail = JSON.parse(data.getItem("listBillDetail"));
    var productsInCart = getProductInCurrentCart();
    for(let i = 0; i < productsInCart.length; i++){
        lsBillDetail = lsBillDetail.concat(new billDetail(idBill, productsInCart[i].idProduct, productsInCart[i].idSize, productsInCart[i].quantity, productsInCart[i].Subprice));
    }

    data.setItem("listBillDetail", JSON.stringify(lsBillDetail));
}

//Lấy những sản phẩm trong cart của tài khoản đang onl
function getProductInCurrentCart(){
    var idCart = getCartIdByActiveAccount();
    lsCartDetail = JSON.parse(data.getItem("listCartDetail"));
    var productInCart = [];
    for(let i = 0; i< lsCartDetail.length ; i++){
        if(idCart == lsCartDetail[i].idCart){
            productInCart = productInCart.concat(lsCartDetail[i]);
        }
    }
    return productInCart;
}

function showBillCheckOut(total){
    var custommerName = activeAccount.name;
    var bill_detail = `
    <div class="bill-detail">
        <div class="delete" onclick="closeProductCard();">
            <i class="fa-solid fa-xmark"></i>
        </div>

        <div class="bill-title">
            <h2>Hóa đơn</h2>
        </div>

        <div class="top">
            <h3 class="cus-name">${custommerName}</h3>
            <!--<p class="time">Time create: <span></span></p>-->
        </div>

        <div class="main-content-bill">
            <div class="list-product">
                
            </div>
            <div class="total">
                <p>Total: <span class="total-money">${total}đ</span></p>
                <div class="button">
                    <input type="button" id="checkOut-button" value="Check out" onclick="checkOut2();">
                </div>
            </div>
        </div>
        
    </div>`;

    document.querySelector('.container-popUp').innerHTML = bill_detail;
    innerProductToBillDetail(getProductInCurrentCart());
    document.querySelector('.container-popUp').style.display = 'flex';
}

function openBillDetail(bill){


    var idBill = bill.querySelector('#billID').textContent;
    var billDetails = getListBillDetailByBillID(idBill);
    var bill = getBillByID(idBill);
    var custommerName = getCustomerByID(bill.idKH).name;
    

    var status = returnHtmlStatus(idBill);
    

    var bill_detail = `
    <div class="bill-detail">
        <div class="delete" onclick="closeProductCard();">
            <i class="fa-solid fa-xmark"></i>
        </div>
        <div class="top">
            <h3 class="cus-name">${custommerName}</h3>
            <p class="time">Time create: <span>${bill.date}</span></p>
        </div>

        <div class="main-content-bill">
            <div class="list-product">
                
            </div>
            <div class="total">
                <p>Total: <span class="total-money">${bill.total}đ</span></p>
                <p>Status: 
                    ${status}
                </p>
            </div>
        </div>
        
    </div>`;

    document.querySelector('.container-popUp').innerHTML = bill_detail;
    document.querySelector('.container-popUp').style.display = 'flex';
    innerProductToBillDetail(billDetails);
}

function returnHtmlStatus(idBill){
    if(getBillByID(idBill).status){
        return `
        <span>cheked
            <i class="fa-solid fa-check"></i>
        </span>`;
    }else{
        return `
        <span>waiting
            <i class="fa-solid fa-spinner"></i>
        </span>`;
    }
}

function innerProductToBillDetail(listProducts){
    var containerProduct = document.querySelector('.bill-detail').querySelector('.list-product');
    var prInCart;
    var lsPrs = '';
    var pr;

    if(listProducts.length == 0){
        lsPrs = 'There is nothing in your cart.';
        document.querySelector('.bill-detail').querySelector('#checkOut-button').disabled = true;
    }else{

        for(let i = 0; i < listProducts.length; i++){
            prInCart = listProducts[i];
            pr = getProductById(prInCart.idProduct);
            lsPrs += `
            <div class="pr">
                <div class="image">
                    <img src="${pr.image}1.jpg" alt="${pr.image}1.jpg">
                </div>
                <div class="info">
                    <h3 class="name">${pr.name}</h3>
                    <h5 class="brand">Brand: ${pr.brand}</h5>
                    <div class="size-quantity">
                        <p class="size">Size: <span>${getSizeById(prInCart.idSize).value}</span></p>
                        <p class="quantity">Quantity: <span>${prInCart.quantity}</span></p>
                    </div>                                    
                    <p class="price-cart">Price: ${prInCart.Subprice}đ</p>
                </div>
            </div>`;
        }
    }

    containerProduct.innerHTML = lsPrs;
}

function innerBillPaid(){
    lsBill = JSON.parse(data.getItem("listBill"));
    var bills = '';
    var status;

    if(lsBill.length == 0){
        bills = 'There is not any bill was checked out';
    }else{

        for(let i = 0; i < lsBill.length; i++){
            status = returnHtmlStatus(lsBill[i].id);

            bills +=`
            <div class="bill" onclick="openBillDetail(this)">
                <div class="image">
                    <img src="./assets/img/logo/V-Shoes-logo.png" alt="">
                </div>
                <div class="info">
                    <div class="main-content">
                        <p>Bill ID: <span id="billID">${lsBill[i].id}</span></p>
                        <p>Date create: <span>${lsBill[i].date}</span></p>
                        <p>Total: <span  class="total-price">${lsBill[i].total}</span>đ</p>
                    </div>
                    <div class="status">
                        <p>Status: ${status}</p>
                    </div>
                </div>
            </div>`;
        }
    }

    document.querySelector('.container-bill').querySelector('.main-container').innerHTML = bills;
}

function clearCart(){
    var idCart = getCartIdByActiveAccount();
    lsCartDetail = JSON.parse(data.getItem("listCartDetail"));
    for(let i = 0; i < lsCartDetail.length; i++){
        if(lsCartDetail[i].idCart == idCart){
            lsCartDetail.splice(i, 1);
            i--;
        }
    }

    data.setItem("listCartDetail", JSON.stringify(lsCartDetail));
}