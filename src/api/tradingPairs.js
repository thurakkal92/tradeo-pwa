import { apiGetHelper } from 'utils/apiHelper'

export const fetchTradingPairs = (pathParams, queryParams) => {
    const URL = `https://api-pub.bitfinex.com/v2/${pathParams}?${queryParams}`
    const response = apiGetHelper(URL)
    return response
}
