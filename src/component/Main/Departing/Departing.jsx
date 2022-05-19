import React from "react";
import moment from "moment";

function Departing({ allDeparting, airportNow }) {
  return (
    <>
      {allDeparting.map((plane, index) => (
        <div className="flight" key={index}>
          <div>
            <p>{airportNow}</p>
          </div>
          <div>
            <p>
              {moment(String(new Date(plane.firstSeen * 1000))).format("LLL")}
            </p>
          </div>
          <div>
            <p>-</p>
          </div>
          <div>
            <p>{plane.callsign}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Departing;
