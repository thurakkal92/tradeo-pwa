import React, {useState} from 'react';
import {TickersContext, SymbolContext} from 'context/trades'
import TradesPage from './TradesPage';
// import {API_STATES} from 'constants/api'
// import {WS_BASE_URL} from 'constants/api'


function Trades() {
    const tickerscontextHook = useState([])
    const symbolContexhook = useState({index: null, symbol: ''})
   
    return (
        <SymbolContext.Provider value={symbolContexhook}>
        <TickersContext.Provider value={tickerscontextHook}>
            <TradesPage />
        </TickersContext.Provider>
        </SymbolContext.Provider>
    )
}

export default Trades