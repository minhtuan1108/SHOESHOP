class product{

    constructor(id, name, price, discount, disc, image, brand, min_size, max_size){
        this.id = id;
        this.name = name;
        this.price = price;
        this.discount = discount;
        this.disc = disc;
        this.image = image;
        this.brand = brand;
        this.min_size = min_size;
        this.max_size = max_size;
    }

    showDemo() {
        return `<div class="product">
                    <img src="${this.image}1.png" alt="">
                    <p class="name">${this.name}</p>
                </div>`;
    }

    showDetail() {
        var new_price = (this.price*this.discount)/100;
        return `<div class="product">
                    <div class="image">
                        <img src="${this.image}2.jpg" alt="">
                        <div class="product-label">
                            <div class="discount">${this.discount}%</div>
                        </div>
                        <div class="container-button-view">
                            <div class="view-detail" onclick="openProductCard(this);">View detail
                                <div class="id-product">${this.id}</div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="info-product">
                        <div class="product-brand">${this.brand}</div>
                        <div class="product-name">${this.name}</div>
                        <div class="product-price">
                            <div class="new-price">${new_price}</div>
                            <div class="old-price">${this.price}</div>
                        </div>

                    </div>
                </div>`;
    }

}