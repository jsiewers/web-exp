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
  p.first_name {
    font-weight: 700;
  }
  
  p {
    color:#fff;
    color:var(--c3);
    font-weight: 500;
  }
  
  button {
    color:#fff;
    border: none;
    outline:none;
    border-radius:8px;
    padding:10px;
    background-color: var(--c4);
   }

   button.buttonup {
     background-color: var(--c4);
    }
    button.buttondown {
      background-color: #fff;
    }

 
</style>
       
            <div>
                <p class="first_name"><slot name="first_name">first_name</slot></p>
                <p class="last_name"><slot name="last_name">last_name</slot></p>
                <p class="username"><slot name="username">username</slot></p>
                <button class="buttonup"><slot name="email">email</slot></button>
            </div>
`;

export class UserItem extends HTMLElement {
    constructor() {
        super();

        let shadowRoot = this.attachShadow({
            mode: 'open'
        }).appendChild(UserItemTemplate.content.cloneNode(true));
    }

    attributeChangedCallback() {
        console.log("attribute changed");
    }

    addHomeElements() {
        console.log("adding home elements");
    }

    // setProps(data) {
    //   Object.keys(data).map(userprop => {
    //         let p = document.createElement("p");
    //         p.setAttribute("slot", userprop);
    //         p.innerHTML = data[userprop];
    //         this.appendChild(p);
    //     })
    // }

    buttonToggle(el, button) {
        console.log(el.id);
        if(button.className === "buttonup") {
            button.className="buttondown";
            console.log(el.dataset.email);
        } else {
            button.className="buttonup";
        }
        // document.getElementById(elem.id).first_name.backgroundColor = "#ccc";
        //evt.preventDefault();
    }


    connectedCallback() {
        let button = this.shadowRoot.querySelector('button');
        button.addEventListener('mouseup', (e) => this.buttonToggle(this, button));
        button.addEventListener('mousedown', (e) => this.buttonToggle(this, button));
    }

}