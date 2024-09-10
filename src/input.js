
const inputTemaplte =  document.createElement("template");
inputTemaplte.innerHTML = /* html */`

<style>
label {
    display : block;
}

input {
    border: 1px solid lightgray;
    padding:10px;
    min-width:200px;
    border-radius:3px;
}
</style>

<label></label>
<input />
`;
class Input extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    set value(value){
        this.setAttribute("value", value);
    }

    get value(){
      return this.getAttribute("value");
    }



    connectedCallback() {
        this.shadowRoot.appendChild(inputTemaplte.content.cloneNode(true));
        const lable   = this.shadowRoot.querySelector("label");
        lable.textContent = this.getAttribute('lable');

        const input = this.shadowRoot.querySelector("input");
        input.addEventListener("input", (e) => {
            // this.value = e.target.value; this approach would not work below comments

            e.stopPropagation();
            input.dispatchEvent(new CustomEvent("app-input",{
                bubbles: true,
                composed: true,
                detail : e.target.value
            }));
        })
    }


    
    //We are wrapping  it with a shadow dome because of the shadow of the events triggered in this element like
    //this input elements are retargeted, which means it is replacing the actual target from actual target to the component itself.

    //So this is, again, for the encapsulation.
    // So this is called this event retargeting

    // to get the value we have coulpe of option
    // like adding class properties like get/set for app-input
    // nesting this again would break like  value come undefined
}

customElements.define('app-input',Input);



// README.md

/**
 * Normal input html
 *  input tag by defalut it dispatch the event called `input` so we cand listen it and get the value 
 * 
 * exaple document.addEventListner('input' event => {
 *  console.log(event);
 * });
 * 
 * 
 * custom input html
 * 
 * since the elemet is wrapped with shadowdom the event fired with input would re target to the <app-input>
 * so when we try to log the even.target we get the app-input for custom element, and for the native input.
 * similary when we try to access the event.target.value the native element has value property so we can get the value 
 * custom element since the event was re targetted to the app-input and it doesn't have the value property we would get an `undefined`
 * 
 * input re-targetting to the app-input because of the encapsulation/shadow dom
 * 
 * 
 * adding the value attribute  to the custom input element
 * 
 * getter / setter 
 * 
 * 
 * but above soultion would not work if wab component importing another web component.
 * 
 *  the better solution is the emitting the event.
 */
