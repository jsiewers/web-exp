import {NavLink} from "./nav-link.js";
import {AdItem} from "./ad-item.js";
import {AdPanel} from "./ad-panel.js";
import {CardElement} from "./card-element.js";
import {UserItem} from "./user-item.js";
import {UserList} from "./user-list.js";

class App {
    constructor() {
       // this.components = [];
        const components = [
            {
                tagName: 'nav-link',
                component: NavLink
            },
            {
                tagName: 'ad-item',
                component: AdItem
            },
            {
                tagName: 'ad-panel',
                component: AdPanel
            },
            {
                tagName: 'card-element',
                component: CardElement
            },
            {
                tagName: 'user-item',
                component: UserItem
            },
            {
                tagName: 'user-list',
                component: UserList
            },
        ]
        this.register(components);
    }

    register(components) {
        components.forEach( component => {
            window.customElements.define(component.tagName, component.component);
            window.customElements.whenDefined(component.tagName).then(() =>{
                    console.log(component.tagName + " is defined");
            });
        });
    }
}


document.addEventListener("DOMContentLoaded", new App());
