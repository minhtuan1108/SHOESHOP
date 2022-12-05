var tempImg = ''


function getQuantityOfProduct(id)
{
    lsProductDetail = JSON.parse(localStorage.getItem('listProductDetail'));
    let quantityOfProduct = 0;
    for (let i = 0; i < lsProductDetail.length; i++) {
        if(lsProductDetail[i].idProduct == id)
            quantityOfProduct = quantityOfProduct + parseInt(lsProductDetail[i].quantity)
        }
    if(quantityOfProduct != 0)
        return quantityOfProduct;   
    else 
        return 'Out of stock'
}

function displayListSizeOfProduct(x)
{
    lsProductDetail = JSON.parse(localStorage.getItem('listProductDetail'));
    lsProduct = JSON.parse(localStorage.getItem('listProduct'));
    if(getQuantityOfProduct(lsProduct[x].id) == 'Out of stock')
        return -1;

    var tempList = [];
    for (let i = 0; i < lsProductDetail.length; i++) 
        if(lsProduct[x].id == lsProductDetail[i].idProduct && !tempList.includes(lsProductDetail[i].idSize))
            tempList.push(lsProductDetail[i].idSize);

    let str = '<ul class="text_justify" style="width: max-content;">';
    for (let i = 0; i < tempList.length; i++) {
        let tempQuantity = 0;
        for (let j = 0; j < lsProductDetail.length; j++) 
            if(lsProductDetail[j].idSize == tempList[i] && lsProduct[x].id == lsProductDetail[j].idProduct)
                tempQuantity = tempQuantity + parseInt(lsProductDetail[j].quantity)
        str += '<li class="list_style">'+ tempList[i]+': '+ tempQuantity+'</li>'
    }
    str += '</ul>'

    document.getElementById('listSizeArea'+x+'').style.display = "block";
    document.getElementById('listSizeArea'+x+'').innerHTML = str; 
}
function hideListSizeOfProduct(x)
{
    document.getElementById('listSizeArea'+x+'').style.display = "none";
 
}
function displayAllProduct() {
    lsProduct = JSON.parse(localStorage.getItem('listProduct'));
    let str =   '   <tr>\n '+
                '   <td class="table_pd_first_column text_center">Product ID</td>\n' +
                '   <td class="table_pd_second_column text_center">Name</td>\n' +
                '   <td class="table_pd_third_column text_center">Image</td>\n' +
                '   <td class="table_pd_fouth_column text_center">Brand</td>\n' +
                '   <td class="table_pd_fifth_columnn text_center">Quantity</td>\n' +
                '   <td class="table_pd_sixth_column text_center">Price</td>\n' +
                '   <td class="table_pd_eighth_column text_center">Discount</td>\n' +
                '   <td class="table_pd_nineth_column text_center">Type</td>\n' +
                '   <td class="table_pd_tenth_column text_center">Add Quantity</td>\n' +
                '   <td class="table_pd_tenth_column text_center">Edit</td>\n' +
                '   </tr>';
    if(lsProduct.length == 0){
        str = '<tr><td>Out of stock</td></tr>';
        }
    else{ 
    for (let i = 0; i < lsProduct.length; i++) {
        str +=  '<tr><td class="text_center item">' + lsProduct[i].id + '</td>' +
                '<td class="text_center">' + lsProduct[i].name + '</td>' 
                if(lsProduct[i].image.length < 100)
                    str +=  '<td class="text_center"><img class="size_img" src="'+lsProduct[i].image +'/1.jpg " alt=""></td>' 
                else
                    str +=  '<td class="text_center"><img class="size_img" src="'+lsProduct[i].image +'" alt=""></td>' 
                str +=  '<td class="text_center">' + lsProduct[i].brand + '</td>' +
                '<td class="text_center quantityProduct" onmouseover="displayListSizeOfProduct('+i+')"; onmouseout="hideListSizeOfProduct('+i+')">' + getQuantityOfProduct(lsProduct[i].id) + '<div id="listSizeArea'+i+'" class="SizeArea" style="display: none"></div></div></td>' +
                '<td class="text_center">' + lsProduct[i].price + '</td>' +
                '<td class="text_center">' + lsProduct[i].discount + '%</td>' 
                if(lsProduct[i].type == true)
                    str +='<td class="text_center">Male</td>'
                else
                    str +='<td class="text_center">Female</td>'
        str +=  '<td class="text_center"><button  class="btn" onclick="showFormAddQuantity('+ i + ')"><a class="a_style" style="color: #333" href="#main">Add</a></button></td>'+
                '<td class="text_center"><button  class="btn" onclick="displaySSP();displayAllwithEdit('+ i + ')"><a class="a_style" style="color: #333" href="#main">Edit</a></button></td></tr>'
            }
        }
            document.getElementById('displayListProduct').innerHTML = str; 
}


