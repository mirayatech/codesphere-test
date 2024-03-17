import { html, LitElement, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("plus-icon")
export class PlusIcon extends LitElement {
  static styles = css`
    span {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;
  render() {
    return html`
      <span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.0001 0.483276C6.35908 0.483276 6.6501 0.774291 6.6501 1.13328L6.6501 11.1333C6.6501 11.4923 6.35908 11.7833 6.0001 11.7833C5.64111 11.7833 5.3501 11.4923 5.3501 11.1333L5.3501 1.13328C5.3501 0.774291 5.64111 0.483276 6.0001 0.483276Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.6501 6.13328C11.6501 6.49226 11.3591 6.78328 11.0001 6.78328L1.00015 6.78328C0.641162 6.78328 0.350147 6.49226 0.350147 6.13328C0.350147 5.77429 0.641162 5.48328 1.00015 5.48328L11.0001 5.48328C11.3591 5.48328 11.6501 5.77429 11.6501 6.13328Z"
            fill="white"
          />
        </svg>
      </span>
    `;
  }
}
