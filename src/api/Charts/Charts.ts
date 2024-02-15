import { emptySplitApi } from '../base'
import { KEY } from "../constats";
import { Symbol } from "./types";

const userApi = emptySplitApi.injectEndpoints({
    endpoints: (build) => ({
        getTimeSeriesWeeklyAdjusted: build.query<any, Symbol>({
            query: (symbol) => `query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=${KEY}`,
        }),
        getTimeSeriesMonthlyAdjusted: build.query<any, Symbol>({
            query: (symbol) => `query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${symbol}&apikey=${KEY}`,
        }),
    }),
})

export const {
    endpoints: {
        getTimeSeriesWeeklyAdjusted,
        getTimeSeriesMonthlyAdjusted
    },
    useGetTimeSeriesWeeklyAdjustedQuery,
    useGetTimeSeriesMonthlyAdjustedQuery
} = userApi