function showFormAddQuantity(i) {
    document.getElementById('addField').style.display = "none";
    document.getElementById('addQuantityField').style.display = "block";
    lsProduct = JSON.parse(localStorage.getItem('listProduct'));
    let str  =  '   <div class="product_form" >                 ' +
                '       <div class="product_row product_name">  ' +
                '       <label for="add-name" class="form_label">Name: </label>' +
                '       <input class="form_input"  value = "'+ lsProduct[i].name + '"  type="text" id="nameProductAddQuantity" disabled>  ' +
                '       </div>          ' +
        
                '       <div class="product_row product_img">  '+
                '       <label for="add-img" class="form_label line_height_100" style="flex: 1">Image: </label>'+
                '       <div class="preview">'
                        if(lsProduct[i].image.length < 100)
                            str+='<img class="size_img border_radius_5px" src="'+ lsProduct[i].image + '/1.jpg" alt=""  id="file-preview">'
                        else
                            str+='<img class="size_img border_radius_5px" src="'+ lsProduct[i].image + '" alt=""  id="file-preview">'
                str +=' </div>'+
                '       </div>  '+ 
        
                '       <div class="product_row product_brand">  '+
                '       <label for="add-brand" class="form_label">Brand: </label>'+
                '       <input class="form_input"  value = "'+ lsProduct[i].brand + '"  type="text" id="brandProductAddQuantity" disabled>'+
                '       </div>'+

        
                '       <div class="product_row product_price">'+
                '       <label for="add-price" class="form_label">Price: </label>'+
                '       <input class="form_input"  value = "'+ lsProduct[i].price + '" min="1000" type="number" id="priceProductAddQuantity" disabled>'+
                '       </div>'+

                '       <div class="product_row product_discount">'+
                '       <label for="add-discount" class="form_label">Discount: </label>'+
                '       <input class="form_input"  value = "'+ lsProduct[i].discount + '" min="0" type="number" id="discountProductAddQuantity" disabled>'+
                '       </div>'+
        
                '       <div class="product_row product_type">'+
                '       <label for="add-type" class="form_label">Type: </label>'+
                '       <select class="form_input" name="" id="typeProductAddQuantity" disabled>'
                        if(lsProduct[i].type == true){
                            str +=  '       <option value="Male" selected>Male</option>'+
                                    '       <option value="Female">Female</option>'
                        }
                        else{
                            str +=  '       <option value="Male">Male</option>'+
                                    '       <option value="Female" selected>Female</option>'
                        }
    str +=      '       </select>'+
                '       </div> ' +
                
                '       <div class="product_row product_disc">'+
                '       <label for="add-disc" class="form_label">Description: </label>'+
                '       <input class="form_input"  value = "'+ lsProduct[i].disc + '"  type="text" id="discProductAddQuantity" disabled>'+

                '       </div>'+
                '       <div class="add_size_product">'       + 
                    '       <div class="product_row product_detail">'+
                    '       <label for="name" class="form_label" style="flex: 1">Product Detail: </label>'+               
                    '       </div>'+

                    '       <div class="product_row product_detail text_center">'+

                        '       <div class="flex_1">'+
                        '       <label for="name" class="form_label">Size: </label>'+
                        '       <input class="form_input" type="number" min="0" id="add-size-Product-exist">'+
                        '       </div>'+
                        '       <div class="flex_1">'+
                        '       <label for="name" class="form_label">Quantity: </label>'+
                        '       <input class="form_input" type="number" min="0" id="add-quantity-Product-exist">'+
                        '       </div>'+
                        '       <div class="flex_1">'+
                        '           <div class="TempList" style="z-index:3" onmouseover="ShowTempListSizeExit()"; onmouseout="HideTempListSizeExit()">List size<div id="listTempSizeArea2" class="TempListArea"  style="display: none"></div></div>'+
                        '       </div>'+
                    '       </div>'+

                    '       <div class="product_row" style="justify-content: space-evenly;">'+
                    '           <button class="btn" onclick="addSizeProductExist()">Add size</button>'+
                    '           <button class="btn" onclick="ClearDataSize()">Clear size</button>'+
                    '       </div>'+
                '       </div>'+
                '       <div class="product_row">'+
                '           <button class="btn" onclick="addProductExist('+i+')"><a class="a_style" style="color: #333" href="#top">Add</a></button>'+
                '       </div>'+

                '       </div>'
               
    document.getElementById('addQuantityField').innerHTML = str;
}

