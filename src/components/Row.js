import React from "react";
import Cell from "./Cell";

const Row = ({ row }) => {
  return (
    <div
      class="row"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      {row.map(cell => (
        <Cell cell={cell} />
      ))}
    </div>
  );
};

export default Row;
