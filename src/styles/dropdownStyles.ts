import { css } from "lit";

export const dropdownStyles = css`
  .dropdown {
    position: absolute;
    background-color: var(--color-navy-purple);
    box-shadow: 0px 5px 20px 0px #0000001a;
    padding: 12px;
    z-index: 1;
    border: 1px solid var(--color-border);
    border-radius: 3px;
    width: 226px;
    height: 50px;
    top: 60px;
    right: 0;
  }

  .dropdown button {
    width: 100%;
    text-align: left;
  }
`;
