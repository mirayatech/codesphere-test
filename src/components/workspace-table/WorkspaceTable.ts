import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { WebSocketDataType, WorkspaceType, ApiService } from "../../util";
import { WorkspaceTableStyles } from "./WorkspaceTableStyles";
import "../workspace-modal/WorkspaceModal";
import "../icons";

@customElement("workspace-table")
export class WorkspaceTable extends LitElement {
  @property({ type: Boolean }) isModalOpen = false;
  @property({ type: Array }) workspaces: WorkspaceType[] = [];
  @property({ type: String }) newWorkspaceName = "";
  @property({ type: Number }) dropdownVisibleFor: number | null = null;
  @property({ type: Number }) teamId = 1;

  static styles = [WorkspaceTableStyles];

  private apiService: ApiService;

  constructor() {
    super();
    this.apiService = new ApiService(this.teamId);
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.initializeServiceAndData();
  }

  initializeServiceAndData() {
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
          this.workspaces.push({
            id: data.id,
            name: data.name || "Unnamed Workspace",
          });
        }
      }
      this.requestUpdate();
    });
  }

  render() {
    return html`
      <div class="workspace" role="region">
        <button
          class="workspace-button"
          @click="${() => (this.isModalOpen = true)}"
          aria-label="Add new workspace"
        >
          <plus-icon></plus-icon> New workspace
        </button>
        <workspace-modal
          ?isOpen="${this.isModalOpen}"
          @close-modal="${() => (this.isModalOpen = false)}"
          @create-workspace="${this.handleCreateWorkspace}"
          aria-label="Create a new workspace"
        ></workspace-modal>
        <table class="workspace-table">
          <thead>
            <tr class="table-row">
              <th class="table-header">Name</th>
              <th class="table-header">Actions</th>
            </tr>
          </thead>
        </table>
        <div class="table-body-scroll">
          <table>
            <tbody>
              ${this.workspaces.map(
                (workspace) => html`
                  <tr class="table-row">
                    <td class="table-data">${workspace.name}</td>
                    <td class="table-data">
                      <button
                        class="dropdown-button"
                        @click="${() => this.toggleDropdown(workspace.id)}"
                        aria-label="Options for ${workspace.name}"
                        aria-haspopup="true"
                        aria-expanded="${this.dropdownVisibleFor ===
                        workspace.id
                          ? "true"
                          : "false"}"
                      >
                        <ellipsis-icon aria-hidden="true"></ellipsis-icon>
                      </button>
                      ${this.dropdownVisibleFor === workspace.id
                        ? html`
                            <div class="dropdown-content" role="menu">
                              <button
                                class="dropdown"
                                @click="${() =>
                                  this.deleteWorkspace(workspace.id)}"
                                role="menuitem"
                              >
                                <trash-icon aria-hidden="true"></trash-icon>
                                Delete
                              </button>
                            </div>
                          `
                        : null}
                    </td>
                  </tr>
                `
              )}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  async createWorkspace(workspaceName: string) {
    if (workspaceName.trim() !== "") {
      await this.apiService.createWorkspace(workspaceName);
      this.fetchWorkspaces();
    }
    this.closeModal();
  }

  async deleteWorkspace(workspaceId: number) {
    await this.apiService.deleteWorkspace(workspaceId);
    this.dropdownVisibleFor = null;
    this.fetchWorkspaces();
  }

  handleCreateWorkspace(event: CustomEvent) {
    this.createWorkspace(event.detail);
  }

  toggleDropdown(workspaceId: number) {
    this.dropdownVisibleFor =
      this.dropdownVisibleFor === workspaceId ? null : workspaceId;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
