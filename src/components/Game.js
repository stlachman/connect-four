import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const value = "O"; // by default
  const myGrid = [...Array(6)].map(e => Array(7).fill(value));

  const [board, setBoard] = useState(myGrid);
  const [currentPlayer, setCurrentPlayer] = useState("Y");
  const [turns, setTurns] = useState(1);
  const [winner, setWinner] = useState("");

  const resetGame = () => {
    setBoard(myGrid);
    setCurrentPlayer("Y");
    setWinner("");
  };

  const dropPiece = column => {
    for (let i = board.length - 1; i >= 0; i--) {
      if (board[i][column] === "O") {
        board[i][column] = currentPlayer;
        setTurns(turns + 1);
        break;
      }
    }

    const uniformRow = (p1, p2, p3, p4) => {
      return p1 != "O" && p1 == p2 && p2 == p3 && p3 == p4;
    };
    console.log(turns);
    if (turns >= 7) {
      //check horizontally
      for (let i = 0; i < board.length; i++) {
        let row = board[i];
        for (let j = 0; j < row.length - 3; j++) {
          if (uniformRow(row[j], row[j + 1], row[j + 2], row[j + 3])) {
            setWinner(currentPlayer);
          }
        }
      }

      //vertically
      for (let i = 0; i < board.length - 3; i++) {
        let row = board[i];
        for (let j = 0; j < row.length; j++) {
          if (
            uniformRow(
              row[j],
              board[i + 1][j],
              board[i + 2][j],
              board[i + 3][j]
            )
          ) {
            setWinner(currentPlayer);
          }
        }
      }

      //diagonally
      for (let i = 0; i < board.length - 3; i++) {
        let row = board[i];
        for (let j = 0; j < row.length; j++) {
          if (j <= (row.length - 1) / 2) {
            if (
              uniformRow(
                row[j],
                board[i + 1][j + 1],
                board[i + 2][j + 2],
                board[i + 3][j + 3]
              )
            ) {
              setWinner(currentPlayer);
            }
          }

          if (j >= (row.length - 1) / 2) {
            if (
              uniformRow(
                row[j],
                board[i + 1][j - 1],
                board[i + 2][j - 2],
                board[i + 3][j - 3]
              )
            ) {
              setWinner(currentPlayer);
            }
          }
        }
      }

      //vertically
      for (let i = 0; i < board.length - 3; i++) {
        let row = board[i];
        for (let j = 0; j < row.length; j++) {
          if (
            uniformRow(
              row[j],
              board[i + 1][j],
              board[i + 2][j],
              board[i + 3][j]
            )
          ) {
          }
        }
      }

      //diagonally
      for (let i = 0; i < board.length - 3; i++) {
        let row = board[i];
        for (let j = 0; j < row.length; j++) {
          if (j <= (row.length - 1) / 2) {
            if (
              uniformRow(
                row[j],
                board[i + 1][j + 1],
                board[i + 2][j + 2],
                board[i + 3][j + 3]
              )
            ) {
            }
          }

          if (j >= (row.length - 1) / 2) {
            if (
              uniformRow(
                row[j],
                board[i + 1][j - 1],
                board[i + 2][j - 2],
                board[i + 3][j - 3]
              )
            ) {
            }
          }
        }
      }
    }

    currentPlayer === "Y" ? setCurrentPlayer("R") : setCurrentPlayer("Y");
  };

  return (
    <Board
      dropPiece={dropPiece}
      currentPlayer={currentPlayer}
      board={board}
      resetGame={resetGame}
      winner={winner}
    />
  );
};

export default Game;
