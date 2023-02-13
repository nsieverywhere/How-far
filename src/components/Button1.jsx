import styled, { css } from "styled-components";

export const Btn = styled.button`
  background: #d8d8d8;
  border-radius: 3px;
  border: none;
  color: #3d1860;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background-color: #3d1860;
      color: white;
    `};

  &:hover {
    background-color: #230e36;
    color: white;
  }
`;

// #331450
