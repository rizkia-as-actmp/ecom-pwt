import customFooterCSS from './custom-footer.css' assert { type: 'css' };
import globalCSS from './../../style/reset.css' assert { type: 'css' };

class CustomFooter extends HTMLElement {
    constructor() {
        super()
        this.shadowDOM = this.attachShadow({mode: 'open'})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        console.log(customFooterCSS)
        this.shadowDOM.adoptedStyleSheets = [customFooterCSS, globalCSS]
        this.shadowDOM.innerHTML = `
            <footer>
                <div>
                    <section>
                        <h4>KimbabStore</h4>
                        <a href="/none">Tentang KimbabStore</a>
                        <a href="/none">Hak kekayaan Intelektual</a>
                        <a href="/none">Karir</a>
                        <a href="/none">Blog</a>
                        <a href="/none">Bridestory</a>
                        <a href="/none">KimbabStore Parents</a>
                        <a href="/none">Mitra Blog</a>
                        <a href="/none">Tokopedia Affiliate Program</a>
                        <a href="/none">KimbabStore B2B Digital</a>
                    </section>
                    <section>
                        <h4>Beli</h4>
                        <a href="/none">Tentang KimbabStore</a>
                        <a href="/none">Hak kekayaan Intelektual</a>
                        <a href="/none">Karir</a>
                    </section>
                </div>
                <div>
                    <section>
                        <h4>Jual</h4>
                        <a href="/none">Tentang KimbabStore</a>
                        <a href="/none">Hak kekayaan Intelektual</a>
                        <a href="/none">Karir</a>
                    </section>
                    <section>
                        <h4>Bantuan dan Panduan</h4>
                        <a href="/none">Tentang KimbabStore</a>
                        <a href="/none">Hak kekayaan Intelektual</a>
                        <a href="/none">Karir</a>
                        <a href="/none">Blog</a>
                    </section>
                    <section>
                        <h4>Keamanan & Privasi</h4>
                    </section>
                </div>
                <div>
                    <section>
                        <h4>Ikuti Kami</h4>
                        <div class="icons">
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -5 5 7">
                                    <path d="M 0 1 L 1 1 L 1 -1 L 2 -1 L 2 -2 L 1 -2 L 1 -3 L 2 -3 L 2 -4 L 1 -4 C 1 -4 0 -4 0 -3 L 0 -2 L -1 -2 L -1 -1 L 0 -1" fill="white"/>
                                </svg>
                            </a>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="6.3 -15.7 11 11">
                                    <path d="M 7 -14 L 15 -6 L 17 -6 L 9 -14 Z M 7 -7 L 16 -14 L 7 -7 L 8 -7 L 17 -14 L 16 -14 Z" stroke="white" stroke-width=".7" fill="none"/>
                                </svg>
                            </a>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="14.3 -25.1733 11.81 12.87">
                                    <path d="M 15 -15 L 15 -13 L 17 -14 L 19 -17 C 21 -16 22 -16 24 -18 C 25 -19 26 -21 25 -23 C 24 -25 16 -26 17 -19 L 18 -20 C 18 -22 21 -24 23 -23 C 25 -22 23 -17 20 -18 C 21 -19 22 -19 22 -21 C 22 -22 21 -22 20 -21 C 18 -19 20 -20 18 -18 Z" fill="white"/>
                                </svg>
                            </a>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="15 -33 18 18">
                                    <path d="M 16 -29 L 16 -19 C 16 -17 17 -16 19 -16 L 19 -16 L 29 -16 C 31 -16 32 -17 32 -19 L 32 -29 C 32 -31 31 -32 29 -32 L 19 -32 C 17 -32 16 -31 16 -29 Z M 24 -28 C 22 -28 20 -26 20 -24 C 20 -22 22 -20 24 -20 C 26 -20 28 -22 28 -24 C 28 -26 26 -28 24 -28 M 28 -30 C 28 -30 27 -30 27 -29 C 27 -29 27 -28 28 -28 C 28 -28 29 -28 29 -29 C 29 -29 29 -30 28 -30" stroke="white" stroke-width="1.2" fill="none"/>
                                </svg>
                            </a>
                        </div>
                    </section>
                    <a href="">
                        <img src="./static/assets/images/footer.png" alt="">
                    </a>
                </div>
            </footer>
        `
    }
}

customElements.define('custom-footer', CustomFooter)