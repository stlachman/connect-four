import React from "react";
import styled from "styled-components";

const RoundedCell = styled.button`
  color: ${cell => {
    if (cell.children == "Y") {
      return "yellow";
    } else if (cell.children == "R") {
      return "red";
    } else {
      return "white";
    }
  }};
  background-color: ${cell => {
    if (cell.children == "Y") {
      return "yellow";
    } else if (cell.children == "R") {
      return "red";
    } else {
      return "white";
    }
  }};

  border-radius: 50%;
  border: 2px solid black;
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
