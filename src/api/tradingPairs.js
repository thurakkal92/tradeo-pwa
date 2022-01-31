import { apiGetHelper } from 'utils/apiHelper'
import { TRADING_PAIRS_BASE_URL } from 'constants/api'

export const fetchTradingPairs = (pathParams, queryParams) => {
    const URL = `${TRADING_PAIRS_BASE_URL}${pathParams}?${queryParams}`
    const response = apiGetHelper(URL)
    return response
}
