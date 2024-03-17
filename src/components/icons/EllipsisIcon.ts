import { html, LitElement, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("ellipsis-icon")
export class EllipsisIcon extends LitElement {
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
          width="4"
          height="15"
          viewBox="0 0 4 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.75 2.63327C3.75 3.59977 2.9665 4.38327 2 4.38327C1.0335 4.38327 0.25 3.59977 0.25 2.63327C0.25 1.66677 1.0335 0.88327 2 0.88327C2.9665 0.88327 3.75 1.66677 3.75 2.63327Z"
            fill="#858196"
          />
          <path
            d="M3.75 7.88327C3.75 8.84977 2.9665 9.63327 2 9.63327C1.0335 9.63327 0.25 8.84977 0.25 7.88327C0.25 6.91677 1.0335 6.13327 2 6.13327C2.9665 6.13327 3.75 6.91677 3.75 7.88327Z"
            fill="#858196"
          />
          <path
            d="M3.75 13.1333C3.75 14.0998 2.9665 14.8833 2 14.8833C1.0335 14.8833 0.25 14.0998 0.25 13.1333C0.25 12.1668 1.0335 11.3833 2 11.3833C2.9665 11.3833 3.75 12.1668 3.75 13.1333Z"
            fill="#858196"
          /></svg
      ></span>
    `;
  }
}
