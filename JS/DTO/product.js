class product{

    constructor(id, name, price, type, discount, disc, image, brand){
        this.id = id;
        this.name = name;
        this.price = price;
        this.type = type;
        this.discount = discount;
        this.disc = disc;
        this.image = image;
        this.brand = brand;
    }
}

function getProductById(idPr){
    lsProduct = JSON.parse(data.getItem('listProduct'));
    for(let i = 0; i < lsProduct.length; i++){
        if(lsProduct[i].id == idPr){
            return lsProduct[i];
        }
    }
}

function showDemoProduct(pr) {
    return `<div class="product">
                <img src="${pr.image}1.png" alt="">
                <p class="name">${pr.name}</p>
            </div>`;
}

function showDetailProduct(pr) {
    var new_price = calculateNewPrice(pr);
    if(pr.discount == 0){
        return `<div class="product">
                <div class="image">
                    <img src="${pr.image}2.jpg" alt="">
                    <div class="container-button-view">
                        <div class="view-detail" onclick="openProductCard(this);">View detail
                            <div class="id-product">${pr.id}</div>
                        </div>
                    </div>
                    
                </div>
                <div class="info-product">
                    <div class="product-brand">${pr.brand}</div>
                    <div class="product-name">${pr.name}</div>
                    <div class="product-price">
                        <div class="new-price">${new_price}</div>
                    </div>

                </div>
            </div>`;
    }
    return `<div class="product">
                <div class="image">
                    <img src="${pr.image}2.jpg" alt="">
                    <div class="product-label">
                        <div class="discount">${pr.discount}%</div>
                    </div>
                    <div class="container-button-view">
                        <div class="view-detail" onclick="openProductCard(this);">View detail
                            <div class="id-product">${pr.id}</div>
                        </div>
                    </div>
                    
                </div>
                <div class="info-product">
                    <div class="product-brand">${pr.brand}</div>
                    <div class="product-name">${pr.name}</div>
                    <div class="product-price">
                        <div class="new-price">${new_price}</div>
                        <div class="old-price">${pr.price}</div>
                    </div>

                </div>
            </div>`;
}

function calculateNewPrice(pr){
    var new_price = (pr.price*(100 - pr.discount))/100;
    // Làm tròn giá tiền sau khi discount
    if(new_price%1000 != 0){
        new_price += 1000 - (new_price%1000);
    }

    return new_price
}

function showProductInForm(pr){
    var new_price = calculateNewPrice(pr);
    if(pr.discount == 0){
        return `<div class="container-form-product">
                    <form action="" method="post">
                        <div class="image-product">
                            <img src="${pr.image}2.jpg" alt="">
                        </div>
                        <div class="main-info">
                            <div class="info-detail">
                                <h2 class="product-name">${pr.name}</h2>
                                <div class="price">
                                    <p class="label-price title">Price: </p>
                                    <div class="new-price">
                                        <p>${new_price}</p>
                                        <span>đ</span>
                                    </div>
                                </div>
                                <div class="size">
                                    <div class="label-size title">Current size: </div>
                                    <p>${pr.min_size}-${pr.max_size}</p>
                                </div>
                                <div class="desc">
                                    <p class="label-desc title" title="${pr.disc}">Description: 
                                        <i>${pr.disc}</i>
                                    </p>
                                </div>
                            </div>
                            <div class="chosen">
                                <div class="size-option">
                                    <p>Size</p>
                                    <select name="chosen-size" id="chosen-size">
                                        
                                    </select>
                                </div>
                                <div class="quantity-option">
                                    <p>Quantity</p>
                                    <input type="number" name="quantity" id="quantity" value="1">
                                </div>
                            </div>
                            <div class="add-cart">
                                <input type="button" value="Add to cart" onclick="addProductToCart(this);" id="${pr.id}">
                                <input type="button" value="Cancel" onclick="closeChooseSizeGuide();">
                            </div>
                        </div>
                    </form>
                </div>`;
    }
    return `<div class="container-form-product">
                <form action="" method="post">
                    <div class="image-product">
                        <img src="${pr.image}2.jpg" alt="">
                    </div>
                    <div class="main-info">
                        <div class="info-detail">
                            <h2 class="product-name">${pr.name}</h2>
                            <div class="price">
                                <p class="label-price title">Price: </p>
                                <div class="new-price">
                                    <p>${new_price}</p>
                                    <span>đ</span>
                                </div>
                                <div class="old-price">
                                    <p>${pr.price}</p>
                                    <span>đ</span>
                                </div>
                            </div>
                            <div class="size">
                                <div class="label-size title">Current size: </div>
                                <p>${pr.min_size}-${pr.max_size}</p>
                            </div>
                            <div class="desc">
                                <p class="label-desc title" title="${pr.disc}">Description: 
                                    <i>${pr.disc}</i>
                                </p>
                            </div>
                        </div>
                        <div class="chosen">
                            <div class="size-option">
                                <p>Size</p>
                                <select name="chosen-size" id="chosen-size">
                                    
                                </select>
                            </div>
                            <div class="quantity-option">
                                <p>Quantity</p>
                                <input type="number" name="quantity" id="quantity" value="1">
                            </div>
                        </div>
                        <div class="add-cart">
                            <input type="button" value="Add to cart" onclick="addProductToCart(this);"  id="${pr.id}">
                            <input type="button" value="Cancel" onclick="closeChooseSizeGuide();">
                        </div>
                    </div>
                </form>
            </div>`;
}

function innerOptionSize(idPr, listProductDetail, idSelect){
    var select = document.querySelector(`#${idSelect}`);
    var options = '';
    var listSize = JSON.parse(data.getItem("listSize"));
    listProductDetail.forEach(element => {
        if(element.idProduct == idPr){
            listSize.forEach(size => {
                if(size.id == element.idSize)
                    options += `<option value="${size.id}">${size.value}</option>`;
            });
        }
        
    });
    
    console.log("Xuất options size: " + options);
    select.innerHTML = options;
}

function closeProductCard(){
    document.querySelector('.container-popUp').style.display = 'none';
}

