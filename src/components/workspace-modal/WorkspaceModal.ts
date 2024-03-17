import { html, LitElement } from "lit";
import { customElement, property, eventOptions } from "lit/decorators.js";
import { WorkspaceModalStyles } from "./WorkspaceModalStyles";
import "../../components/icons/PlusIcon";

@customElement("workspace-modal")
export class WorkspaceModal extends LitElement {
  @property({ type: Boolean }) isOpen = false;
  @property({ type: String }) newWorkspaceName = "";

  static styles = [WorkspaceModalStyles];

  render() {
    return this.isOpen
      ? html`
          <div class="modal" @click="${this.closeModal}">
            <div
              class="modal-content"
              @click="${(event: MouseEvent) => event.stopPropagation()}"
              aria-modal="true"
              role="dialog"
              aria-labelledby="modalTitle"
            >
              <button
                class="close-button"
                aria-label="Close modal"
                @click="${this.closeModal}"
              >
                <plus-icon />
              </button>
              <h2 id="modalTitle" class="modal-title">Create Workspace</h2>

              <div class="modal-actions">
                <input
                  id="workspaceNameInput"
                  type="text"
                  .value="${this.newWorkspaceName}"
                  @input="${this.updateNewWorkspaceName}"
                  placeholder="Workspace Name"
                  class="modal-input"
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
          </div>
        `
      : null;
  }

  closeModal() {
    this.isOpen = false;
    this.dispatchEvent(new CustomEvent("close-modal"));
  }

  updateNewWorkspaceName(event: InputEvent) {
    this.newWorkspaceName = (event.target as HTMLInputElement).value;
  }

  @eventOptions({ capture: true })
  createWorkspace() {
    if (this.newWorkspaceName.trim() !== "") {
      this.dispatchEvent(
        new CustomEvent("create-workspace", { detail: this.newWorkspaceName })
      );
      this.newWorkspaceName = "";
      this.isOpen = false;
    }
  }

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties);
    if (changedProperties.has("isOpen") && this.isOpen) {
      const inputElement = this.shadowRoot?.querySelector(
        "#workspaceNameInput"
      ) as HTMLInputElement;
      if (inputElement) inputElement.focus();
    }
  }
}
