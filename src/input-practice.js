

const inputTempalte =  document.createElement("template");

inputTempalte.innerHTML = /* html */`

<style>
    label {
        display:block;
        margin-bottom:20px;
    }
    input {
        width:300px;
        border : 1px solid #d7d7d7;
        padding:10px
    }
</style>

<label></label>
<input>
`;



class Input extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    get value () {
        return this.getAttribute('value');
    }

    set  value(value){
        this.setAttribute("value", value);
    }

    connectedCallback() {
        this.shadowRoot.appendChild(inputTempalte.content.cloneNode(true));
        const lable = this.shadowRoot.querySelector("label");
        lable.textContent = this.getAttribute("label");
        const input =  this.shadowRoot.querySelector("input");
        input.addEventListener("input",(eve) => {
            // this.value = eve.target.value;
            eve.stopPropagation()
            input.dispatchEvent(new CustomEvent("input-element",{bubbles: true,composed: true,detail:eve.target.value}));
        })
    }

}

customElements.define("app-custom-input", Input);


