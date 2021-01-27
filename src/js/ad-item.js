let AdItemTemplate = document.createElement('template');
AdItemTemplate.innerHTML = `  
  <style>
  #item {
    max-width: 300px;
    padding:1rem;
    border-radius:16px;
    background-color: var(--c1);
    box-shadow: 3px 3px 5px 1px #cccbca;
    flex-grow:1;
  }
  p#title {
    font-weight: 700;
  }
  p#description {
    color:#fff;
    font-weight: 300;
  }
  p#naw {
    color:var(--c3);
    font-weight: 500;
  }
 
</style>
       
            <div id="item">
                <p id="title"><slot name="title">item-test</slot></p>
                <p id="description"><slot name="description">item-test</slot>
                <p id="naw"><slot name="naw">item-test</slot>
            </div>
`;

class AdItem extends HTMLElement {
    constructor() {
        super();

        let shadowRoot = this.attachShadow({
            mode: 'open'
        }).appendChild(AdItemTemplate.content.cloneNode(true));

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

customElements.define('ad-item', AdItem);
customElements.whenDefined('ad-item').then(() => {
    console.log("ad-item defined")
})