import React from "react";
import moment from "moment";

function Arriving({ allArriving, airportNow }) {
  return (
    <>
      {allArriving.map((plane, index) => (
        <div className="flight" key={index}>
          <div>
            <p>{airportNow}</p>
          </div>
          <div>
            <p>
              {moment(String(new Date(plane.lastSeen * 1000))).format("LLL")}
            </p>
          </div>
          <div>
            <p>{plane.callsign}</p>
          </div>
          <div>
            <p>-</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Arriving;