function addSizeProductExist()
{
    if(document.getElementById('add-size-Product-exist').value == "")
    {
        alert('Size has not been filled');
        return 1;
    }
    else if(document.getElementById('add-quantity-Product-exist').value == "")
    {
        alert('Quantity has not been filled');
        return 1;
    }
    else if(document.getElementById('add-size-Product-exist').value < 0)
    {
        alert('Size error');
        return 1;
    }
    else if(document.getElementById('add-quantity-Product-exist').value < 0)
    {
        alert('Quantity error');
        return 1;
    }
    else
    {
        var idSize = 'S'+document.getElementById('add-size-Product-exist').value;
        var quantity = document.getElementById('add-quantity-Product-exist').value;
        document.getElementById('add-size-Product-exist').value = '';
        document.getElementById('add-quantity-Product-exist').value = '';
        var Sizeitem = 
        {
            idSize          : idSize,
            quantity        : parseInt(quantity)
        }
        tempSizeList = JSON.parse(localStorage.getItem('tempList'));
        tempSizeList.push(Sizeitem)
        localStorage.setItem('tempList',JSON.stringify(tempSizeList));
    }
}

function addProductExist(x)
{
    tempSizeList = JSON.parse(localStorage.getItem('tempList'));
    lsProduct = JSON.parse(localStorage.getItem('listProduct'));
    lsProductDetail = JSON.parse(localStorage.getItem('listProductDetail'));

    for (let i = 0; i < tempSizeList.length; i++)
    {
        var itemSize =
        {
            idProduct       : lsProduct[x].id,
            idSize          : tempSizeList[i].idSize,
            quantity        : tempSizeList[i].quantity
        }
        lsProductDetail.push(itemSize);
    }

    tempSizeList = [];
    localStorage.setItem('tempList',JSON.stringify(tempSizeList));
    localStorage.setItem('listProductDetail',JSON.stringify(lsProductDetail));
    document.getElementById('addField').style.display = "block";
    document.getElementById('addQuantityField').style.display = "none";
    displayAllProduct();
}


