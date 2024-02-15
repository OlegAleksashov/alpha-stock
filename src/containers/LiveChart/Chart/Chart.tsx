// @ts-nocheck
import React, { useMemo, FC } from "react";
import { Skeleton } from "@mui/material";
import ChartStyle from "./style";
import ReactApexChart from "react-apexcharts";
import { candleStickOptions } from "../../../constant/constant";
import { formatStockData } from "../../../utils/formatStockData";

interface IChart {
  isLoading: boolean;
  data?: Record<string, any>;
}

const Chart: FC<IChart> = ({ isLoading, data }) => {
  const formattedData = useMemo(() => {
    if (data) {
      return formatStockData(data);
    }
    return {};
  }, [data]);

  const style = ChartStyle();
  return (
    <>
      {isLoading && <Skeleton variant="rectangular" sx={style.skeleton} />}
      {!isLoading && data && (
        <ReactApexChart
          series={[
            {
              data: formattedData,
            },
          ]}
          options={candleStickOptions}
          type="candlestick"
        />
      )}
    </>
  );
};

export default Chart;
