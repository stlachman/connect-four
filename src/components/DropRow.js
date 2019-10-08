import React from "react";
import styled from "styled-components";

const DropBall = styled.div`
  height: 23px;
  width: 23px;
  border-radius: 50%;
  transition: 0.275s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: ${({ currentPlayer }) => {
      if (currentPlayer == "Y") {
        return "yellow";
      } else if (currentPlayer == "R") {
        return "red";
      }
    }};
  }
`;

const DropConntainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-flow: row nowrap;
  margin-bottom: 5px;
`;

const DropRow = ({ length, dropPiece, currentPlayer }) => {
  const createArray = () => {
    let results = [];
    for (let i = 0; i < length; i++) {
      results.push("D");
    }
    return results;
  };

  const arrowRows = createArray();

  return (
    <DropConntainer>
      {arrowRows.map((drop, i) => (
        <DropBall
          currentPlayer={currentPlayer}
          key={i}
          onClick={() => dropPiece(i)}
        ></DropBall>
      ))}
    </DropConntainer>
  );
};

export default DropRow;
