var listProduct = []
function checkProduct(){
    if(JSON.parse(localStorage.getItem('storage')).length===0){	
        alert("Kho hàng trống!");  
        listProduct = [
            {name: 'adidas1', image: 'giay1.jpg', brand: 'adidas', quantity: 5, price: 500, category: 'Trẻ em', detail: 'dễ chịu'},
            {name: 'jordan1', image: 'giay2.jpg', brand: 'jordan', quantity:  4 , price: 25, category: 'Nữ', detail: 'khó chịu'},
            {name: 'jordan1', image: 'giay4.jpg', brand: 'jordan', quantity:  4 , price: 25, category: 'Nữ', detail: 'nhẹ'},
            {name: 'jordan1', image: 'giay5.jpg', brand: 'jordan', quantity:  4 , price: 25, category: 'Nữ', detail: 'nặng'},
            {name: 'supreme1',image: 'giay3.jpg', brand: 'supreme', quantity:  5, price: 87, category: 'Trẻ em', detail: 'dễ chịu'},
        ];
        
           localStorage.setItem('storage',JSON.stringify(listProduct));  
    }
}

function displayAllProduct() {
    
    listProduct = JSON.parse(localStorage.getItem('storage'));

     
    let str =   '   <tr>\n '+
                '   <td class="table_pd_first_column text_center">Tên sản phẩm</td>\n' +
                '   <td class="table_pd_second_column text_center">Hình ảnh</td>\n' +
                '   <td class="table_pd_third_column text_center">Thương hiệu</td>\n' +
                '   <td class="table_pd_fouth_column text_center">Số lượng</td>\n' +
                '   <td class="table_pd_fifth_column text_center">Giá</td>\n' +
                '   <td class="table_pd_sixth_column text_center">Loại</td>\n' +
                '   </tr>';
    if(listProduct.length == 0){
        str = '<tr><td>Hết hàng</td></tr>';
        }
    else
    for (let i = 0; i < listProduct.length; i++) {
        str +=  '<tr><td>' + listProduct[i].name + '</td>' +
                '<td class="text_center"><img class="size_img" src="/assets/img/'+listProduct[i].image+'" alt=""></td>' +
                '<td class="text_center">' + listProduct[i].brand + '</td>' +
                '<td class="text_center">' + listProduct[i].quantity + '</td>' +
                '<td class="text_center">' + listProduct[i].price + '</td>' +
                '<td class="text_center">' + listProduct[i].category + '</td></tr>'
            }
            document.getElementById('displayListProduct').innerHTML = str; 
}

function sliceString(S)
{
    var splitString = S.split('fakepath\\');
    return splitString[1];
}

function displayAllwithEdit() {

    listProduct = JSON.parse(localStorage.getItem('storage'));

    let str =   '   <tr>\n '+
                '   <td class="table_pd_first_column text_center">Tên sản phẩm</td>\n' +
                '   <td class="table_pd_second_column text_center">Hình ảnh</td>\n' +
                '   <td class="table_pd_second_column text_center">Thương hiệu</td>\n' +
                '   <td class="table_pd_third_column text_center">Số lượng</td>\n' +
                '   <td class="table_pd_fouth_column text_center">Giá</td>\n' +
                '   <td class="table_pd_sixth_column text_center">Xóa</td>\n' +
                '   <td class="table_pd_fifth_column text_center">Loại</td>\n' +
                '   <td class="table_pd_seventh_column text_center">Xóa</td>\n' +
                '   </tr>';
    if(listProduct.length == 0){
        str = '<tr><td>Hết hàng</td></tr>';
        }
    else
    for (let i = 0; i < listProduct.length; i++) {
        str +=  '<tr><td>' + listProduct[i].name + '</td>' +
                '<td class="text_center"><img class="size_img" src="/assets/img/'+listProduct[i].image+'" alt=""></td>' +
                '<td class="text_center">' + listProduct[i].brand + '</td>' +
                '<td class="text_center">' + listProduct[i].quantity + '</td>' +
                '<td class="text_center">' + listProduct[i].price + '</td>' +
                '<td class="text_center">' + listProduct[i].category + '</td>' +
                '<td class="text_center"><button class="btn" onclick="display_form(),showFormEdit(' + i + ')"><a class="a_style" style="color: #333" href="#editArea">Sửa</a></button></td>' +
                '<td class="text_center"><button  class="btn" onclick="deleteProduct(' + i + ')">Xóa</button></td></tr>'
            
    }
    document.getElementById('displayEditArea').innerHTML = str;
}

