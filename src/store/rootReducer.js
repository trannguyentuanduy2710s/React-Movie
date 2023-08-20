import { combineReducers } from "@reduxjs/toolkit";
import { btMovieReducer } from "../store/BT_Movie/slice";


export const rootReducer = combineReducers({
    btMovie: btMovieReducer,
})

