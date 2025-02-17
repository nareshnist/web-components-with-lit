# Web Components

Web components are a set of web platform APIs that allow you to create reusable custom elements for web pages and web applications. 

## Table of Contents

- [Overview](#overview)
- [Shadow DOM](#shadow-dom)
- [Slot](#slot)
- [Ways to Apply Styles to Web Components](#ways-to-apply-styles-to-web-components)
- [Browser Native Component Model](#browser-native-component-model)
- [Advantages](#advantages)

---

## Overview

A web component is composed of the following technologies:

1. **Custom Elements:** Allows you to define new HTML tags, modify existing HTML elements, or extend components created by other developers.
2. **Shadow DOM:** Provides encapsulation for JavaScript, CSS, and templates in your web component, keeping implementation details hidden and separate from the rest of the page.
3. **HTML Templates:** Predefined HTML structures that can be reused multiple times in different parts of the document.

---

## Shadow DOM

The Shadow DOM helps isolate a web component's styles and behavior from the main document. Here's how it works:

1. **Example Scenario:**
   - You define a style for a button in your web component.
   - You add Bootstrap to your page and include a button element.
   - The styles of the web component may override the Bootstrap styles.

**How Shadow DOM Solves This:**
By using Shadow DOM, the component's internal styles are encapsulated, so they don't affect the page's external styles.

### HTML Access
You can't directly access the HTML elements inside the Shadow DOM. However, you can access them through the `shadowRoot` property since the structure is hidden from the main document.

### Shadow DOM Mode: Open vs. Closed
- **Open:** Allows access to the shadow root.
- **Closed:** Does not allow access to the shadow root (it’s not available).

You can create a shadow root with `attachShadow({mode: "closed"})` to access it.

---

## Slot

Slots are placeholders inside a component where you can inject your own markup.
- **Named Slots**
- **Default Slots:** These are fallback content when no slot content is provided.

---

## Ways to Apply Styles to Web Components & Their Drawbacks

### Flash of Unstyled Content
When using external stylesheets, such as an external CSS file, a "flash of unstyled content" may occur. This happens when the component is initially rendered without styles. To test, remove the `<link>` tag from the index HTML and add it to the JavaScript file for the card. Then, change the network setting to "Slow 3G."

### Styling Undefined Elements
If you delay the rendering of a component, the slot content may appear without styles, causing another flash of unstyled content. Here are two ways to prevent this:

1. **JavaScript Solution:**
   ```javascript
   const card = document.querySelector('app-card');
   card.style.display = 'none';
   customElements.whenDefined('app-card').then(() => {
       card.style.display = 'block';
   });
2. **CSS Solution:**
    app-card:not(:defined) {
    display: none;
    }

## Styling the Host Element (Component Itself)

### The host element refers to the web component itself. You can style it using the :host selector. For example:
    :host {
        display: block;
    }
    :host([inprogress]) {
    /* If the component has the 'inprogress' attribute */
    }
### Overriding Styles from Outside
    You can override the component’s top-level styles from outside the web component:
        app-button {
            display: inline;   
        }
    This allows users to override the top-level styling of your component from the outside.

## Styling Slot Content
    Slot content is part of the Light DOM and can be styled from outside the Shadow DOM:
        h1 {
            color: red;
        }
    Limitations of ::slotted()
        The ::slotted() selector works only for top-level nodes inside the slot.
            <h1 slot="card-header">Header</h1>   /* Works */
            <h3 slot="card-header">Sub Header</h3>
            <p slot="card-body">This is card body</p>

            <!-- Nested elements won't work for slot styling -->
            <div>
            <h1 slot="card-header">Header</h1>  /* Will not apply the red color */
            </div>
## Styling with part
    You can apply styles to specific elements inside the web component using the ::part() pseudo-element. This allows external styles to be applied to specific parts of a component.

    app-button::part(part-name) {
        /* Styles for the specific element inside the component */
    }
## Styling with Custom Variables
    You can declare and use custom CSS variables to style your web component.
        :host {
            --primary-color: #3498db;
        }

        button {
            background-color: var(--primary-color);
        }
## Browser Native Component Model
    The Browser Native Component Model refers to a set of standards and technologies that allow developers to create reusable, modular, and encapsulated components directly in web browsers. These components are part of the web platform and can be built using the browser’s native APIs, without relying on external libraries or frameworks. The key technologies that enable the Browser Native Component Model include:
  ### Key Technologies:
    Web Components: A suite of web platform APIs that allow developers to create reusable custom elements, with isolated functionality and style. It consists of four main technologies:

    Custom Elements: Define new HTML tags and their behavior.
    Shadow DOM: Encapsulates the internal structure and styles of a component, preventing them from leaking into the main DOM.
    HTML Templates: Predefined HTML structures that can be cloned and used in different parts of the document.
    ES Modules: JavaScript modules that can be loaded natively by the browser, allowing modular code.
    Browser-native features: These are built directly into browsers and work without needing external libraries or polyfills. This makes them lightweight and performant.

Advantages of the Browser Native Component Model
Standardization: Components built using web standards work across all modern browsers.
Encapsulation: With the Shadow DOM, styles and behaviors are scoped locally to the component.
Reusability: Components can be reused in different contexts or applications.
Interoperability: Components can work alongside any framework or be used in plain HTML and JavaScript.

















