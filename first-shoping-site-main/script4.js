function  createProduct() {

    const productHTML = document.createElement("div");
    productHTML.classList.add ("product");
    productHTML.setAttribute('id', 'product');
    return productHTML;
    
}

function createImg(product){
    const productImg = document.createElement("img");
    productImg.classList.add("productImg");
    productImg.src = product.image;

    return productImg;

}

function createHeader() {
    const headerHTML = document.createElement("h1");
    headerHTML.classList.add("head");
    headerHTML.innerHTML = "Welcome to my tea shop";
    return headerHTML;
    
}

function createTitle(product){
    
    const productTitle = document.createElement('h2');
    productTitle.classList.add("product-title");
    productTitle.innerHTML = product.name;
    return productTitle;
}

function createAddButton(){
    
    const addBtn = document.createElement("button")
    addBtn.classList.add("addBtn")
    addBtn.innerHTML = "Add Product"
    
    return addBtn
}





function createProductList(productList){
    const productListElement = document.createElement('div');
    productListElement.classList.add("productWrapper")
    if (productList && productList.length) {
        for (let i = 0; i < productList.length; i++) {
            const product = createProduct();
            productListElement.appendChild(product); 
            
            const productImg = createImg(productList[i]);
            product.appendChild(productImg)
                        

            const productTitle = createTitle(productList[i]);
            product.appendChild(productTitle);

            const addBtn = createAddButton();
            product.appendChild(addBtn)
        }
    } else {
            productListElement.innerHTML = "no items.";
    }    
    return productListElement;
}



function addnum(a,b){
    return a+b;
}
addnum(2,3)
