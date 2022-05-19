import React, { useState } from "react";
import Arriving from "./Arriving/Arriving";
import Departing from "./Departing/Departing";
import HeaderTable from "./HeaderTable/HeaderTable";
import Header from "../Header/Header";
import Filter from "../Filter/Filter";
import Loading from "./Loading/Loading";
import "./Main.scss";

function Main() {
  const [allArriving, setAllArriving] = useState();
  const [allDeparting, setAllDeparting] = useState();
  const [isPlanes, setIsPlanes] = useState(true);
  const [airportNow, setAirportNow] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="main">
      <Header />
      <Filter
        airportNow={airportNow}
        setAirportNow={setAirportNow}
        setAllArriving={setAllArriving}
        setIsPlanes={setIsPlanes}
        setAllDeparting={setAllDeparting}
        setLoading={setLoading}
        loading={loading}
      />
      <div className="main-table">
        <HeaderTable />
        {loading ? (
          <Loading />
        ) : (
          <div className="table">
            {allArriving || allDeparting ? (
              <>
                {allArriving && (
                  <Arriving 
                  allArriving={allArriving} 
                  airportNow={airportNow} />
                )}
                {allDeparting && (
                  <Departing
                    allDeparting={allDeparting}
                    airportNow={airportNow}
                  />
                )}
              </>
            ) : isPlanes ? (
              <div className="message">
                <p>Choose an airport</p>
              </div>
            ) : (
              <div className="message">
                <p>There are no flights for this period</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
