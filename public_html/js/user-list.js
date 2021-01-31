let UserListTemplate = document.createElement('template');
UserListTemplate.innerHTML = `  
       
            <style>
            div {
                display:flex;
                justify-content: flex-start;
                gap:2rem;         
                flex-wrap: wrap
            }

            
            </style>
            <div><slot /></div>
`;


class UserList extends HTMLElement {
    constructor() {
        super();

        let shadowRoot = this.attachShadow({
            mode: 'open'
        }).appendChild(UserListTemplate.content.cloneNode(true));

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
        //console.log(elem.firstChild.href);
        //evt.preventDefault();
    }

    connectedCallback() {
        // this.createUserItems();
        this.buildUserList('http://localhost:8888/users');

    }

    updateElement() {

    }

    createUserItem(data) {
        data.map(user => {
            let userItem = new UserItem;
            Object.keys(user).map(userprop => {
                let p = document.createElement("p");
                p.setAttribute("slot", userprop);
                p.innerHTML = user[userprop];
                userItem.appendChild(p);
            })
            console.log(userItem);
            this.appendChild(userItem);
        });
    }


    buildUserList(url) {
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                this.createUserItem(data);
                // let userItems =
                //     document.querySelector('user-list').innerHTML = "koekoek";
                //
                // return data;
            }.bind(this))
            .catch(function (error) {
                console.log('Request failed', error)
            });
    }

}

customElements.define('user-list', UserList);
customElements.whenDefined('user-list').then(() => {
    console.log("user-list defined")
});

