import React from "react";
import styled from "styled-components";

const Arrow = styled.i`
  border: solid white;
  border-width: 0 3px 3px 0;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;

const ArrowContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-flow: row nowrap;
`;

const DropArrows = ({ length, dropPiece }) => {
  const createArray = () => {
    let results = [];
    for (let i = 0; i < length; i++) {
      results.push("D");
    }
    return results;
  };

  const arrowRows = createArray();

  return (
    <ArrowContainer class="dropArrows" style={{ width: "100%" }}>
      {arrowRows.map((drop, i) => (
        <Arrow class="arrow down" onClick={() => dropPiece(i)}></Arrow>
      ))}
    </ArrowContainer>
  );
};

export default DropArrows;
