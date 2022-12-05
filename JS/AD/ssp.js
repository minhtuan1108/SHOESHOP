
function displayAllwithEdit(i) {

    lsProductDetail = JSON.parse(localStorage.getItem('listProductDetail'));
    lsProduct = JSON.parse(localStorage.getItem('listProduct'));
    
    let str =   ''
                if(lsProduct.length == 0){
                    str += '<tr><td>Out of stock</td></tr>';
                    }
                else{
        str +=  '<tr class=""><td class="table_pd_first_column text_center border_top_1px_black " >Product ID</td>\n '+
                '<td class="table_pd_second_column text_center border_top_1px_black">Name</td>\n' +
                '<td class="table_pd_third_column text_center border_top_1px_black">Image</td>\n' +
                '<td class="table_pd_fouth_column text_center border_top_1px_black">Brand</td>\n' +
                '<td class="table_pd_fouth_column text_center border_top_1px_black">Price</td>\n' +
                '<td class="table_pd_fifth_column text_center border_top_1px_black">Discount</td>\n' +
                '<td class="table_pd_sixth_column text_center border_top_1px_black">Type</td>\n' +
                '<td class="table_pd_seventh_column text_center border_top_1px_black">Discount</td>\n' +
                '</tr>'+
                '<tr><td class="text_center">' + lsProduct[i].id + '</td>' +
                '<td class="text_center">' + lsProduct[i].name + '</td>' 
                if(lsProduct[i].image.length < 100)
                    str +=  '<td class="text_center"><img class="size_img" src="'+lsProduct[i].image +'/1.jpg " alt=""></td>' 
                else
                    str +=  '<td class="text_center"><img class="size_img" src="'+lsProduct[i].image +'" alt=""></td>' 
                str +=  '<td class="text_center">' + lsProduct[i].brand + '</td>' +
                '<td class="text_center">' + lsProduct[i].price + '</td>' +
                '<td class="text_center">' + lsProduct[i].discount + '%</td>' 
                if(lsProduct[i].type == true)
                    str +='<td class="text_center">Male</td>'
                else
                    str +='<td class="text_center">Female</td>'
        str+=   '<td class="text_center">' + lsProduct[i].disc + '</td></tr>' +
                '<tr><td class="table_pd_seventh_column text_center line_height_30">Size</td>\n' +
                '<td class="table_pd_eighth_column text_center">Quantity</td>\n' +
                '<td class="table_pd_nineth_column text_center">Edit</td>\n' +
                '<td class="table_pd_tenth_column text_center right_border">Delete</td></tr>\n' 
        for(let j = 0; j < lsProductDetail.length; j++){
            if(lsProductDetail[j].idProduct == lsProduct[i].id){
            str +=  '<tr><td class="text_center line_height_30">' + lsProductDetail[j].idSize + '</td>' 
                    if(lsProductDetail[j].quantity > 0)
            str +=        '<td class="text_center">' + lsProductDetail[j].quantity + '</td>' 
                    else
            str +=        '<td class="text_center">Out of stock</td>'        
            str +=        '<td class="text_center"><button class="btn" onclick="display_form(),showFormEdit(' + i +','+ j + ')"><a class="a_style" style="color: #333" href="#editArea">Edit</a></button></td>' +
                    '<td class="text_center right_border"><button  class="btn" onclick="deleteProduct(' + i +','+ j + ')">Delete</button></td></tr>'
            }
        }

            str +=  '<tr style="height: 20px"></tr>'
            
    
}
    document.getElementById('displayEditArea').innerHTML = str;
}


function saveProduct(i, j) {
    lsProduct = JSON.parse(localStorage.getItem('listProduct'));

    var name        = document.getElementById('edit-name').value;
    var image;
    if(tempImg != "")
        image = tempImg;
    else 
        image       = lsProduct[i].image;
    var brand       = document.getElementById('edit-brand').value;
    var quantity    = document.getElementById('edit-quantity').value;
    var price       = document.getElementById('edit-price').value;
    var discount    = document.getElementById('edit-discount').value;
    var type        = document.getElementById('edit-type').value;
    var disc        = document.getElementById('edit-disc').value;
    if(disc == "")
        disc = 'no description';
    if(discount == "")
        discount = 0;

    if(checkerror(name, brand, price) == 0)
    if(quantity == "")
    {
        alert('The form has not been filled in completely');
    }
    else
    {
        {
            lsProduct[i].name           = name;
            lsProduct[i].image          = image;
            lsProduct[i].brand          = brand;
            lsProductDetail[j].quantity = quantity;
            lsProduct[i].price          = price;
            lsProduct[i].discount       = discount;
            lsProduct[i].type           = type;
            lsProduct[i].disc           = disc;

            localStorage.setItem('listProduct',JSON.stringify(lsProduct));
            localStorage.setItem('listProductDetail',JSON.stringify(lsProductDetail));

            tempImg = '';
            document.getElementById('editField').innerHTML = '';
            displayAllwithEdit(i);
            close_form();
        }
    }
}

