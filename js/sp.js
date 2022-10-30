let listProduct = ['adidas', 'nike', 'puma', 'jordan', 'supreme'];
let listProductQuantity = [5,4,3,2,1];
let listProductPrice = [500,48,36,25,14];
let listProductCategory = ["Trẻ em","Nữ","Nam","Nam","Nữ"];

function renderListProduct()
{
    for (let i = 0; i < listProduct.length; i++) {
        let list = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
        list.push(listProduct[i]);
        localStorage.setItem('list',JSON.stringify(list));
    }
    console.log(list.length);
}

function displayAll() {
    let str =   '   <tr>\n '+
                '   <td class="table_pd_first_column text_center">Tên sản phẩm</td>\n' +
                '   <td class="table_pd_second_column text_center">Số lượng</td>\n' +
                '   <td class="table_pd_third_column text_center">Giá</td>\n' +
                '   <td class="table_pd_fouth_column text_center">Loại</td>\n' +
                '   </tr>';
    for (let i = 0; i < listProduct.length; i++) {
        str +=  '<tr><td>' + listProduct[i] + '</td>' +
                '<td class="text_center">' + listProductQuantity[i] + '</td>' +
                '<td class="text_center">' + listProductPrice[i] + '</td>' +
                '<td class="text_center">' + listProductCategory[i] + '</td></tr>'

            }
            document.getElementById('displayArea').innerHTML = str;

    
}

function displayAllwithDelete() {
    let str =   '   <tr>\n '+
                '   <td class="table_pd_first_column text_center">Tên sản phẩm</td>\n' +
                '   <td class="table_pd_second_column text_center">Số lượng</td>\n' +
                '   <td class="table_pd_third_column text_center">Giá</td>\n' +
                '   <td class="table_pd_fouth_column text_center">Loại</td>\n' +
                '   <td class="table_pd_fifth_column text_center">Xóa</td>\n' +
                '   </tr>';
    for (let i = 0; i < listProduct.length; i++) {
        str +=  '<tr><td>' + listProduct[i] + '</td>' +
                '<td class="text_center">' + listProductQuantity[i] + '</td>' +
                '<td class="text_center">' + listProductPrice[i] + '</td>' +
                '<td class="text_center">' + listProductCategory[i] + '</td>' +
                //'<td><button onclick="showFormEdit(' + i + ')">Edit</button></td>'
                '<td class="text_center"><button  class="btn" onclick="deleteProduct(' + i + ')">Delete</button></td></tr>'
            
    }
    document.getElementById('displayArea').innerHTML = str;
}

function displayAllwithEdit() {
    let str =   '   <tr>\n '+
                '   <td class="table_pd_first_column text_center">Tên sản phẩm</td>\n' +
                '   <td class="table_pd_second_column text_center">Số lượng</td>\n' +
                '   <td class="table_pd_third_column text_center">Giá</td>\n' +
                '   <td class="table_pd_fouth_column text_center">Loại</td>\n' +
                '   <td class="table_pd_fifth_column text_center">Sửa</td>\n' +
                '   </tr>';
    for (let i = 0; i < listProduct.length; i++) {
        str +=  '<tr><td>' + listProduct[i] + '</td>' +
                '<td class="text_center">' + listProductQuantity[i] + '</td>' +
                '<td class="text_center">' + listProductPrice[i] + '</td>' +
                '<td class="text_center">' + listProductCategory[i] + '</td>' +
                '<td class="text_center"><button class="btn text_center" onclick="showFormEdit(' + i + ')">Edit</button></td></tr>'
            
    }
    document.getElementById('displayArea').innerHTML = str;
}
function addProduct(){  
    let productName = document.getElementById('add-name').value;
    let productQuantity = document.getElementById('add-quantity').value;
    let productPrice = document.getElementById('add-price').value;
    let productCategory = document.getElementById('add-category').value;

    if(!checkerror(productName, productQuantity, productPrice, productCategory))
    {
        document.getElementById('add-name').value  = '';
        document.getElementById('add-quantity').value  = '';
        document.getElementById('add-price').value  = '';
        document.getElementById('add-category').value  = '';



        listProduct.push(productName);
        console.log(listProduct);

        listProductQuantity.push(productQuantity);
        console.log(listProductQuantity);

        listProductPrice.push(productPrice);
        console.log(listProductPrice);

        listProductCategory.push(productCategory);
        console.log(listProductCategory);
        displayAll();
    }
}

function deleteProduct (inDex) {
    if(inDex+1>listProduct.length)
    alert('Lỗi !!!');
    else
    {
        listProduct.splice (inDex, 1);
        listProductQuantity.splice (inDex, 1);
        listProductCategory.splice (inDex, 1);
        listProductPrice.splice (inDex, 1);
    }
    displayAllwithDelete();
}

function showFormEdit(inDex) {
    let str = '';
    str = '<input type="text" id="editProduct" value="' + listProduct[inDex] + '"><button onclick="saveProduct(' + inDex + ')">Save</button>';
    document.getElementById('edit').innerHTML = str;
}

function saveProduct(inDex) {
    listProduct[inDex] = document.getElementById('editProduct').value;
    document.getElementById('edit').innerHTML = '';
    displayAll();
}

function checkerror(productName, productQuantity, productPrice, productCategory)
{
    if(productName == "" || productQuantity == "" || productPrice =="" || productCategory =="")
        {
            alert('Form chưa được điền đủ');
            return 1;
        }
    else if(isNaN(productQuantity))
    {
        alert('Số lượng nhập sai');
        return 1;
    }
    else if(isNaN(productPrice))
    {
        alert('Giá tiền nhập sai');
        return 1;
    }
    else 
        return 0;
}