function showFormAdd() {
    lsProduct = JSON.parse(localStorage.getItem('listProduct'));
    let str  =  '   <div class="product_form" >                 ' +
                '       <div class="product_row product_name">  ' +
                '       <label for="add-name" class="form_label">Name: </label>' +
                '       <input class="form_input" type="text" id="add-name">  ' +
                '       </div>          ' +
        
                '       <div class="product_row product_img">  '+
                '       <label for="add-img" class="form_label line_height_100 form_label_img" style="flex: 1">Image: </label>'+
                '       <input class="form_input"  type="file" id="add-img" onchange="showPreview(event), chooseFileImg();">    '+
                '       <div class="preview">'+
                '           <img class="size_img border_radius_5px" src=" " alt=""  id="file-preview">'+
                '       </div>'+
                '       </div>  '+ 
        
                '       <div class="product_row product_brand">  '+
                '       <label for="add-brand" class="form_label">Brand: </label>'+
                '           <select id="add-brand"  class="form_input">'+
                                '<option value="Asics">Asics</option>'+
                                '<option value="Mizuno">Mizuno</option>'+
                                '<option value="Beyono">Beyono</option>'+
                                '<option value="Nike">Nike</option>'+
                                '<option value="Adidas">Adidas</option>'+
                            '</select> ' +
                '       </div>'+

        
                '       <div class="product_row product_price">'+
                '       <label for="add-price" class="form_label">Price: </label>'+
                '       <input class="form_input" type="number" min="1000" id="add-price">'+
                '       </div>'+

                '       <div class="product_row product_discount">'+
                '       <label for="add-discount" class="form_label">Discount: </label>'+
                '       <input class="form_input" type="number" min="0" id="add-discount">'+
                '       </div>'+
        
                '       <div class="product_row product_type">'+
                '       <label for="add-type" class="form_label">Type: </label>'+
                '       <select class="form_input" name="" id="add-type">'+
                    '       <option value="Male">Male</option>'+
                    '       <option value="Female">Female</option>'+
                '       </select>'+
                '       </div> ' +
                
                '       <div class="product_row product_disc">'+
                '       <label for="add-disc" class="form_label">Description: </label>'+
                '       <input class="form_input" type="text" id="add-disc">'+

                '       </div>'+
                '       <div class="add_size_product">'       + 
                    '       <div class="product_row product_detail">'+
                    '       <label for="name" class="form_label" style="flex: 1">Product Detail: </label>'+               
                    '       </div>'+

                    '       <div class="product_row product_detail text_center">'+

                        '       <div class="flex_1">'+
                        '       <label for="name" class="form_label">Size: </label>'+
                        '       <input class="form_input" type="number" min="0" id="add-size">'+
                        '       </div>'+
                        '       <div class="flex_1">'+
                        '       <label for="name" class="form_label">Quantity: </label>'+
                        '       <input class="form_input" type="number" min="0" id="add-quantity">'+
                        '       </div>'+
                        '       <div class="flex_1">'+
                        '           <div class="TempList" style="z-index:3" onmouseover="ShowTempListSize()"; onmouseout="HideTempListSize()">List size<div id="listTempSizeArea1" class="TempListArea"  style="display: none"></div></div>'+
                        '       </div>'+
                    '       </div>'+

                    '       <div class="product_row" style="justify-content: space-evenly;">'+
                    '           <button class="btn" onclick="addSizeProduct()">Add size</button>'+
                    '           <button class="btn" onclick="ClearDataSize()">Clear size</button>'+
                    '       </div>'+
                '       </div>'+
                '       <div class="product_row" style="justify-content: space-evenly;">'+
                '           <button class="btn" onclick="addProduct()">Add</button>'+
                '           <button class="btn" onclick="ClearData()">Clear Data</button>'+
                '       </div>'+
                '       </div>'
    
                
    document.getElementById('addField').innerHTML = str;
}

function ShowTempListSize()
{
    tempSizeList = JSON.parse(localStorage.getItem('tempList'));
    var temp = [];
    for (let i = 0; i < tempSizeList.length; i++) 
        if(!temp.includes(tempSizeList[i].idSize))
            temp.push(tempSizeList[i].idSize);

    let str = '<ul class="text_justify" style="width: max-content;">';
    if(temp.length == 0)
        str += '<li class="list_style">Empty</li>'
    else
        for (let i = 0; i < temp.length; i++) {
            let tempQuantity = 0;
            for (let j = 0; j < tempSizeList.length; j++) 
                if(tempSizeList[j].idSize == temp[i])
                    tempQuantity = tempQuantity + parseInt(tempSizeList[j].quantity)
            str += '<li class="list_style">'+ temp[i]+': '+ tempQuantity+'</li>'
        }
    str += '</ul>'
    document.getElementById('listTempSizeArea1').style.display = "block";
    document.getElementById('listTempSizeArea1').innerHTML = str; 
}

