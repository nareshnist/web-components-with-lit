




class Counter extends HTMLElement {
    constructor(){
        super();
        console.log("constructor");
        this.counter = 0;

        // don't do anything related  to dom operations 
        // direcly add element & doing manupulations in constructor working fine but
        // when we programatically try to add which throws an exceptions 
        //so we should not manupulate dom related properties in constructor instead of use corresponding life cycle hook.
    }

    connectedCallback(){
        // called when element is added to dom
        // do all onload stup in this life cycle hook

        console.log("connectedCallback");
        this.innerHTML='Counter added';
        this.innerHTML = this.counter;
        const until  = +this.getAttribute('until');
        this.invervalId = setInterval(() => {
            console.log("set interval running ....")
            if(this.counter < until){
                this.counter += 1;
                this.innerHTML = this.counter
            }else {
                clearInterval(this.invervalId);
            }
        },1000)

    }

    disconnectedCallback(){
        // when the element is removed from the dom this function being executed.
        // clear up resources

        console.log("dis connected call back");
        clearInterval(this.invervalId)
    }

    attributeChangedCallback(){
        // called when attributes are changed, added, removed, or replaced which are specifed in static methode called observedAttributes
    }


    adoptedCallback(){
        // This callback is triggered when this element is moved into a new document.
        // not much use case
        console.log("adopted")
    }
}
customElements.define('app-counter',Counter);