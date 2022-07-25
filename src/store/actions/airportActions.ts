import { AppDispatch } from "..";
import axios from "../../axios";
import { IAirport, ServerResponse } from "../../components/models/models";
import { airportSlice } from "../slices/airportSlice";

export const fetchAirport = (page = 1, count = 50) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(airportSlice.actions.fetching());
      const response = await axios.get<ServerResponse<IAirport>>(`airports?count=${count}&page=${page}`);
      dispatch(airportSlice.actions.fetchSuccess(response.data.results));
    } catch (e) {
      dispatch(airportSlice.actions.fetchError(e as Error));
    }
  } 
};
