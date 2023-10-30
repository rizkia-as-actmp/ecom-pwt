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

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const querySearch = urlParams.get('query')
const searchBar = document.getElementById("search-bar")
searchBar.value = querySearch

const bundle = document.getElementsByClassName("bundle")[0]
const searchResultInformation = document.getElementById("search-result-information")
bundle.innerHTML = ""

getAllProducts( products => {
    console.log(products)
    const filteredProducts = (products.filter(product => product.title.toLowerCase().includes(querySearch.toLowerCase()) ))

    searchResultInformation.innerHTML = `Menampilkan ${filteredProducts.length} barang dari total ${products.length} untuk "${querySearch}"`

    filteredProducts.map(product => {
        const productCardElement = document.createElement("product-card");
        productCardElement.ProductInformation = product;
        bundle.appendChild(productCardElement)
    })  

})