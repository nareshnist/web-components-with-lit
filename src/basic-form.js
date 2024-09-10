

import './input.js';
import './button.js';


class BasicForm extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
    this.shadowRoot.innerHTML = /* html */ `
        <app-input lable="UserName"></app-input>
        <app-button>Rigister</app-button>
    `
    const button =  this.shadowRoot.querySelector("app-button");
    button.onclick = (eve) => {
        console.log("clicked"); // adding like not a good solution better go and add to the button component
        // beacuse since the button is part the parent component clicking on the button if the parent has the event both would trigger
        // so its not an ideal solution.
    }
   
    }
}


customElements.define("app-form", BasicForm);