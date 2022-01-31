import React, { useState, useEffect } from 'react';
import { Typography, Box, Table, TableHead, TableBody, TableCell, TableRow, TableContainer } from '@mui/material'
import { WS_BASE_URL } from 'constants/api'
import { isEmpty, formatTime, stringFormat } from 'utils/browserHelper'
import TradesLoading from './Loading';
import { ParaglidingOutlined } from '@mui/icons-material';


function TradesTable({ symbol }) {
    const [ trades, setTrades ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const SPLIT_ARR = stringFormat(symbol).split('/')
    let COIN = SPLIT_ARR[0]
    let PAIR = SPLIT_ARR[1]
    const ws = new WebSocket(WS_BASE_URL); //TODO: Write reusable custom hook
    let msgTrades = JSON.stringify({
        event: 'subscribe',
        channel: 'trades',
        symbol: symbol
    })
    ws.onopen = (event) => {
        ws.send(msgTrades);
    };

    useEffect(() => {
        ws.onmessage = function (event) {
            const json = JSON.parse(event.data);
            try {
                // if (json.event = "subscribed") {
                if (!isEmpty(json) && Array.isArray(json)) {
                    const length = json.length
                    let lastArr = json[ length - 1 ]
                    setLoading(false)
                    if (Array.isArray(lastArr) && lastArr.length > 4)
                        setTrades([ ...lastArr ]);
                    else if (Array.isArray(lastArr) && lastArr.length <= 4) {
                        setTrades((prevState) => (
                            [ lastArr, ...prevState ]
                        ));
                    } else { }
                }

                // }

            } catch (err) {
                console.log(err, 'error');
                setLoading(false)
            }
        };
        return () => {
            setLoading(false)
            ws.close()
        }
    }, [])

    let tradesBlock = ''
    if (!isEmpty(trades)) {
        let finalTrades = trades.slice(0, 5)
        tradesBlock = finalTrades.map((row, idx) => {
            const [ ID, MTS, AMOUNT, PRICE ] = row
            const timeStamp = new Date(MTS).toISOString()

            return (
                <TableRow key={idx}>
                    <TableCell>
                        <Typography variant='body1' color="inherit">{AMOUNT}</Typography>
                    </TableCell>
                    <TableCell color="inherit">
                        <Typography variant='body1' color="inherit">{PRICE}</Typography>
                    </TableCell>
                    <TableCell color="inherit">
                        <Typography variant='body1' color="inherit">{formatTime(timeStamp)}</Typography>
                    </TableCell>
                </TableRow>
            )

        })
    }
    return (
        <>
            {loading ? (
                <TradesLoading />
            ) : (
                <>
                    <TableContainer sx={{ maxWidth: '800px', maxHeight: 320, overflowY: 'auto' }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant='body1' fontWeight={700} color="mono.900">Amount ({COIN})</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant='body1' fontWeight={700} color="mono.900">Price ({PAIR})</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant='body1' fontWeight={700} color="mono.900">Time</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tradesBlock}
                            </TableBody>

                        </Table>
                    </TableContainer>
                </>
            )}
        </>
    )
}

export default TradesTable