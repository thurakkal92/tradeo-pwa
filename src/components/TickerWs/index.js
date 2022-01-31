import React, { useState, useEffect, useContext } from 'react';
import { Typography, Box, Grid } from '@mui/material'
import { WS_BASE_URL } from 'constants/api'
import { isEmpty ,stringFormat} from 'utils/browserHelper'
import TickerWsLoading from './Loading';
import {SymbolContext} from 'context/trades'

function TickerWs({ symbol }) {
    let lastPrice = ''
    let percChange = ''
    let tickerBlock = ''
    let PAIR = stringFormat(symbol).split('/')[1] || ''
    const [symbolContext, setSymbolContext] = useContext(SymbolContext)
    const [ ticker, setTicker ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const ws = new WebSocket(WS_BASE_URL); //TODO : Write reusable custom hook for websocket
    let msgTicker = JSON.stringify({
        event: 'subscribe',
        channel: 'ticker',
        symbol: symbol
    })
    useEffect(()=> {
        if(symbol) {
            ws.onopen = (event) => {
                ws.send(msgTicker);
            };
        }
    }, [symbol])
    
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
            <Box marginX={5} >

            
            <Grid container spacing={5}>
                <Grid md={2} xs={6} pb={5}>
                    <Typography color="mono.500" variant='body1'>Open price</Typography>
                    <Box py={1} />
                    <Typography color="mono.dark" variant="h5">{LOW}</Typography>
                </Grid>
                <Grid md={2} xs={6} pb={5}>
                    <Typography color="mono.500" variant='body1'>Daily change</Typography>
                    <Box py={1} />
                    <Typography color="mono.dark" variant="h5">{DAILY_CHANGE} ({(DAILY_CHANGE_RELATIVE * 100).toFixed(2)}%)</Typography>
                </Grid>
                {/* <Box pr={10} /> */}
                <Grid md={2} xs={6} pb={5}>
                    <Typography color="mono.500" variant='body1'>Top bid</Typography>
                    <Box py={1} />
                    <Typography color="mono.dark" variant="h5">{BID}</Typography>
                </Grid>
                {/* <Box pr={10} /> */}
                <Grid md={2} xs={6} pb={5}>
                    <Typography color="mono.500" variant='body1'>Top ask</Typography>
                    <Box py={1} />
                    <Typography color="mono.dark" variant="h5">{ASK}</Typography>
                </Grid>
                {/* <Box pr={10} /> */}
                <Grid md={2} xs={6} pb={5}>
                    <Typography color="mono.500" variant='body1'>Last price</Typography>
                    <Box py={1} />
                    <Typography color="mono.dark" variant="h5">{LAST_PRICE}</Typography>
                </Grid>
                {/* <Box pr={10} /> */}
                <Grid md={2} xs={6} pb={5}>
                    <Typography color="mono.500" variant='body1'>24hr range</Typography>
                    <Box py={1} />
                    <Typography color="mono.dark" variant="h5">{LOW} - {HIGH}</Typography>
                </Grid>
            </Grid>
            </Box>
        )
    }

    return (
        <>
            {loading ? (
                <TickerWsLoading />
            ) : (
                <>
                    <Box py={2} />
                    <Typography color="mono.500" variant="h5">MARKET STATS</Typography>
                    <Box py={2} />
                    <Box display="flex" alignItems="center">
                        <Typography color="mono.dark" variant='h1'> {PAIR} {lastPrice}</Typography>
                        <Box pr={4} />
                        <Typography color="primary" fontWeight={600} variant='body1'>{(percChange * 100).toFixed(2)}%</Typography>
                    </Box>
                    <Box py={5} />
                    {tickerBlock}
                </>
            )}

        </>
    )
}

export default TickerWs