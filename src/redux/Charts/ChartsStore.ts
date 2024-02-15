import { createSlice } from "@reduxjs/toolkit";
import {
  getTimeSeriesWeeklyAdjusted,
  getTimeSeriesMonthlyAdjusted,
} from "../../api/Charts/Charts";
import { formatStockData } from "../../utils/formatStockData";

const makeInitialState = () => ({
  charts: {
    timeSeriesWeeklyAdjusted: {},
    timeSeriesMonthlyAdjusted: {},
  },
});

export const ChartsStore = createSlice({
  name: "charts",
  initialState: makeInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      getTimeSeriesWeeklyAdjusted.matchFulfilled,
      (state, action) => {
        state.charts.timeSeriesWeeklyAdjusted = formatStockData(action.payload);
      }
    );
    builder.addMatcher(
      getTimeSeriesMonthlyAdjusted.matchFulfilled,
      (state, action) => {
        state.charts.timeSeriesMonthlyAdjusted = formatStockData(
          action.payload
        );
      }
    );
  },
});

export default ChartsStore;
