import productCardCSS from './product-card.css' assert { type: 'css' };
import globalCSS from './../../style/reset.css' assert { type: 'css' };

class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    set ProductInformation(product) {
        this._product = product;
        this.render();
    }
    
    render() {
        // const Images = ["d814536d-67b9-4c49-a620-2cbec5c8e203.jpg", "a3ca6c5d-a762-42b8-92c3-e9eba1537096.jpg", "24a94cdb-9220-49d5-8247-3c990d2a2f5f.png"]
        this.shadowDOM.adoptedStyleSheets = [productCardCSS,globalCSS]

        // const image = Images[Math.floor(Math.random() * 3)]

        const trimmedTitle = this._product.title.slice(0, 40)


        this.shadowDOM.innerHTML = `
            <a href="detail?id=${this._product.id}">
                <figure>
                    <img src="${this._product.image}" alt="">
                </figure>
                <section>
                    <p>${trimmedTitle}</p>
                    <p class="price">$ ${this._product.price}</p>
                    <p class="special-price-label">Cashback 10%</p>
                    <p class="shop-location">Kab. Bandung</p>
                    <div>
                        <div class="star">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="17 -34 6 5">
                                <path d="M 17 -32 L 23 -32 L 18 -29 L 20 -34 L 22 -29 Z"/>
                            </svg>
                        </div>
                        <p><span>${this._product.rating.rate}</span> | <span>${this._product.rating.count}+ terjual</span></p>
                    </div>
                </section>
            </a>
        `;
    }
}
    
customElements.define('product-card', ProductCard);