

import "./input-practice.js";
import './button-practice.js'


class BasicForm extends  HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {

        this.shadowRoot.innerHTML =/* html */ `
            <app-custom-input label="user name"></app-custom-input>
            <app-custom-button>Login</app-custom-button>
        `;

        // const  button = this.shadowRoot.querySelector("app-custom-button");
        // button.addEventListener("click",eve =>{
        //     console.log("button clicked");
        // })

    }
}

customElements.define("app-custom-form", BasicForm);