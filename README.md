


### Web components 
`A web component is a set of web platform APIs that allow you to create reusable custom elements for web pages and web applications. Let me break this down for you : `

1. `Custom Elements:` Allows you to define new HTML tags, modifying existing HTML elements, or extending the components other developers have created.
2. `Shadow DOM:` Provides encapsulation for the JavaScript, CSS, and templating in your web component. It keeps the implementation details hidden and   separate  from the rest of the page.
3. `HTML Templates:` Enables you to define fragments of markup that are parsed as HTML and can be reused multiple times.

`Y showdw dom `  :
        1 lets say  in web component we have style like btn class some  styles 
        2 add bootstrap to your page &  add button element in page 
        3 the web componengt styles are overriding the bootstrap styles 
            ### css 

            ex styles conflitcting since classes are same.
            ex It is leaking out from it and it is overriding the behavior on the other parts of the page.
            so by using shadow dom we can overcome this problem as it provide the encapsulation 
            So with this way, we are isolating our component from external styles.

            ### html
                we can't directly access the html elements , but we can access thru shadowroot property 
                beacuse the shadow dom hide the web component structure from main document.

            ### shadow mode open/close
            ### open able to access shadow root
            ### closed not able to access shadw root (its not available)
                ## _root = attachShaow({mode:"closed"}) thru it we can access it 

`Slot ` : So the slots are basically placeholders inside our component and we can fill them with our own markup.
    named slots 
    default slots  ---> fall back content


`Ways to apply the styles to web component & their dra back`.

    ## flash of unstyled content.
    1. seperate css  file (external style sheet).
         there is a problem with this implementation. It is called this flash of unstyled content.
         same thing applies for bootstrap loading with link tag 
         remove from index html add in card js file change network tag to slow 3g.

    ## Styling Undefined Element 
        slot contnet with delaying the component render the slot content is displaying withou style's this is again an flash of unstyled content to over come this we have two options 
        1. java script way
         const card = document.querySelector('app-card');
            card.style.display = 'none';
            customElements.whenDefined('app-card').then(() => {
                card.style.display = 'block';
            }) 
        2. css way  
        app-card:not(:defined){
            display: none;
        }

    ## styling host element / component it self.  ---> called the web component.

        :host {
            // in side js file  / inside the element.
            display:block;
        }

        :host([inprogress]){
            // if this has inprogress attribute.
        }
        this host only work when our componet has shadow root


        // out side of file we can overrid
        app-button {
            display:inline;
        }

        So this is allowing users to overriding our components, top level the styling from outside.

    ## Styling  element with host.

        the first thing is slot content is not part of the shadow dow which is called as lightDom.
        
        with shadow dom we are isolated the style not to apply styles from out side / external styles .
        but as sloted contnet as part of lightdm we can override the sloted stlye from out side 

        ex : from out side of js wirte some css to targeting the sloted content

        h1 {
            color :red ; which will apply it.
        }

        // not recommented but can be used  

        ::slotted(h1 or all *) {
            color :black !important:
        }

        #limitation 
            which will only work for the top lavel nodes.

             <h1 slot="card-header">Header</h1> work as black 
            <h3 slot="card-header">Sub Header</h3>
            <p slot="card-body">This is cart body</p>


            <div>
                  <h1 slot="card-header">Header</h1> would not work    apply the red 
            </div>

    ## styling with part 
        app-button::part(part-name){
            styles // we can do for any element in web cmponent.
        }

        So by adding this part, we are allowing external styles to be applied to this specific element in our component.

    ## styling with custom variables 
        we can declare and use it

    https://www.youtube.com/watch?v=eNepHRNqwBI&list=PLUioGv_6G9YK-St5GcrI8pm-OxPGDAt8r&index=3,
    https://www.youtube.com/watch?v=ge5BjUeM_wY&list=PL6Vr-1-zVu5DWLr2wDqCe0EAfFMLCK9DL&index=5

1) The `Browser Native Component Model` refers to a set of standards and technologies that allow developers to create reusable, modular, and encapsulated components directly in web browsers. These components are part of the web platform and can be built using the browser’s native APIs, without relying on external libraries or frameworks. The key technologies that enable the Browser Native Component Model include:

Web Components: A suite of web platform APIs that allow developers to create reusable custom elements, with isolated functionality and style. It consists of four main technologies:

`Custom Elements:` Define new HTML tags and their behavior.
`Shadow DOM:` Encapsulates the internal structure and styles of a component, preventing them from leaking into the main DOM.
`HTML Templates:` Predefined HTML structures that can be cloned and used in different parts of the document.
`ES Modules: `JavaScript modules that can be loaded natively by the browser, allowing modular code.

`Browser-native features: `These are built directly into browsers and work without needing external libraries or polyfills. This makes them `lightweight and performant.`

Advantages of the Browser Native Component Model:
`Standardization`: Components built using web standards work across all modern browsers.
`Encapsulation`: With the Shadow DOM, styles and behaviors are scoped locally to the component.
`Reusability`: Components can be reused in different contexts or applications.
`Interoperability`: Components can work alongside any framework or be used in plain HTML and JavaScript


    