function HideTempListSize()
{
    document.getElementById('listTempSizeArea1').style.display = "none";
}

function ShowTempListSizeExit()
{
    tempSizeList = JSON.parse(localStorage.getItem('tempList'));
    var temp = [];
    for (let i = 0; i < tempSizeList.length; i++) 
        if(!temp.includes(tempSizeList[i].idSize))
            temp.push(tempSizeList[i].idSize);

    let str = '<ul class="text_justify" style="width: max-content;">';
    if(temp.length == 0)
        str += '<li class="list_style">Empty</li>'
    else
        for (let i = 0; i < temp.length; i++) {
            let tempQuantity = 0;
            for (let j = 0; j < tempSizeList.length; j++) 
                if(tempSizeList[j].idSize == temp[i])
                    tempQuantity = tempQuantity + parseInt(tempSizeList[j].quantity)
            str += '<li class="list_style">'+ temp[i]+': '+ tempQuantity+'</li>'
        }
    str += '</ul>'
    document.getElementById('listTempSizeArea2').style.display = "block";
    document.getElementById('listTempSizeArea2').innerHTML = str; 
}

function HideTempListSizeExit()
{
    document.getElementById('listTempSizeArea2').style.display = "none";
}

function ClearDataSize(){
    tempSizeList = [];
    localStorage.setItem('tempList',JSON.stringify(tempSizeList));
}
function ClearData(){
    document.getElementById('add-name').value  = '';
    document.getElementById('add-img').value  = '';
    document.getElementById('add-brand').value  = '';
    document.getElementById('add-price').value  = '';
    document.getElementById('add-discount').value  = '';
    document.getElementById('add-type').value  = '';
    document.getElementById('add-disc').value  = '';
    document.getElementById("file-preview").src = '';
    tempSizeList = [];
    localStorage.setItem('tempList',JSON.stringify(tempSizeList));
}

function addSizeProduct()
{
    if(document.getElementById('add-size').value == "")
    {
        alert('Size has not been filled');
        return 1;
    }
    else if(document.getElementById('add-quantity').value == "")
    {
        alert('Quantity has not been filled');
        return 1;
    }
    else if(document.getElementById('add-size').value < 0)
    {
        alert('Size error');
        return 1;
    }
    else if(document.getElementById('add-quantity').value < 0)
    {
        alert('Quantity error');
        return 1;
    }
    else
    {
        var idSize = 'S'+document.getElementById('add-size').value;
        var quantity = document.getElementById('add-quantity').value;
        document.getElementById('add-size').value = '';
        document.getElementById('add-quantity').value = '';
        var Sizeitem = 
        {
            idSize          : idSize,
            quantity        : parseInt(quantity)
        }
        tempSizeList = JSON.parse(localStorage.getItem('tempList'));
        tempSizeList.push(Sizeitem)
        localStorage.setItem('tempList',JSON.stringify(tempSizeList));
    }
}

