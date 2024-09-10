

import './button.js';
import './counter.js';



// using one custom element in another

class StopWatch extends HTMLElement {

    constructor(){
        super();
    }

    connectedCallback() {
        this.innerHTML = /* html */ `
            <app-counter></app-counter>
            <app-button text="Start"></app-button>
            <app-button text="Stop"></app-button>
        `
    }
}


customElements.define("app-stopwatch",StopWatch);