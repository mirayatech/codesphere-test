import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { dropdownStyles, modalStyles, workspaceStyles } from "./styles";
import { ApiService, WebSocketDataType, WorkspaceType } from "./util";

@customElement("my-workspace")
export class Workspace extends LitElement {
  @property({ type: Boolean }) isModalOpen = false;
  @property({ type: Array }) workspaces: WorkspaceType[] = [];
  @property({ type: String }) newWorkspaceName = "";
  @property({ type: Number }) dropdownVisibleFor: number | null = null;
  @property({ type: Number }) teamId = 1;

  static styles = [workspaceStyles, modalStyles, dropdownStyles];

  private apiService!: ApiService;

  constructor() {
    super();
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.initializeServiceAndData();
  }

  initializeServiceAndData() {
    this.apiService = new ApiService(this.teamId);
    this.fetchWorkspaces();
    this.setupWebSocket();
  }

  async fetchWorkspaces() {
    try {
      const workspaces = await this.apiService.listWorkspaces();
      this.workspaces = workspaces;
    } catch (error) {
      console.error("Error fetching workspaces:", error);
    }
  }

  setupWebSocket() {
    this.apiService.connectToWebSocket((data: WebSocketDataType) => {
      if (data.deleted) {
        this.workspaces = this.workspaces.filter(
          (workspace) => workspace.id !== data.id
        );
      } else {
        const index = this.workspaces.findIndex(
          (workspace) => workspace.id === data.id
        );
        if (index >= 0) {
          this.workspaces[index] = { ...this.workspaces[index], ...data };
        } else {
          const newWorkspace: WorkspaceType = {
            id: data.id,
            name: data.name || "Unnamed Workspace",
          };
          this.workspaces.push(newWorkspace);
        }
      }
      this.requestUpdate();
    });
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
                    : null}
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
      : null;
  }

  updateNewWorkspaceName(event: InputEvent) {
    this.newWorkspaceName = (event.target as HTMLInputElement).value;
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
    this.newWorkspaceName = "";
  }

  closeModal() {
    this.isModalOpen = false;
    this.newWorkspaceName = "";
  }

  async createWorkspace() {
    await this.apiService.createWorkspace(this.newWorkspaceName);
    this.newWorkspaceName = "";
    this.closeModal();
    this.fetchWorkspaces();
  }

  async deleteWorkspace(workspaceId: number) {
    await this.apiService.deleteWorkspace(workspaceId);
    this.dropdownVisibleFor = null;
    this.fetchWorkspaces();
  }

  toggleDropdown(workspaceId: number) {
    this.dropdownVisibleFor =
      this.dropdownVisibleFor === workspaceId ? null : workspaceId;
  }
}
