import { html, LitElement, css } from "lit";
import { property } from "lit/decorators.js";
import { workspaceStyles } from "./workspaceStyles";
import { modalStyles } from "./modalStyles";
import { dropdownStyles } from "./dropdownStyles";

class Workspace extends LitElement {
  @property({ type: Boolean }) isModalOpen: boolean = false;
  @property({ type: Array }) workspaces = [
    { name: "Workspace 1" },
    { name: "Workspace 2" },
    { name: "Workspace 3" },
  ];
  @property({ type: String }) newWorkspaceName: string = "";
  @property({ type: String }) dropdownVisibleFor: string | null = null;

  static styles = [workspaceStyles, modalStyles, dropdownStyles];

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
            (workspace, index) => html`
              <tr>
                <td>${workspace.name}</td>
                <td>
                  <button @click="${() => this.toggleDropdown(workspace.name)}">
                    ...
                  </button>
                  ${this.dropdownVisibleFor === workspace.name
                    ? html`
                        <div class="dropdown">
                          <button @click="${() => this.deleteWorkspace(index)}">
                            Delete
                          </button>
                        </div>
                      `
                    : ""}
                </td>
              </tr>
            `
          )}
        </table>
        ${this.renderModal()}
      </div>
    `;
  }

  renderModal() {
    return this.isModalOpen
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
                @input="${this.updateNewWorkspaceName}"
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
      : "";
  }

  updateNewWorkspaceName(event: InputEvent) {
    const target = event.target as HTMLInputElement;
    this.newWorkspaceName = target.value;
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
      this.closeModal();
    }
  }

  toggleDropdown(workspaceName: string) {
    this.dropdownVisibleFor =
      this.dropdownVisibleFor === workspaceName ? null : workspaceName;
  }

  deleteWorkspace(workspaceIndex: number) {
    this.workspaces = this.workspaces.filter(
      (_, index) => index !== workspaceIndex
    );
    this.dropdownVisibleFor = null;
  }
}

customElements.define("my-workspace", Workspace);