function addProduct(){  
    lsProduct = JSON.parse(localStorage.getItem("listProduct"));
    var id = createGeneralID(lsProduct);
    var name = document.getElementById('add-name').value;   
    var image = tempImg;
    var brand = document.getElementById('add-brand').value;
    var price = document.getElementById('add-price').value;
    var discount = document.getElementById('add-discount').value;
    var type = document.getElementById('add-type').value;
    var disc = document.getElementById('add-disc').value;
    if(disc == "")
        disc = 'no description';
    if(discount == "")
        discount = 0;
    if(document.getElementById('add-img').value == "")
        alert("There are no photos for this product yet")
    else   if(!checkerror(name, brand, price) && !checkEmptyQuantity())
    {
        document.getElementById('add-name').value  = '';
        document.getElementById('add-img').value  = '';
        document.getElementById('add-brand').value  = 'Asics';
        document.getElementById('add-price').value  = '';
        document.getElementById('add-discount').value  = '';
        document.getElementById('add-type').value  = 'Male';
        document.getElementById('add-disc').value  = '';
        var item = 
        {
            id          : id,
            name        : name,
            image       : image,
            brand       : brand,
            price       : price,
            discount    : discount,
            type        : type,
            disc        : disc
        }
        lsProduct.push(item);
        localStorage.setItem('listProduct',JSON.stringify(lsProduct));


        tempSizeList = JSON.parse(localStorage.getItem('tempList'));
        LsSize = JSON.parse(localStorage.getItem('listSize'));
        lsProductDetail = JSON.parse(localStorage.getItem('listProductDetail'));

        for (let i = 0; i < tempSizeList.length; i++)
        {
            var itemSize =
            {
                idProduct      : id,
                idSize  : tempSizeList[i].idSize,
                quantity: tempSizeList[i].quantity
            }
            lsProductDetail.push(itemSize);
        }
        for(let i = 0; i < tempSizeList.length; i++)        
        {
            var d = 0 ;
            for(let j = 0; j < LsSize.length; j++)        
            if(tempSizeList[i].idSize == LsSize[j].id)
            {
                d++;
            }
            if(d==0)
            {
                var newValue = tempSizeList[i].idSize.slice(1)
                var NewSize =
                {
                    id : tempSizeList[i].idSize,
                    value : parseFloat(newValue)
                }
                LsSize.push(NewSize);
            }
        }
        tempSizeList = [];
        localStorage.setItem('tempList',JSON.stringify(tempSizeList));
        localStorage.setItem('listSize',JSON.stringify(LsSize));
        localStorage.setItem('listProductDetail',JSON.stringify(lsProductDetail));
        var preview = document.getElementById("file-preview");
        preview.style.display = "none";
        tempImg = ''
        displayAllProduct();
    }
}

function close_form()
{
    document.getElementById("editArea").style.display = "none";
}

function display_form()
{
    document.getElementById("editArea").style.display = "block";
}

// FILTER

