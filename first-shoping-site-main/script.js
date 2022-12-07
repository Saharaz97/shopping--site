const productContainer = document.getElementById("product-container");
const headerContainer = document.getElementById("header-container");
let productsArray = [];


productsArray.push({
    name: 'Black Tea',
    amount: 99,
    price: 20,
    image:"black_tea.jpg"
});


productsArray.push({
    name: 'Green Tea',
    amount: 99,
    price: 15,
    image:"green_tea.jpg"
});


productsArray.push({
    name: 'Cinamon Tea',
    amount: 99,
    price: 25,
    image:"Cinamon_tea.jpg"
});

productsArray.push({
    name: 'Black Coffee',
    amount: 99,
    price: 10,
    image:"black_coffee.jpg"
});

const productsHTML = createProductList(productsArray);
productContainer.appendChild(productsHTML);
const headerHTML = createHeader()
headerContainer.appendChild(headerHTML)


// const imageHtml = createImg(productsArray);
// productContainer.appendChild(productsHTML);

// for (let index = 0; index < productsArray.length; index++) {
    
//     const product = document.createElement("div")
//     product.classList.add("product")
//     productContainer.appendChild(product)
    
//     const productImg = document.createElement("img")
//     productImg.classList.add("productImg")
//     productImg.src = productsList[index].image 
//     product.appendChild(productImg)

//     const productTitle = document.createElement("h2")
//     product.appendChild(productTitle)
//     productTitle.classList.add("product-title")
//     productTitle.innerHTML = productsList[index].name;

//     const price = document.createElement("span")    
//     price.classList.add("price")
//     price.innerHTML = "price:" + " " + productsList[index].price
//     product.appendChild(price)

//     const productTotalPrice = document.createElement("div")
//     product.appendChild(productTotalPrice)
//     productTotalPrice.classList.add("productTotalPrice")

//     const productPrice = document.createElement("div")
//     productPrice.classList.add("productPrice")
//     productPrice.innerHTML = productsList[index].price +"$";
//     productTotalPrice.appendChild(productPrice)

//     const productAmount = document.createElement("input")
//     productAmount.setAttribute("type", "number");
//     productAmount.classList.add("productAmount")
//     productTotalPrice.appendChild(productAmount)
    
    
    
//     const addBtn = document.createElement("button")
//     addBtn.classList.add("addBtn")
//     addBtn.innerHTML = "add product"
//     product.appendChild(addBtn)      
// }