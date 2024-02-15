//@ts-nocheck
export const formatStockData = (stockData) => {

    const formattedData = []

    if (stockData['Weekly Adjusted Time Series']) {
        Object.entries(
            stockData['Weekly Adjusted Time Series']
        ).map(
            // eslint-disable-next-line array-callback-return
            ([key, value]) => {
                formattedData.push({
                    x: key,
                    y: [
                        value['1. open'],
                        value['2. high'],
                        value['3. low'],
                        value['4. close'],
                    ]
                })
            }
        )
    }

    if (stockData['Monthly Adjusted Time Series']) {
        Object.entries(
            stockData['Monthly Adjusted Time Series']
        ).map(
            // eslint-disable-next-line array-callback-return
            ([key, value]) => {
                formattedData.push({
                    x: key,
                    y: [
                        value['1. open'],
                        value['2. high'],
                        value['3. low'],
                        value['4. close'],
                    ]
                })
            }
        )
    }

    return formattedData
}
