import React from "react";
import styled from "styled-components";

const RoundedCell = styled.button`
  color: ${cell => {
    if (cell.children == "Y") {
      return "#FFFF7F";
    } else if (cell.children == "R") {
      return "#FF3232";
    } else {
      return "white";
    }
  }};
  background-color: ${cell => {
    if (cell.children == "Y") {
      return "#FFFF7F";
    } else if (cell.children == "R") {
      return "#FF3232";
    } else {
      return "white";
    }
  }};

  border-radius: 50%;
  border: 2px solid #194772;
  width: 25px;
  height: 25px;
`;

const Cell = ({ cell }) => {
  return (
    <div style={{ maxWidth: "30px" }}>
      <RoundedCell>{cell}</RoundedCell>
    </div>
  );
};

export default Cell;
