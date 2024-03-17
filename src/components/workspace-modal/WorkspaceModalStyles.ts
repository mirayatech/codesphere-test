import { css } from "lit";

export const WorkspaceModalStyles = css`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #28294299;
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .modal-content {
    background-color: var(--color-background);
    padding: 20px;
    border-radius: 5px;
    position: relative;
    width: 100%;
    max-width: 620px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin: 10px;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 5px;
    font-size: calc(25 / 16 * 1rem);
    color: var(--color-white);
    border: none;
    cursor: pointer;
    background-color: transparent;
    rotate: 45deg;
  }

  .modal-title {
    text-align: center;
    font-weight: 600;
    color: var(--color-white);
    font-size: calc(20 / 16 * 1rem);
    line-height: 28px;
    text-align: center;
  }

  .modal-actions {
    gap: 20px;
    display: flex;
    flex-direction: column;
  }

  .modal-input {
    margin-top: 10px;
    display: block;
    height: 34px;
    color: var(--color-light-purple);
    background-color: transparent;
    border: 1px solid var(--color-border);
    border-radius: 3px;
    padding: 6px 12px;
    font-size: calc(14 / 16 * 1rem);
  }

  .modal-input::placeholder {
    color: var(--color-light-purple);
  }

  .modal-input:focus {
    outline: none;
  }

  .modal-button {
    cursor: pointer;
    height: 44px;
    width: 100%;
    font-size: calc(14 / 16 * 1rem);
    padding: 6px 12px;
    border: none;
    color: var(--color-white);
    border-radius: 3px;
    background-color: var(--color-primary);
    transition: background-color 0.2s ease-in-out;
  }

  .modal-button:disabled {
    cursor: not-allowed;
    background-color: var(--color-border);
  }
`;
