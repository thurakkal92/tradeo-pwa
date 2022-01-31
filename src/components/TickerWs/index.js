import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material'
import { WS_BASE_URL } from 'constants/api'
import { isEmpty ,stringFormat} from 'utils/browserHelper'
import TickerWsLoading from './Loading';

function TickerWs({ symbol }) {
    let lastPrice = ''
    let percChange = ''
    let tickerBlock = ''
    let PAIR = stringFormat(symbol).split('/')[1] || ''

    const [ ticker, setTicker ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const ws = new WebSocket(WS_BASE_URL); //TODO : Write reusable custom hook for websocket
    let msgTicker = JSON.stringify({
        event: 'subscribe',
        channel: 'ticker',
        symbol: symbol
    })
    ws.onopen = (event) => {
        ws.send(msgTicker);
    };
    useEffect(() => {
        ws.onmessage = function (event) {
            const json = JSON.parse(event.data);
            try {
                if (!isEmpty(json[ 1 ]) && json[ 1 ].length > 3) {
                    setLoading(false)
                    setTicker(json[ 1 ])
                }

            } catch (err) {
                console.log(err, 'error');
            }
        };
        return () => {
            ws.close()
            setLoading(false)
        }
    }, [])


    if (!isEmpty(ticker)) {
        const [
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
        ] = ticker || []
        lastPrice = LAST_PRICE
        percChange = DAILY_CHANGE_RELATIVE
        tickerBlock = (
            <Box display="flex" flexWrap="wrap" justifyContent="space-between" maxWidth={900}>
                <Box pb={5}>
                    <Typography color="mono.500" variant='body1'>Open price</Typography>
                    <Box py={1} />
                    <Typography color="mono.dark" variant="h5">{LOW}</Typography>
                </Box>
                <Box pb={5}>
                    <Typography color="mono.500" variant='body1'>Daily change</Typography>
                    <Box py={1} />
                    <Typography color="mono.dark" variant="h5">{DAILY_CHANGE} ({DAILY_CHANGE_RELATIVE * 100}%)</Typography>
                </Box>
                {/* <Box pr={10} /> */}
                <Box pb={5}>
                    <Typography color="mono.500" variant='body1'>Top bid</Typography>
                    <Box py={1} />
                    <Typography color="mono.dark" variant="h5">{BID}</Typography>
                </Box>
                {/* <Box pr={10} /> */}
                <Box pb={5}>
                    <Typography color="mono.500" variant='body1'>Top ask</Typography>
                    <Box py={1} />
                    <Typography color="mono.dark" variant="h5">{ASK}</Typography>
                </Box>
                {/* <Box pr={10} /> */}
                <Box pb={5}>
                    <Typography color="mono.500" variant='body1'>Last price</Typography>
                    <Box py={1} />
                    <Typography color="mono.dark" variant="h5">{LAST_PRICE}</Typography>
                </Box>
                {/* <Box pr={10} /> */}
                <Box pb={5}>
                    <Typography color="mono.500" variant='body1'>24hr range</Typography>
                    <Box py={1} />
                    <Typography color="mono.dark" variant="h5">{LOW} - {HIGH}</Typography>
                </Box>
            </Box>
        )
    }

    return (
        <>
            {loading ? (
                <TickerWsLoading />
            ) : (
                <>
                    <Box display="flex" alignItems="center">
                        <Typography color="mono.dark" variant='h1'> {PAIR} {lastPrice}</Typography>
                        <Box pr={4} />
                        <Typography color="primary" fontWeight={600} variant='body1'>{percChange * 100}%</Typography>
                    </Box>
                    <Box py={5} />
                    {tickerBlock}
                </>
            )}

        </>
    )
}

export default TickerWs