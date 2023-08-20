import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { btMovieActions } from "../store/BT_Movie/slice";

const Result = () => {
    const dispatch = useDispatch();
    const { seatBooking } = useSelector((state) => state.btMovie);
    console.log("seatBooking: ", seatBooking);

    return (
        <div>
            <div>
                <h2 className="mt-5">Danh sách ghế đã chọn</h2>
                <div className="mt-3 d-flex gap-2">
                    <div className="Seat "></div>
                    <p>Ghế chưa chọn</p>
                </div>
                <div className="mt-3 d-flex gap-2">
                    <div className="Seat booking"></div>
                    <p>Ghế đã chọn</p>
                </div>
                <div className="mt-3 d-flex gap-2">
                    <div className="Seat booked"></div>
                    <p>Ghế đã đặt</p>
                </div>
            </div>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th>Hủy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {seatBooking.map((chair) => (
                            <tr key={chair.soGhe}>
                                <td>{chair.soGhe}</td>
                                <td>{chair.gia}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => {
                                            dispatch(
                                                btMovieActions.setSeatBooking(
                                                    chair
                                                )
                                            );
                                        }}
                                    >
                                        X
                                    </button>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td className="text-danger">
                                Tổng tiền cần thanh toán
                            </td>
                            <td>
                                {seatBooking.reduce((total, chair) => {
                                    return (total += chair.gia);
                                }, 0)}
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

                <button
                    className="btn btn-success"
                    onClick={() => {
                        dispatch(btMovieActions.setSeatBooked());
                    }}
                >
                    Thanh toán
                </button>
            </div>
        </div>
    );
};

export default Result;
