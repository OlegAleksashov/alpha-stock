import React, { useEffect, useMemo, useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import { formatStockData } from '../../utils/formatStockData'
import { fetchStockData } from '../../services/services'
import { candleStickOptions } from '../../constant/constant'

const LiveChart = ({ symbol }: any) => {
  const [stockData, setStockData] = useState({})

  useEffect(() => {
      fetchStockData(symbol).then(data => {
          console.log(data)
          setStockData(data)
      }
          
      )
  }, [symbol])

  const seriesData = useMemo(() => formatStockData(stockData), [stockData])

  return (
      <ReactApexChart
          series={
              [
                  {
                      data: seriesData
                  }
              ]
          }
          options={candleStickOptions}
          type="candlestick"
      />
  )
}

export default LiveChart