function addProduct(){  
    var name = document.getElementById('add-name').value;
    var image = sliceString(document.getElementById('add-img').value);
    var brand = document.getElementById('add-brand').value;
    var quantity = document.getElementById('add-quantity').value;
    var price = document.getElementById('add-price').value;
    var category = document.getElementById('add-category').value;
    var detail = document.getElementById('add-detail').value;
    if(detail == "")
        detail = 'Không có mô tả';

    if(!checkerror(name, image, brand, quantity, price))
    {
        document.getElementById('add-name').value  = '';
        document.getElementById('add-img').value  = '';
        document.getElementById('add-brand').value  = '';
        document.getElementById('add-quantity').value  = '';
        document.getElementById('add-price').value  = '';
        document.getElementById('add-category').value  = '';
        var item = 
        {
            name        : name,
            image       : image,
            brand       : brand,
            quantity    : quantity,
            price       : price,
            category    : category,
            detail      : detail
        }
        listProduct = JSON.parse(localStorage.getItem('storage'));
        listProduct.push(item);
        localStorage.setItem('storage',JSON.stringify(listProduct));
        displayAllProduct();
    }
}

function saveProduct(inDex) {
    listProduct = JSON.parse(localStorage.getItem('storage'));

    var name        = document.getElementById('edit-name').value;
    var image;
    if(document.getElementById('edit-img').value != "")
        image       = sliceString(document.getElementById('edit-img').value)
    else 
        image       = listProduct[inDex].image;
    var brand       = document.getElementById('edit-brand').value;
    var quantity    = document.getElementById('edit-quantity').value;
    var price       = document.getElementById('edit-price').value;
    var price       = document.getElementById('edit-price').value;
    var category    = document.getElementById('edit-category').value;
    var detail      = document.getElementById('edit-detail').value;
    if(detail == "")
        detail = 'Không có mô tả';


    if(!checkerror(name, image, brand, quantity, price))
    {
        listProduct[inDex].name      = name;
        listProduct[inDex].image     = image;
        listProduct[inDex].brand     = brand;
        listProduct[inDex].quantity  = quantity;
        listProduct[inDex].price     = price;
        listProduct[inDex].category  = category;
        listProduct[inDex].detail    = detail;

        localStorage.setItem('storage',JSON.stringify(listProduct));

        document.getElementById('editField').innerHTML = '';
        displayAllwithEdit();
    }
}

function deleteProduct (inDex) {
    listProduct = JSON.parse(localStorage.getItem('storage'));
    
    if(inDex+1>listProduct.length)
        {
            alert('Lỗi !!!');
        console.log(listProduct.value);
        }
    else
    {
        listProduct.splice(inDex, 1);
        localStorage.setItem('storage',JSON.stringify(listProduct));
    }
    displayAllwithEdit();
}

function showFormAdd() {
    listProduct = JSON.parse(localStorage.getItem('storage'));
    let str  =  '   <div class="product_form" >                 ' +
                '       <div class="product_row product_name">  ' +
                '       <label for="name" class="form_label">Tên sản phẩm: </label>' +
                '       <input class="form_input" type="text" id="add-name">  ' +
                '       </div>          ' +
        
                '       <div class="product_row product_img">  '+
                '       <label for="name" class="form_label line_height">Hình ảnh: </label>'+
                '       <input class="form_input line_height padding_0_16" type="file" id="add-img" accept="image/*">    '+
                '       </div>  '+ 
        
                '       <div class="product_row product_brand">  '+
                '       <label for="name" class="form_label">Thương hiệu: </label>'+
                '       <input class="form_input" type="text" id="add-brand">'+
                '       </div>'+
        
                '       <div class="product_row product_quantity">'+
                '       <label for="name" class="form_label">Số lượng sản phẩm: </label>'+
                '       <input class="form_input" type="text" id="add-quantity">'+
                '       </div>'+
        
                '       <div class="product_row product_price">'+
                '       <label for="name" class="form_label">Giá sản phẩm: </label>'+
                '       <input class="form_input" type="text" id="add-price">'+
                '       </div>'+
        
                '       <div class="product_row product_category">'+
                '       <label for="name" class="form_label">Loại sản phẩm: </label>'+
                '       <select class="form_input" name="" id="add-category">'+
                    '       <option value="Nam">Nam</option>'+
                    '       <option value="Nữ">Nữ</option>'+
                    '       <option value="Trẻ em">Trẻ em</option>'+
                '       </select>'+
                '       </div> ' +
                
                '       <div class="product_row product_detail">'+
                '       <label for="name" class="form_label">Mô tả sản phẩm: </label>'+
                '       <input class="form_input" type="text" id="add-detail">'+
                '       </div>'+

                '       <div class="product_row">'+
                '           <button class="btn" onclick="addProduct()">Thêm</button>'+
                '       </div>'+

                '       </div>'
    document.getElementById('addField').innerHTML = str;
}

