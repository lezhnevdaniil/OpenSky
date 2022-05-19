import React from "react";
import { filterAirport, airports, citiesKeys } from "../Main/airportsConst";
import getArrivalRequest from "./requests/getArrivalRequest";
import getDepartingRequest from "./requests/getDepartingRequest";
import "./Filter.scss";

function Filter({
  setAirportNow,
  airportNow,
  setAllArriving,
  setIsPlanes,
  setAllDeparting,
  setLoading,
}) {
  const nowDateSec = new Date().getTime() / 1000;

  const changeFilter = (types) => {
    if (types !== "Select airport") {
      setLoading(true);
      const apiUrlArriving = `https://DanLezh:Lezhnev123@opensky-network.org/api/flights/arrival?airport=${
        citiesKeys[types]
      }&begin=${Math.floor(nowDateSec) - 86400}&end=${Math.floor(nowDateSec)}`;

      getArrivalRequest(
        apiUrlArriving,
        setAllArriving,
        setIsPlanes,
        setLoading
      );

      const apiUrlDeparting = `https://DanLezh:Lezhnev123@opensky-network.org/api/flights/departure?airport=${
        citiesKeys[types]
      }&begin=${Math.floor(nowDateSec) - 86400}&end=${Math.floor(nowDateSec)}`;

      getDepartingRequest({
        apiUrlDeparting,
        setAllDeparting,
        setIsPlanes,
        setLoading,
      });
    } else {
      setAllDeparting(false);
      setAllArriving(false);
      setIsPlanes(true);
    }
  };

  return (
    <>
      <form>
        <div className="filter">
          {airports.map((airport) => (
            <div key={airport}>
              <label>{airport}</label>
              <select
                name={airport}
                onChange={(e) => (
                  setAirportNow(e.target.value), changeFilter(e.target.value)
                )}
                value={airportNow}
              >
                <option>Select airport</option>
                {filterAirport[airport].map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </form>
    </>
  );
}

export default Filter;
