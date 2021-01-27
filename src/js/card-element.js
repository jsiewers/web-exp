let CardElementTemplate = document.createElement('template');
CardElementTemplate.innerHTML = `  
         <style>
            .card {
                /*border:1px solid black;*/
                border-radius:16px;
                padding:1rem;
                box-shadow: 3px 3px 5px 1px #cccbca;
            }
            div {
                float:right;
                color:blue;
            }
            
            .description {
                font-weight:500;
            }
            a {
                color:var(--c3);
                text-decoration: none;
                font-weight:500;
            }
        </style>
        
        <p class="description"><slot name="description">De description</slot></p>
        <p><slot name="body">Donec ut mattis diam, vel mollis erat. Cras elit metus, laoreet at ultricies ac, finibus
            suscipit
            ante.</slot></p>
         <div id="link"><a href="#">Lees meer...</a></div>
       `;

class CardElement extends HTMLElement {
    constructor() {
        super();

        let shadowRoot = this.attachShadow({
            mode: 'open'
        }).appendChild(CardElementTemplate.content.cloneNode(true));
    }


    doeIets(t) {
        console.log(t);
    }

    attributeChangedCallback() {
        console.log("attribute changed");
    }

    addLink(evt, elem) {
        var url = "#" + elem.dataset.href;
        console.log(url);
        window.location.assign(url);
        evt.preventDefault();

    }

    connectedCallback() {
        console.log("connected callback in card-element aangeroepen");
        let link = this.shadowRoot.getElementById("link");
        link.addEventListener('click', (e) => this.addLink(e, this));
    }
}

customElements.define('card-element', CardElement);
customElements.whenDefined('card-element').then(() => {
    console.log("card-element defined")
})