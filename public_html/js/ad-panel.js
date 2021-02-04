let AdPanelTemplate = document.createElement('template');
AdPanelTemplate.innerHTML = `  
       
            <style>
            #container {
                display:flex;
                justify-content: flex-start;
                gap:2rem;         
                flex-wrap: wrap
            }

            
            </style>
            <div id="container"><slot name="item">blaberdie</slot></div>
`;

export class AdPanel extends HTMLElement {
    constructor() {
        super();

        let shadowRoot = this.attachShadow({
            mode: 'open'
        }).appendChild(AdPanelTemplate.content.cloneNode(true));

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
        evt.preventDefault();
    }

    connectedCallback(elem) {

    }


}