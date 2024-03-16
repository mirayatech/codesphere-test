import { html, LitElement } from "lit";
import { workspaceStyles } from "./workspaceStyles";

class Workspace extends LitElement {
  static styles = [workspaceStyles];

  render() {
    return html`
      <div>
        <button class="button">+ New workspace</button>
        <table>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td>Workspace 1</td>
            <td><button>...</button></td>
          </tr>
          <tr>
            <td>Workspace 2</td>
            <td><button>...</button></td>
          </tr>
          <tr>
            <td>Workspace 3</td>
            <td><button>...</button></td>
          </tr>
        </table>
      </div>
    `;
  }
}

customElements.define("my-workspace", Workspace);
