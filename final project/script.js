console.log(products)
 let filteredProducts = [...products]
 console.log(filteredProducts)


 //:selectors
 const productsContainer=document.querySelector(".not-sidebar")
 const searchForm= document.querySelector(".input-form")
 const searchInput=document.querySelector(".search.input")

 searchForm.addEventListener("keyup", ()=> {
    console.log("typing!")
    let seachTerm=searchInput.ariaValueMax.toLowerCase();
    console.log(searchTerm)
    filteredProducts=products.filter(product=> {
        return product.title.includes(searchTerm)
    })
    displayProducts()
 })

 

// Loop and display each product
function displayProducts() {
    console.log(filteredProducts)
    // A map allows you to access objects easier
    // .map returns an array which can be put into the DOM
    // .forEach doesn't return ANYTHING, so it all gets discarded.
    productsContainer.innerHTML = filteredProducts.map(product => {
        // Return the HTML for each product
        return `<article class="product">
                    <img src="${product.image}" alt="" />
                    <footer>
                        <p class="product-name">${product.title}</p>
                        <p class="product-price">${product.price}</p>
                    </footer>
                </article>`
    }).join("")
}
// run the function
displayProducts()