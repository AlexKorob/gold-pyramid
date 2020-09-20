const { default: styled } = require("styled-components");

export const StyledPiramid = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  justify-content: center;
  & > .row {
    display: flex;
    justify-content: center;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 2rem;
  text-align: center;
`;
