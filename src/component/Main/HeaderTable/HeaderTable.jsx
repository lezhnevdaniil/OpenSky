import React from "react";
import "./HeaderTable.scss";

function HeaderTable() {
  return (
    <div className="header-table">
      <div>
        <p>AIRPORT</p>
      </div>
      <div>
        <p>TIME</p>
      </div>
      <div>
        <p>ARRIVING</p>
      </div>
      <div>
        <p>DEPARTING</p>
      </div>
    </div>
  );
}

export default HeaderTable;
