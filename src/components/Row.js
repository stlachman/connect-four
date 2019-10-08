import React from "react";
import Cell from "./Cell";

const Row = ({ row }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {row.map((cell, i) => (
        <Cell key={i} cell={cell} />
      ))}
    </div>
  );
};

export default Row;
