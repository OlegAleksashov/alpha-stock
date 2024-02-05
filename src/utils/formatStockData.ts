type StockData = {
    '1. open': number;
    '2. high': number;
    '3. low': number;
    '4. close': number;
  };
export const formatStockData = (stockData: any) => {

    const formattedData: any = []

    if (stockData['Weekly Adjusted Time Series']) {
        Object.entries(
            stockData['Weekly Adjusted Time Series']
        ).map(
            // eslint-disable-next-line array-callback-return
            ([key, value]) => {
                const typedValue = value as StockData;
                formattedData.push({
                    x: key,
                    y: [
                        typedValue['1. open'],
                        typedValue['2. high'],
                        typedValue['3. low'],
                        typedValue['4. close'],
                    ]
                })
            }
        )
    }
    return formattedData;
}