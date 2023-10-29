import popkeywordCardCSS from './popkeyword-card.css' assert { type: 'css' };
import globalCSS from './../../style/reset.css' assert { type: 'css' };

class PopkeywordCard extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
    
    connectedCallback() {
        this.render();
    }
    
    render() {
        const Images = ["d814536d-67b9-4c49-a620-2cbec5c8e203.jpg", "a3ca6c5d-a762-42b8-92c3-e9eba1537096.jpg", "24a94cdb-9220-49d5-8247-3c990d2a2f5f.png"]

        const image = Images[Math.floor(Math.random() * 3)]
        this.shadowDOM.adoptedStyleSheets = [popkeywordCardCSS,globalCSS]

        this.shadowDOM.innerHTML = `
            <figure>
            <img src="./static/assets/images/a41a7f1d-8052-412e-95b4-75da916ef8f3.jpg" alt="">
            </figure>
            <section>
                <p>Iphone box</p>
                <p>148rb produk</p>
            </section>
        `;  
    }
}
    
customElements.define('popkeyword-card', PopkeywordCard);
