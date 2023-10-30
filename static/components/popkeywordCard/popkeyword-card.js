
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
        this.shadowDOM.adoptedStyleSheets = [popkeywordCardCSS,globalCSS]

        this.shadowDOM.innerHTML = `
            <figure>
            <img src="./static/assets/images/d814536d-67b9-4c49-a620-2cbec5c8e203.jpg" alt="">
            </figure>
            <section>
                <p>Iphone box</p>
                <p>148rb produk</p>
            </section>
        `;  
    }
}
    
customElements.define('popkeyword-card', PopkeywordCard);
