import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import Header from 'components/Header';
import { Breadcrumbs, Link, Box, Container, Typography, Table, TableRow, TableContainer, TableHead, TableCell, TableBody, Paper, Tab, Button } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import { isEmpty, stringFormat, replaceQueryInUrl } from 'utils/browserHelper';
import { fetchTradingPairs } from 'api/tradingPairs'
import { API_STATES } from 'constants/api'
import TradesTable from 'components/TradesTable';
import TickerWs from 'components/TickerWs';
import {SymbolContext, TickersContext} from 'context/trades'


function TradesPage() {
    let { symbol } = useParams()
    let history = useNavigate()
    const [results, setResults] = useState(TickersContext)
    const [symbolContext, setSymbolContext] = useContext(SymbolContext)
    const [loading, setLoading] = useState(false)
    const [tickerIndex, setTickerIndex] = useState()

    async function _getTradingPairs() {
        try {
            const response = await fetchTradingPairs('Tickers', 'symbols=ALL')
            if (!isEmpty(response)) {
                const { status, data } = response || {}
                if (status === 200 && !isEmpty(data)) {
                    let newMap = new Map()
                    for(let i=0; i< data.length-1;i++) {
                        let arr  = data[i]
                        if(arr[0] === symbol) {
                            setTickerIndex(i)
                        }
                        newMap.set(i, arr[0])
                    }
                    setResults(newMap)
                }
            }
            setLoading(false)
        }
        catch (e) {
            setLoading(false)
            console.log(e)
        }
    }

    function handlePrevious(params) {
        setTickerIndex(tickerIndex - 1)
        let prevSymbol = results.get(tickerIndex)
        replaceQueryInUrl(history, prevSymbol)
    }
    function handleNext(params) {
        setTickerIndex(tickerIndex + 1)
        let nextSymbol = results.get(tickerIndex)
        replaceQueryInUrl(history, nextSymbol)
    }

    useEffect(()=> {
        setLoading(true)
        _getTradingPairs()
    }, [])

    return (
        <>
            <Header />
            <Box bgcolor="mono.50" minHeight="calc(100vh - 56px)">
                <Box py={5} />
                <Container>
                    <Box bgcolor="white" borderRadius="4px" px={4} py={2}>
                        <Breadcrumbs separator={<NavigateNextIcon sx={{ fontSize: '20px' }} />}>
                            <Link color="mono.500" fontWeight={600} underline="hover" href="/" key={1}>Trades</Link>
                            <Link underline="hover" color="mono.500" fontWeight={600} href={`/trades/${symbol}`} key={2}>{stringFormat(symbol)}</Link>
                        </Breadcrumbs>
                    </Box>
                    <Box pt={2} />
                    <Box bgcolor="white" borderRadius="4px" padding={4}>
                        <Box py={2} />
                        <Box display="flex" alignItems="center" justifyContent="space-between">
                            <Box display="flex" alignItems="center">
                                <Box display="flex" alignItems="center" justifyContent="center" height={44} width={44} borderRadius="50%" bgcolor="mono.lighter" >
                                    <StarsRoundedIcon color="secondary" />
                                </Box>
                                <Box pr={3} />
                                <Typography color="primary" variant='h3'>{stringFormat(symbol)}</Typography>
                            </Box>
                            <Box display="flex">
                                 <Button size="large" onClick={handlePrevious} disabled={loading || tickerIndex===0} disableElevation variant='contained' color="primary">PREV</Button>
                                 <Box pr={3} />
                                 <Button size="large" onClick={handleNext} disabled={loading} disableElevation variant='contained' color="error">NEXT</Button>
                            </Box>
                        </Box>

                        <Box py={2} />
                    </Box>
                    <Box pt={2} />
                    <Box bgcolor="white" borderRadius="4px" px={4} py={2}>
                        <Box py={4} />
                        <TickerWs symbol={symbol} />
                        <Box py={4} />
                        <Typography color="mono.500" variant="h5">MARKET TRADES</Typography>
                        <Box py={2} />
                        <TradesTable symbol={symbol} />
                        <Box py={4} />
                    </Box>
                </Container>
            </Box>

        </>
    )
}

export default TradesPage