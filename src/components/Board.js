import React from "react";
import Row from "./Row";
import DropArrows from "./DropRow";
import styled from "styled-components";

const Panel = styled.div`
  background-color: blue;
  max-width: 180px;
  padding: 12px 10px 10px;
  margin: 0 auto;
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
    <div style={{ maxWidth: "530px", margin: "0 auto" }}>
      <h3>{status(currentPlayer, winner)}</h3>

      <button onClick={resetGame}>Reset Game</button>
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
