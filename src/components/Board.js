import React from "react";
import Row from "./Row";
import DropArrows from "./DropArrows";
import styled from "styled-components";

const Panel = styled.div`
  background-color: blue;
  max-width: 180px;
  padding: 10px 20px;
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
    <div class="board" style={{ margin: "50px" }}>
      <h3>{status(currentPlayer, winner)}</h3>

      <button onClick={resetGame}>Reset Game</button>
      <Panel>
        <DropArrows dropPiece={dropPiece} length={board[0].length} />
        {board.map(row => (
          <Row row={row} />
        ))}
      </Panel>
    </div>
  );
};

export default Board;
