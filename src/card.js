
const cardTemaplte = document.createElement("template");
cardTemaplte.innerHTML = /* html */`

<!-- 
 <style>

  div {
    border:1px solid black;
  }

  .card {
    margin:30px;
  }
 </style> -->

 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">

 <style>
    ::slotted(h1){
        color:black !important;!!
    }    
</style> 
<div class="card">

<div class="card-header">
    card header will be here.
    <slot name="card-header"> Card Header</slot>
</div>

<div class="card-body">
    <slot name="card-body"> Card body defalut content</slot>
</div>

<div>
    other's will be added here
    <slot >defaut slot</slot>
</div>
</div>
`;

class Card extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.shadowRoot.appendChild(cardTemaplte.content.cloneNode(true));
    }
}


setTimeout(() => {
    customElements.define("app-card", Card);
}, 3000);

