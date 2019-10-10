import React from "react";
import Row from "./Row";
import DropArrows from "./DropRow";
import styled from "styled-components";

const Panel = styled.div`
  background-color: #194772;
  max-width: 180px;
  padding: 12px 10px 10px;
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const Button = styled.button`
  background-color: #ff3232;
  border: 2px solid #ff3232;
  color: #fff;
  font-weight: bold;
  border-radius: 4px;
  transition: 0.275s all ease-in-out;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const Board = ({ board, dropPiece, resetGame, currentPlayer, winner }) => {
  const convertName = name => {
    return name === "Y" ? `Yellow` : `Red`;
  };

  const status = (name, winner) => {
    if (!winner) {
      return `${convertName(name)}'s turn`;
    } else {
      return `${convertName(winner)} wins`;
    }
  };
  return (
    <div style={{ maxWidth: "530px", margin: "0 auto", padding: "0 15px" }}>
      <h2>Connect Four!</h2>
      <Container>
        <h3 style={{ margin: "0" }}>{status(currentPlayer, winner)}</h3>

        <Button onClick={resetGame}>Reset Game</Button>
      </Container>
      <Panel>
        <DropArrows
          dropPiece={dropPiece}
          currentPlayer={currentPlayer}
          length={board[0].length}
        />
        {board.map((row, i) => (
          <Row key={i} row={row} />
        ))}
      </Panel>
    </div>
  );
};

export default Board;
