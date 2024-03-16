import { html, css, LitElement } from "lit";

class MyElement extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  render() {
    return html`<p>Hello, Lit!</p>`;
  }
}

customElements.define("my-element", MyElement);
