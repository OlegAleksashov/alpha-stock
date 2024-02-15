import React, { FC } from 'react'
import { Grid } from "@mui/material";

import {
    useGetTimeSeriesWeeklyAdjustedQuery,
    useGetTimeSeriesMonthlyAdjustedQuery
} from "../../api/Charts/Charts";
import Chart from "./Chart/Chart";

const symbol = 'IBM'

const LiveCharts: FC = () => {

    const {
        data: dataWeekly,
        isLoading: isLoadingWeekly,
        isError: isErrorWeekly
    } = useGetTimeSeriesWeeklyAdjustedQuery(symbol)

    const {
        data: dataMonthly,
        isLoading: isLoadingMonthly,
        isError: isErrorMonthly
    } = useGetTimeSeriesMonthlyAdjustedQuery(symbol)

    return (
        <Grid container spacing={3}>
            <Grid item lg={6} md={12} xs={12}>
                <Chart isLoading={isLoadingWeekly} data={dataWeekly} />
            </Grid>
            <Grid item lg={6} md={12} xs={12}>
                <Chart isLoading={isLoadingMonthly} data={dataMonthly} />
            </Grid>
        </Grid>
    )
}

export default LiveCharts