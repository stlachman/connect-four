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
  border: 0;
  //also need to do it for background color white with O maybe not ternary
`;

const Cell = ({ cell }) => {
  return (
    <div class="cell" style={{ maxWidth: "30px" }}>
      <RoundedCell>{cell}</RoundedCell>
    </div>
  );
};

export default Cell;
