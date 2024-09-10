import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'



@customElement('learn-lit')
export class MyElement extends LitElement {

  @property({type:String,attribute:'product-title'}) productTitle = '';
  @property({type:String,attribute:'product-price'}) productPrice = '';
  @property({type:String,attribute:'product-description'}) productDescription = "";

  connectedCallback(): void {
      super.connectedCallback(); 
  }

  static styles = css`
  :host{
      width: 300px;
      background-color: #D6433C;
      border-radius: 8px;
      color: white;
      padding: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }
  header {
    text-align: center;
  }

  header h1 {
      font-size: 24px;
      margin: 0;
  }

  header h2 {
      font-size: 18px;
      margin: 10px 0;
  }

  main {
      background-color: white;
      border-radius: 4px;
      padding: 8px;
      color: black;
      text-align: center;
      font-size: 18px;
  }`


  protected render() {
      return html`
      <header>
        <h1>productName : ${this.productTitle}</h1>
        <h2>productPrice : ${this.productPrice}</h2>
      </header>
      <main>
          <!-- Name will go here -->
         <p>productDescription : ${this.productDescription}</p>
      </main>
      `
  }


  // firstUpdated() {
  //   const link = document.createElement('link');
  //   link.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';
  //   link.rel = 'stylesheet';
  //   this.renderRoot.appendChild(link);
  // }
  
}
declare global {
  interface HTMLElementTagNameMap {
    'learn-lit': MyElement
  }
}
