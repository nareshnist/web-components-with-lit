

const buttonTempalte = document.createElement("template");
buttonTempalte.innerHTML = /* html*/ `

<style>

button {
    background:blue;
    padding:0.5rem;
    color:#fff;
    border:none;
    width:180px;
    display:block;
}

</style>

<button>
    <slot>Button default </slot>
</button>
`;


class Button extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.shadowRoot.appendChild(buttonTempalte.content.cloneNode(true));
        const button = this.shadowRoot.querySelector("button");
        button.addEventListener("click", eve => {
            button.dispatchEvent(new CustomEvent('button-clicked',{bubbles:true,composed:true}));
        })
    }   

}


customElements.define("app-custom-button", Button);