function deleteProduct (index, j) {
    lsProduct = JSON.parse(localStorage.getItem('listProduct'));
    lsProductDetail = JSON.parse(localStorage.getItem('listProductDetail'));
    if (confirm("Are you sure you want to delete this product?")){
        let tempID = lsProductDetail[j].idProduct;
        lsProductDetail.splice(j, 1);
        localStorage.setItem('listProductDetail',JSON.stringify(lsProductDetail));
        for(let i = 0; i < lsProduct.length; i++)
            if(lsProduct[i].id == tempID && getQuantityOfProduct(tempID) == 'Out of stock')
                lsProduct.splice(i, 1);
        localStorage.setItem('listProduct',JSON.stringify(lsProduct));
        displayAllwithEdit(index);
    }
    
}


function showFormEdit(i, j) {
    lsProduct = JSON.parse(localStorage.getItem('listProduct'));
    lsProductDetail = JSON.parse(localStorage.getItem('listProductDetail'));
    let str  =  '   <div class="product_form" >                 ' +
                '       <div class="close-btn" onclick="close_form();"><i class="icon fa-solid fa-xmark"></i></div>' +


                '       <div class="product_row product_name">  ' +
                '       <label for="edit-name" class="form_label">Name: </label>' +
                '       <input class="form_input"  value = "'+ lsProduct[i].name + '" type="text" id="edit-name">  ' +
                '       </div>          ' +

                '       <div class="product_row product_img">  '
                        if(lsProduct[i].image.length < 100)
                            str  +=   '<label for="edit-img" class="form_label line_height_100"  style="flex: 1">Image: </label><img class="size_img border_radius_5px current_img" src="'+lsProduct[i].image+'/1.jpg" alt="" >'
                        else
                            str  +=   '<label for="edit-img" class="form_label line_height_100"  style="flex: 1">Image: </label><img class="size_img border_radius_5px current_img" src="'+lsProduct[i].image+'" alt="" >'
        str  += '       <input class="form_input padding_0_16" type="file" id="edit-img" accept="image/*" onchange="showPreviewEdit(event), UpdateFileImg();">    '+
                '       <div class="preview">'+
                '           <img class="size_img border_radius_5px" src=" " alt=""  id="file-preview-edit">'+
                '       </div>'+
                '       </div>  '+ 
        
                '       <div class="product_row product_brand">  '+
                '       <label for="edit-brand" class="form_label">Brand: </label>'+
                '           <select id="edit-brand"  class="form_input">'+
                                '<option value="'+ lsProduct[i].brand + '" selected>'+ lsProduct[i].brand + '</option>'+
                                '<option value="Asics">Asics</option>'+
                                '<option value="Mizuno">Mizuno</option>'+
                                '<option value="Beyono">Beyono</option>'+
                                '<option value="Nike">Nike</option>'+
                                '<option value="Adidas">Adidas</option>'+
                            '</select> ' +
                '       </div>'+
        
                '       <div class="product_row product_quantity">'+
                '       <label for="edit-quantity" class="form_label">Quantity: </label>'+
                '       <input class="form_input"  value = "'+ lsProductDetail[j].quantity + '" type="text" id="edit-quantity">'+
                '       </div>'+
        
                '       <div class="product_row product_price">'+
                '       <label for="edit-price" class="form_label">Price: </label>'+
                '       <input class="form_input"  value = "'+ lsProduct[i].price + '" type="number" id="edit-price">'+
                '       </div>'+
                
                '       <div class="product_row product_price">'+
                '       <label for="edit-discount" class="form_label">Discount: </label>'+
                '       <input class="form_input"  value = "'+ lsProduct[i].discount + '" type="number" id="edit-discount">'+
                '       </div>'+

                '       <div class="product_row product_type">'+
                '       <label for="edit-type" class="form_label">Type: </label>'+
                '       <select class="form_input"  value = "'+ lsProduct[i].type + '" name="" id="edit-type">'
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
                
                '       <div class="product_row product_detail">'+
                '       <label for="edit-disc" class="form_label">Description: </label>'+
                '       <input class="form_input"  value = "'+ lsProduct[i].disc + '" type="text" id="edit-disc">'+
                '       </div>'+
        
                '       <div class="product_row">'+
                '           <button class="btn" onclick="saveProduct(' + i +','+ j + ')">Save</button>'+
                '       </div>'
    document.getElementById('editField').innerHTML = str;
}

