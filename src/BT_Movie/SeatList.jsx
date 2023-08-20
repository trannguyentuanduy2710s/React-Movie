import React from "react";
import Seat from "./Seat";
import cn from 'classnames'

const SeatList = ({ seatData }) => {

  // const { seatBooking, seatBooked } = useSelector((state) => state.btMovie);


  return (
    <div className="">
      {seatData.map((hangGhe) => {
        return (
          <div
            key={hangGhe.hang}
            className={cn("d-flex gap-3" , {disabled: !hangGhe.hang})}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <p className="hangGhe mt-4" style={{ width: 30, height: 30 }}>
              {hangGhe.hang}
            </p>
            {hangGhe.danhSachGhe.map((ghe) => {
              return <Seat key={ghe.soGhe} ghe={ghe}/>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default SeatList;
