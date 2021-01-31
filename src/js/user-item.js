let UserItemTemplate = document.createElement('template');
UserItemTemplate.innerHTML = `  
  <style>
  div {
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
  p.attr {
    color:#fff;
    font-weight: 300;
  }
  p#naw {
    color:var(--c3);
    font-weight: 500;
  }

 
</style>
       
            <div>
                <p id="first_name" class="attr"><slot name="first_name">first_name</slot></p>
                <p id="last_name" class="attr"><slot name="last_name">last_name</slot></p>
                <p id="username" class="attr"><slot name="username">username</slot></p>
                <p id="email" class="attr"><slot name="email">email</slot>
            </div>
`;

class UserItem extends HTMLElement {
    constructor() {
        super();

        const is_connected = false;

        let shadowRoot = this.attachShadow({
            mode: 'open'
        }).appendChild(UserItemTemplate.content.cloneNode(true));

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

    setAllProps(data) {
      Object.keys(data).map(userprop => {
            let p = document.createElement("p");
            p.setAttribute("slot", userprop);
            p.innerHTML = data[userprop];
            this.appendChild(p);
        })
    }

    addLink(evt, elem) {
        console.log(elem.querySelector("[slot='id']").innerHTML);
        //evt.preventDefault();
    }

    connectedCallback() {
        console.log("in connected callback van user-item: " + this.isConnected);
        let emailLink = this.shadowRoot.getElementById("email");
        emailLink.addEventListener('click', (e) => this.addLink(e, this));
    }
}

customElements.define('user-item', UserItem);
customElements.whenDefined('user-item').then(() => {
    console.log("user-item defined")
})