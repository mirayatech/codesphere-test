import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { dropdownStyles, modalStyles, workspaceStyles } from "./styles";

class Workspace extends LitElement {
  @property({ type: Boolean }) isModalOpen: boolean = false;
  @property({ type: Array }) workspaces = [
    { id: 1, name: "Workspace 1" },
    { id: 2, name: "Workspace 2" },
    { id: 3, name: "Workspace 3" },
  ];
  @property({ type: String }) newWorkspaceName: string = "";
  @property({ type: Number }) dropdownVisibleFor: number | null = null;

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
            (workspace) => html`
              <tr>
                <td>${workspace.name}</td>
                <td>
                  <button @click="${() => this.toggleDropdown(workspace.id)}">
                    ...
                  </button>
                  ${this.dropdownVisibleFor === workspace.id
                    ? html`
                        <div class="dropdown">
                          <button
                            @click="${() => this.deleteWorkspace(workspace.id)}"
                          >
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
      const newId =
        this.workspaces.reduce(
          (maxId, workspace) => Math.max(maxId, workspace.id),
          0
        ) + 1;
      this.workspaces = [
        ...this.workspaces,
        { id: newId, name: this.newWorkspaceName },
      ];
      this.newWorkspaceName = "";
      this.closeModal();
    }
  }

  toggleDropdown(workspaceId: number) {
    this.dropdownVisibleFor =
      this.dropdownVisibleFor === workspaceId ? null : workspaceId;
  }

  deleteWorkspace(workspaceId: number) {
    this.workspaces = this.workspaces.filter(
      (workspace) => workspace.id !== workspaceId
    );
    this.dropdownVisibleFor = null;
  }
}

customElements.define("my-workspace", Workspace);
