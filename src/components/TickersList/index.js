import React, { useState, useEffect } from 'react';
import TickersLoading from 'components/TickersList/Loading';
import Ticker from 'components/Ticker';
import { fetchTradingPairs } from 'api/tradingPairs'
import { Box, Typography, Button } from '@mui/material'
import { isEmpty } from 'utils/browserHelper'
import ReactList from 'react-list'

function TickersList() {
    const [ loading, setLoading ] = useState(false)
    const [ results, setResults ] = useState()
    async function _getTradingPairs() {
        try {
            const response = await fetchTradingPairs('Tickers', 'symbols=ALL')
            if (!isEmpty(response)) {
                const { status, data } = response || {}
                if (status === 200 && !isEmpty(data)) {
                   setResults(data)
                }
            }
            setLoading(false)
        }
        catch (e) {
            setLoading(false)
            console.log(e)
        }
    }

    function renderItem (index, key) {
        let result = results[index]
        const [
            SYMBOL,
            BID,
            BID_SIZE,
            ASK,
            ASK_SIZE,
            DAILY_CHANGE,
            DAILY_CHANGE_RELATIVE,
            LAST_PRICE,
            VOLUME,
            HIGH,
            LOW
        ] = result || []
        return (
            <>
                <Ticker key={key} symbol={SYMBOL} lastPrice={LAST_PRICE} dailyChange={DAILY_CHANGE} />
                <Box pt={1} />
            </>
            )
    }

    useEffect(() => {
        setLoading(true)
        _getTradingPairs()
    }, [])
    return (
        <>
            {loading ? (
                <TickersLoading />
            ) : <ReactList
                itemRenderer={renderItem}
                pageSize={20}
                length={results && results.length}
                type="simple"
            />}
        </>
    )
}

export default TickersList