function showFormEdit(inDex) {
    listProduct = JSON.parse(localStorage.getItem('storage'));
    let str  =  '   <div class="product_form" >                 ' +
                '       <div class="close-btn" onclick="close_form();"><i class="icon fa-solid fa-xmark"></i></div>' +
                '       <div class="product_row product_name">  ' +
                '       <label for="name" class="form_label">Tên sản phẩm: </label>' +
                '       <input class="form_input"  value = "'+ listProduct[inDex].name + '" type="text" id="edit-name">  ' +
                '       </div>          ' +

                
        
                '       <div class="product_row product_img">  '+
                '       <label for="name" class="form_label line_height">Hình ảnh: </label><img class="size_img" src="/assets/img/'+listProduct[inDex].image+'" alt="">'+
                '       <input class="form_input line_height padding_0_16" type="file" id="edit-img" accept="image/*">    '+
                '       </div>  '+ 
        
                '       <div class="product_row product_brand">  '+
                '       <label for="name" class="form_label">Thương hiệu: </label>'+
                '       <input class="form_input"  value = "'+ listProduct[inDex].brand + '" type="text" id="edit-brand">'+
                '       </div>'+
        
                '       <div class="product_row product_quantity">'+
                '       <label for="name" class="form_label">Số lượng sản phẩm: </label>'+
                '       <input class="form_input"  value = "'+ listProduct[inDex].quantity + '" type="text" id="edit-quantity">'+
                '       </div>'+
        
                '       <div class="product_row product_price">'+
                '       <label for="name" class="form_label">Giá sản phẩm: </label>'+
                '       <input class="form_input"  value = "'+ listProduct[inDex].price + '" type="text" id="edit-price">'+
                '       </div>'+
        
                '       <div class="product_row product_category">'+
                '       <label for="name" class="form_label">Loại sản phẩm: </label>'+
                '       <select class="form_input"  value = "'+ listProduct[inDex].category + '" name="" id="edit-category">'+
                    '       <option value="Nam">Nam</option>'+
                    '       <option value="Nữ">Nữ</option>'+
                    '       <option value="Trẻ em">Trẻ em</option>'+
                '       </select>'+
                '       </div> ' +
                
                '       <div class="product_row product_detail">'+
                '       <label for="name" class="form_label">Mô tả sản phẩm: </label>'+
                '       <input class="form_input"  value = "'+ listProduct[inDex].detail + '" type="text" id="edit-detail">'+
                '       </div>'+
        
                '       <div class="product_row">'+
                '           <button class="btn" onclick="saveProduct(' + inDex + '),close_form()"><a class="a_style" style="color: #333" href="#top">Lưu</a></button>'+
                '       </div>'
    document.getElementById('editField').innerHTML = str;
}

function close_form()
{
    document.getElementById("editArea").style.display = "none";
}

function display_form()
{
    document.getElementById("editArea").style.display = "block";
}


function checkerror(name, image, brand, quantity, price)
{
    if(name == "" || image == null || brand == "" || quantity == "" || price =="")
        {
            alert('Form chưa được điền đủ');

            return 1;
        }
    else if(isNaN(quantity))
    {
        alert('Số lượng nhập sai');
        return 1;
    }
    else if(isNaN(price))
    {
        alert('Giá tiền nhập sai');
        return 1;
    }
    else 
        return 0;
}


// DSSP

function displayDSSP() {
    listProduct = JSON.parse(localStorage.getItem('storage'));

    document.getElementById('DSSP').style.display = "block";   
    document.getElementById('SSP').style.display = "none";
    displayAllProduct();
}

// DSSP

function displaySSP() {
    document.getElementById('DSSP').style.display = "none"; 
    document.getElementById('SSP').style.display = "block";
    document.getElementById('editArea').style.display = "none";
    displayAllwithEdit();
}