import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { workspaceStyles } from "./workspaceStyles";
import { modalStyles } from "./modalStyles";

class Workspace extends LitElement {
  @property({ type: Boolean }) isModalOpen: boolean;
  @property({ type: Array }) workspaces = [
    { name: "Workspace 1" },
    { name: "Workspace 2" },
    { name: "Workspace 3" },
  ];
  @property({ type: String }) newWorkspaceName: string = "";

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
          ${this.workspaces.map(
            (workspace) => html`
              <tr>
                <td>${workspace.name}</td>
                <td><button>...</button></td>
              </tr>
            `
          )}
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
                  <input
                    type="text"
                    .value="${this.newWorkspaceName}"
                    @input="${(event: InputEvent) => {
                      const target = event.target as HTMLInputElement;
                      this.newWorkspaceName = target.value;
                    }}"
                    placeholder="Workspace Name"
                  />
                  <button
                    @click="${this.createWorkspace}"
                    class="modal-button"
                    ?disabled="${this.newWorkspaceName.trim() === ""}"
                  >
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
    if (this.newWorkspaceName.trim() !== "") {
      this.workspaces = [...this.workspaces, { name: this.newWorkspaceName }];
      this.newWorkspaceName = "";
    }
    this.closeModal();
  }
}

customElements.define("my-workspace", Workspace);
