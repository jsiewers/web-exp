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


export class UserList extends HTMLElement {
    constructor() {
        super();
        let shadowRoot = this.attachShadow({
            mode: 'open'
        }).appendChild(UserListTemplate.content.cloneNode(true));
        this.userItems = [];
    }

    attributeChangedCallback() {
        console.log("attribute changed");
    }

    connectedCallback() {
        this.buildUserList('http://localhost:8888/users');
    }

    updateElement() {

    }

    buildUserList(url) {
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                this.userItems =  data;
                this.innerHTML = this.render();
            }.bind(this))
            .catch(function (error) {
                console.log('Request failed', error)
            });
    }

    render() {
        console.log('rendering....');
        return `
        ${this.userItems.map(user => `
            <user-item id="${user.id}">
                <span slot="first_name">${user.first_name}</span>
                <span slot="last_name">${user.last_name}</span>
                <span slot="username">${user.username}</span>
                <span slot="email">${user.email}</span>
            </user-item>     
        `
        ).join(' ')}  
        `

    }

}
