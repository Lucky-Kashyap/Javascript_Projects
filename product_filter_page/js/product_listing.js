

// js logic

// let checkCat = [];
let productDiv = document.querySelector('.product');

let categoryList = document.querySelector('.categoryList');
let allCategory = [];


let displayProduct = async(allcheck=[])=>{
    productDiv.innerHTML='';
    // categoryList.innerHTML='';
    let product = await fetch('https://fakestoreapi.com/products');
    let finalProduct = await product.json();
    // console.log(finalProduct);

    finalProduct.forEach(element =>{
        // console.log(element);

        if(!allCategory.includes(element.category)){
            
        categoryList.innerHTML +=`
        <label for="">
                    <input type="checkbox" onClick="categoryFilter()" value="${element.category}">  ${element.category}
                </label>`

                allCategory.push(element.category);
            }

            if(allcheck.length == 0){
                allcheck = allCategory;

                
            }

            if(allcheck.includes(element.category)){
        productDiv.innerHTML +=`  <div class="productItems">
        
        <img src='${element.image}' alt="">
        <h4>${element.category}</h4>
        <p>Price rs '${element.price} | Rating ${element.rating.rate}'</p>
        <h3>'${element.title}'</h3>
    </div>`
            }
    })
}

displayProduct();

let categoryFilter = ()=>{
    let checkInput = document.querySelectorAll("input[type='checkbox']");
    // console.log(checkInput);

    let checkData = [];

    checkInput.forEach((e)=>{
        if(e.checked){
            checkData.push(e.value);
        }
    })
    displayProduct(checkData);
}