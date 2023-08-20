import React from "react";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { btMovieActions } from "../store/BT_Movie/slice";
import cn from "classnames";

const Seat = ({ ghe }, className) => {
    // console.log("ghe: ", ghe);

    const dispatch = useDispatch();

    const { seatBooking, seatBooked } = useSelector((state) => state.btMovie);

    return (
        <div
            className={cn(
                "Seat d-flex",
                
                {
                    booking: seatBooking.find(
                        (chair) => chair.soGhe === ghe.soGhe
                    ),
                },
                {
                    booked: seatBooked.find(
                        (chair) => chair.soGhe === ghe.soGhe
                    ),
                },
                className
            )}
            key={ghe.soGhe}
            onClick={() => {
                dispatch(btMovieActions.setSeatBooking(ghe));
            }}
        >
            {ghe.soGhe}
        </div>
    );
};

export default Seat;
