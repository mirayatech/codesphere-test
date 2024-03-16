import { css } from "lit";

export const modalStyles = css`
  :host {
    --modal-background-color: rgba(0, 0, 0, 0.5);
    --modal-content-background-color: #181621;
    --modal-content-padding: 20px;
    --modal-content-width: 300px;
    --close-button-size: 24px;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--modal-background-color);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .modal-content {
    background-color: var(--modal-content-background-color);
    padding: var(--modal-content-padding);
    width: var(--modal-content-width);
    border-radius: 5px;
    position: relative;
    width: 500px;
  }

  .close {
    position: absolute;
    top: 3px;
    right: 10px;
    font-size: calc(20 / 16 * 1rem);
    color: var(--color-white);
    cursor: pointer;
  }

  .modal-title {
    text-align: center;
    color: var(--color-white);
    font-size: calc(20 / 16 * 1rem);
    line-height: 28px;
    text-align: center;
    margin-bottom: 50px;
  }
  .modal-button {
    height: 44px;
    width: 100%;
    font-size: calc(14 / 16 * 1rem);
    padding: 6px 12px;
    color: var(--color-white);
    border-radius: 3px;
    background-color: var(--color-primary);
    transition: background-color 0.2s ease-in-out;
  }

  .modal-button:disabled {
    cursor: not-allowed;
    background-color: var(--color-border);
  }

  input {
    margin-top: 10px;
    margin-bottom: 20px;
    display: block;
    height: 34px;
    color: var(--color-light-purple);
    background-color: transparent;
    border: 1px solid var(--color-border);
    border-radius: 3px;
    padding: 6px 12px;
  }

  input::placeholder {
    color: var(--color-light-purple);
  }
`;
