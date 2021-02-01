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

    userListState(data) {
        console.log(data);
    }

    createUserItem(data) {
        data.map(user => {
            let userItem = new UserItem;
            userItem.setAllProps(user);
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