function displayAllFilteredProduct()
{
    var tempListProduct = JSON.parse(localStorage.getItem("listProduct"));
    lsProduct = JSON.parse(localStorage.getItem("listProduct"));
    var nameEdit = document.getElementById('Filter_name_product').value;   
    var brandEdit = document.getElementById('Filter_brand_product').value;
    var priceEdit = document.getElementById('Filter_price_product').value;
    var typeEdit = document.getElementById('Filter_type_product').value;

    document.getElementById('Filter_name_product').value  = '';   
    document.getElementById('Filter_brand_product').value  = '0';
    document.getElementById('Filter_price_product').value  = '0';
    document.getElementById('Filter_type_product').value  = '0';
    if(nameEdit != "")
        for(let i = 0; i < tempListProduct.length; i++)
            if(!tempListProduct[i].name.includes(nameEdit))
                {
                    tempListProduct.splice(i, 1);
                    i--;
                }
    if(brandEdit != "0") 
        for(let i = 0; i < tempListProduct.length; i++)
            if(!tempListProduct[i].brand.includes(brandEdit))
            {
                tempListProduct.splice(i, 1);
                i--;
            }
    if(typeEdit != "0")
        for(let i = 0; i < tempListProduct.length; i++)
            if(tempListProduct[i].type != typeEdit)
            {
                tempListProduct.splice(i, 1);
                i--;
            }
    if(priceEdit != "0")
        if(priceEdit != "5000001")
            {
                for(let i = 0; i < tempListProduct.length; i++)
                if(tempListProduct[i].price > priceEdit)
                {
                    tempListProduct.splice(i, 1);
                    i--;
                }
            }
        else if(priceEdit === "5000001")
            for(let i = 0; i < tempListProduct.length; i++)
                if(tempListProduct[i].price < priceEdit)
                {
                    tempListProduct.splice(i, 1);
                    i--;
                }
    let str =   '   <tr>\n '+
    '   <td class="table_pd_first_column text_center">Product ID</td>\n' +
    '   <td class="table_pd_second_column text_center">Name</td>\n' +
    '   <td class="table_pd_third_column text_center">Image</td>\n' +
    '   <td class="table_pd_fouth_column text_center">Brand</td>\n' +
    '   <td class="table_pd_fifth_columnn text_center">Quantity</td>\n' +
    '   <td class="table_pd_sixth_column text_center">Price</td>\n' +
    '   <td class="table_pd_eighth_column text_center">Description</td>\n' +
    '   <td class="table_pd_nineth_column text_center">Type</td>\n' +
    '   <td class="table_pd_tenth_column text_center">Add Quantity</td>\n' +
    '   <td class="table_pd_tenth_column text_center">Edit</td>\n' +
    '   </tr>';
    if(tempListProduct.length == 0){
        str = '<tr><td>Products do not exist</td></tr>';
        }
    else{ 
    for (let i = 0; i < tempListProduct.length; i++) {
        var tempPosition = 0;
        for(let j = 0; j < lsProduct.length; j++)
            if(tempListProduct[i].id == lsProduct[j].id)
                tempPosition = j;
        str +=  '<tr><td class="text_center">' + tempListProduct[i].id + '</td>' +
                '<td class="text_center">' + tempListProduct[i].name + '</td>' 
                if(tempListProduct[i].image.length < 100)
                    str +=  '<td class="text_center"><img class="size_img" src="'+tempListProduct[i].image +'/1.jpg " alt=""></td>' 
                else
                    str +=  '<td class="text_center"><img class="size_img" src="'+tempListProduct[i].image +'" alt=""></td>' 
        str +=      '<td class="text_center">' + tempListProduct[i].brand + '</td>' +
                    '<td class="text_center quantityProduct" onmouseover="displayListSizeOfProduct('+i+')"; onmouseout="hideListSizeOfProduct('+i+')">' + getQuantityOfProduct(tempListProduct[i].id) + '<div id="listSizeArea'+i+'" class="SizeArea" style="display: none"></div></div></td>' +
                    '<td class="text_center">' + tempListProduct[i].price + '</td>' +
                    '<td class="text_center">' + tempListProduct[i].discount + '%</td>' 
                    if(lsProduct[i].type == true)
                        str +='<td class="text_center">Male</td>'
                    else
                        str +='<td class="text_center">Female</td>'
        str+=       '<td class="text_center"><button  class="btn" onclick="showFormAddQuantity('+ tempPosition + ')"><a class="a_style" style="color: #333" href="#addQuantityField">Add</a></button></td>'+
                    '<td class="text_center"><button  class="btn" onclick="displaySSP();displayAllwithEdit('+ tempPosition + ')"><a class="a_style" style="color: #333" href="#main">Edit</a></button></td></tr>'
            }
        }
            document.getElementById('displayListProduct').innerHTML = str; 
}




function checkerror(name, brand, price)
{
    if(name == ""  || brand == "" || price =="")
        {
            alert('The form has not been filled in completely');
            return 1;
        }
    return 0;
}

function checkEmptyQuantity()
{
    tempSizeList = JSON.parse(localStorage.getItem('tempList'));
    if(tempSizeList.length == 0)
    {
        alert("The product has no quantity yet");
        return 1;
    }
    return 0;
}

// DSSP

function displayDSSP() {

    document.getElementById('DSSP').style.display = "block";   
    document.getElementById('SSP').style.display = "none";
    document.getElementById('ND').style.display = "none";
    document.getElementById('DH').style.display = "none";
    document.getElementById('TK').style.display = "none";
    displayAllProduct();
}

// DSSP

function displaySSP() {
    document.getElementById('SSP').style.display = "block";
    document.getElementById('editArea').style.display = "none";
    document.getElementById('DSSP').style.display = "none"; 
    document.getElementById('ND').style.display = "none";
    document.getElementById('DH').style.display = "none";
    document.getElementById('TK').style.display = "none";
}
