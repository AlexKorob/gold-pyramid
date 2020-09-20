import React from "react";
import { StyledCell } from "./styles";

const Cell = ({ cellData, handleClick }) => {
  return (
    <StyledCell
      id={`${cellData.indexPos1}-${cellData.indexPos2}`}
      onClick={() => handleClick(cellData.indexPos1, cellData.indexPos2)}
      backgroundColor={cellData.showValue && cellData.backgroundColor}
      isClickable={cellData.isClickable}
      showValue={cellData.showValue}
    >
      {cellData.value}
    </StyledCell>
  );
};

export default Cell;
