
const buttonTemplate = document.createElement("template");

// Comment tagged templates extension.

buttonTemplate.innerHTML = /* html */ `
<style>
    .btn {
        background-color: #0070f3;
        color: #fff;
        border: none;
        border-radius: 7px;
        padding: 12px 12px;
        box-shadow: 0 4px 4px 0 rgba(0,118, 255,0.40);
    }

    .btn:hover {
        background-color: #1d80f0;
    }
    .btn:disabled {
        background-color: #6aa8f0;
    }

    .fading {
        animation: fading 0.5s infinite;
    }

    @keyframes fading {
        0% {
            color: #6aa8f0;
        }
        50% {
            color: #fff;
        }
        100% {
            color: #6aa8f0;
        }
        
    }
    app-button,
    app-counter{
        display: block;
        margin: 20px;
    }
</style>
  <button class="btn" part="custome-btn"><slot>Button Text</slot></button>
`;


class Button extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode:"open"})
        // So the shadow dome is providing encapsulation for our element, but we can still update our items in
    }

    set inprogress(value) {
        if (value) {
            this.setAttribute('inprogress', 'true')
        } else this.removeAttribute('inprogress')
    }

    get inprogress() {
        return this.getAttribute('inprogress');
    }

    connectedCallback() {
        this.shadowRoot.appendChild(buttonTemplate.content.cloneNode(true));
        this.button = this.shadowRoot.querySelector('button');

         //this.button.textContent = this.getAttribute('text');
         // event section
        // this.button.addEventListener("click", e => {
        //     e.stopPropagation();
        //     this.button.dispatchEvent(new CustomEvent("app-button-clicked",{
        //         bubbles: true,
        //         composed: true,
        //     }));
        // })
        this.intialVlaue = this.innerHTML
    }

    static get observedAttributes() {
        return ["inprogress", "xyz"];
    }

    attributeChangedCallback(attribute, oldvalue, newvalue) {
        if (newvalue) {
            this.innerHTML = 'Loading...';
            this.button.setAttribute('disabled', 'true');
            this.button.classList.add('fading')
        } else {
            this.innerHTML = this.intialVlaue;
            this.button.removeAttribute('disabled');
            this.button.classList.remove('fading');
        }
    }
}
customElements.define('app-button', Button);




/**
 * 
 * README
 * 
 * <app-button onclick="test()"></app-button>
 * 
 * <script>
 *      const test = () => {
 *          console.log("test");
 *      }
 * </script>
 * 
 * 
 * what if the app-button is inside another web component how do we know the buttion is clicked 
 * solution the emitting the event
 */