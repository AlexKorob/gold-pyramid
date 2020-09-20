import styled, { css } from "styled-components";

export const StyledCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5px;
  cursor: default;
  color: ${(props) => (props.showValue ? "white" : "#333")};
  background-color: ${(props) => props.backgroundColor || "darkgray"};
  border: 2px solid black;
  min-width: 25px;
  min-height: 25px;
  ${(props) =>
    props.isClickable &&
    css`
      :hover {
        cursor: pointer;
        outline: 3px solid darkred;
        border: 2px solid darkred;
      }
    `}
`;
