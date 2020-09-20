import React from "react";
import { StyledCounter } from "./styles";

const Counter = ({ value }) => {
  return <StyledCounter leftOffset>{value}</StyledCounter>;
};

export default Counter;
