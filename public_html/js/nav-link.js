let NavLinkTemplate = document.createElement('template');
NavLinkTemplate.innerHTML = `  
       
            <span id="link"><slot name="title">blaberdie</slot></span>
`;

class NavLink extends HTMLElement {
    constructor() {
        super();

        let shadowRoot = this.attachShadow({
            mode: 'open'
        }).appendChild(NavLinkTemplate.content.cloneNode(true));

    }


    doeIets(t) {
        console.log(t);
    }

    attributeChangedCallback() {
        console.log("attribute changed");
    }

    addHomeElements() {
        console.log("adding home elements");
    }

    addLink(evt, elem) {
        console.log(elem.firstChild.href);
        //evt.preventDefault();
    }

    connectedCallback(elem) {
        let x = this;
        console.log("connected callback in nav-link aangeroepen");
        let link = this.shadowRoot.getElementById("link");
        link.addEventListener('click', (e) => this.addLink(e, this));
    }


}

customElements.define('nav-link', NavLink);
customElements.whenDefined('nav-link').then(() => {
    console.log("nav-link defined")
})