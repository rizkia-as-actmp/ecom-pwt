function getAllProducts(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://fakestoreapi.com/products', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        callback(response);
      }
    };
    xhr.send();
}

function getAllProductsByCategories(callback, category) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `https://fakestoreapi.com/products/category/${category}`, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        callback(response);
        console.log(response)
      }
    };
    xhr.send();
}
  
getAllProducts(async products => {
    let firstProductSlider = document.getElementsByClassName("first-product-slider")[0]
    let thirdProductSlider = document.getElementsByClassName("third-product-slider")[0]
    let bundleProduct = document.getElementsByClassName("bundle")[0]
    firstProductSlider.innerHTML = ""
    thirdProductSlider.innerHTML = ""
    bundleProduct.innerHTML = ""

    await products.map(product => {
        const productCardElement = document.createElement("product-card");
        productCardElement.ProductInformation = product;
        firstProductSlider.appendChild(productCardElement)

        const productCardElement2 = document.createElement("product-card");
        productCardElement2.ProductInformation = product;
        thirdProductSlider.appendChild(productCardElement2)

        const productCardElement3 = document.createElement("product-card");
        productCardElement3.ProductInformation = product;
        bundleProduct.appendChild(productCardElement3)
    })  
});

getAllProductsByCategories(async products => {
  let secondProductSlider = document.getElementsByClassName("second-product-slider")[0]
  secondProductSlider.innerHTML = ""

  await products.map(product => {
      const productCardElement = document.createElement("product-card");
      productCardElement.ProductInformation = product;
      secondProductSlider.appendChild(productCardElement)
  })  
}, "men's clothing");


getAllProductsByCategories(async products => {
    let forthProductSlider = document.getElementsByClassName("forth-product-slider")[0]
    forthProductSlider.innerHTML = ""

    await products.map(product => {
        const productCardElement = document.createElement("product-card");
        productCardElement.ProductInformation = product;
        forthProductSlider.appendChild(productCardElement)
    })  
}, "women's clothing");