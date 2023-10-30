const detailInformation = document.getElementsByClassName("product-information")[0]
const productImage = document.getElementsByClassName("product-image")[0]

function getDetailProducts(callback, productId) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `https://fakestoreapi.com/products/${productId}`, true);
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
const productId = urlParams.get('id') 

window.addEventListener("load", () => {
    
    // console.log(productId)

    productImage.innerHTML = ""
    detailInformation.innerHTML = ""

    getDetailProducts(product => {
        productImage.innerHTML   = `
        <img src="${product.image}" />
        `

        detailInformation.innerHTML = `
            <div class="top">
                <h4 class="product-name">${product.title}</h4>
                <div>
                    <div>
                        <h4 class="price-tag">$ ${product.price}</h4>
                        <p class="special-price-label">Cashback 10%</p>
                    </div>
                    <span class="material-symbols-outlined">favorite</span>
                </div>
            </div>
            
            <div class="product-stats">
                <p>Terjual <span>${product.rating.count}</span></p>
                <div class="rating">
                    <div class="star">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="17 -34 6 5">
                            <path d="M 17 -32 L 23 -32 L 18 -29 L 20 -34 L 22 -29 Z"/>
                        </svg>
                    </div>
                    <p>${product.rating.rate}</p>
                </div>
            </div>

            <div>
                <p>Kategori : ${product.category}</p>
                <p class="shop-location" >
                    <span class="material-symbols-outlined">location_on</span>
                    Kab. Bandung
                </p>
            </div>
            
            <hr>

            <article>
                <h4>Deskripsi Produk</h4>
                <p>${product.description}</p>
            </article>
        `
    }, productId)

   
});