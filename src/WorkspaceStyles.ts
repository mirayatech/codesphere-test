import { css } from "lit";

export const WorkspaceStyles = css`
  :host {
    width: 100%;
    max-width: 520px;
  }

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1em;
  }

  th,
  td {
    text-align: left;
    border-bottom: 1px solid var(--color-border);
  }

  th {
    width: 450px;
    height: 28px;
    padding: 5px 16px 5px 8px;
    gap: 10px;

    font-size: calc(12 / 16 * 1rem);
    font-weight: 400;
    color: var(--color-medium-gray);
    background-color: var(--color-navy-purple);
  }
  td {
    height: 60px;
    font-size: calc(14 / 16 * 1rem);
    font-weight: 600;
    text-align: left;
    color: var(--color-light-purple);
    padding: 12px 16px 12px 8px;
  }

  th:first-child,
  td:first-child {
    width: 450px;
  }

  th:last-child,
  td:last-child {
    width: 70px;
    position: relative;
    text-align: right;
  }

  button {
    font-size: 1em;
    padding: 0.5em;
    color: var(--color-light-purple);
    background-color: transparent;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    margin-left: auto;
  }

  .button {
    margin-bottom: 20px;
    background-color: var(--color-primary);
    width: 150px;
    height: 34px;
    padding: 6px 12px;
    border-radius: 3px;
    font-size: calc(14 / 16 * 1rem);
    font-weight: 400;
    line-height: 22px;
    color: var(--color-white);
    transition: background-color 0.2s ease-in-out;
  }

  .button:hover {
    background-color: var(--color-primary-hover);
  }

  .dropdown {
    position: absolute;
    background-color: var(--color-navy-purple);
    box-shadow: 0px 5px 10px 0px #0000001a;
    padding: 6px;
    z-index: 1;
    border: 1px solid var(--color-border);
    border-radius: 3px;
    width: 226px;
    height: 50px;
    top: 60px;
    right: 0;
  }

  .dropdown button {
    gap: 5px;
    width: 100%;
    display: flex;
    align-items: center;
    color: var(--color-light-gray);
    font-size: calc(14 / 16 * 1rem);
  }

  .dropdown button span {
    font-size: 1.6rem;
  }
`;
