import React, {useState} from 'react';
// import {TickersContext} from 'context/trades'
import TradesPage from './TradesPage';
// import {API_STATES} from 'constants/api'
// import {WS_BASE_URL} from 'constants/api'


function Trades() {
    // const tickersContextHook = useState({status: A/PI_STATES.PENDING, data: []})
   
    return (
        // <TickersContext.Provider value={tickersContextHook}>
            <TradesPage />
        // </TickersContext.Provider>
    )
}

export default Trades