import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { workspaceStyles } from "./workspaceStyles";
import { modalStyles } from "./modalStyles";

class Workspace extends LitElement {
  @property({ type: Boolean }) isModalOpen: boolean;

  static styles = [workspaceStyles, modalStyles];

  constructor() {
    super();
    this.isModalOpen = false;
  }

  render() {
    return html`
      <div>
        <button class="button" @click="${this.toggleModal}">
          + New workspace
        </button>
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

        ${this.isModalOpen
          ? html`
              <div class="modal" @click="${this.closeModal}">
                <div
                  class="modal-content"
                  @click="${(event: MouseEvent) => event.stopPropagation()}"
                >
                  <span class="close" @click="${this.closeModal}">&times;</span>
                  <h2 class="modal-title">Create Workspace</h2>
                  <input type="text" placeholder="Workspace Name" />
                  <button @click="${this.createWorkspace}" class="modal-button">
                    Create
                  </button>
                </div>
              </div>
            `
          : ""}
      </div>
    `;
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  createWorkspace() {
    this.closeModal();
  }
}

customElements.define("my-workspace", Workspace);
