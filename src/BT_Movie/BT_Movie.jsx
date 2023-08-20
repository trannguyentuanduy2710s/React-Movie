import React from "react";
import seatData from '../data/dataSeat.json'
import SeatList from "./SeatList";
import Result from "./Result";

const BT_Movie = () => {

// console.log('seatData:', seatData);

  return (
    <div className="container">
      <h1>Movie booking</h1>
      <div className="row mt-5">
        <div className="col-8">
            <div className="p-2 fs-1 bg-dark text-white">screen</div>
            <SeatList seatData={seatData}/>
        </div>
        <div className="col-4">
            <Result/>
        </div>
      </div>
    </div>
  );
};

export default BT_Movie;
