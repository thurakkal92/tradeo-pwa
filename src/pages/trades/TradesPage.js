import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import Header from 'components/Header';
import { Breadcrumbs, Link, Box, Container, Typography, Table, TableRow, TableContainer, TableHead, TableCell, TableBody, Paper, Tab } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import { WS_BASE_URL } from 'constants/api'
import { isEmpty, stringFormat } from 'utils/browserHelper';
import {getTickersData} from 'api/tradingPairs'
import {API_STATES } from 'constants/api'
import TradesTable from 'components/TradesTable';
import TickerWs from 'components/TickerWs';


function TradesPage() {
    let {symbol} = useParams()
    
    return (
        <>
            <Header />
            <Box py={5} />
            <Container>
                <Breadcrumbs separator={<NavigateNextIcon sx={{ fontSize: '20px' }} />}>
                    <Link color="mono.500" fontWeight={600} underline="hover" href="/" key={1}>Trades</Link>
                    <Link underline="hover" color="mono.500" fontWeight={600} href={`/trades/${symbol}`} key={2}>{stringFormat(symbol)}</Link>
                </Breadcrumbs>
                <Box py={5} />
                <Box display="flex" alignItems="center">
                    <Box display="flex" alignItems="center" justifyContent="center" height={44} width={44} borderRadius="50%" bgcolor="mono.lighter" >
                        <StarsRoundedIcon color="secondary" />
                    </Box>
                    <Box pr={3} />
                    <Typography color="primary" variant='h3'>{stringFormat(symbol)}</Typography>
                </Box>
                <Box py={2} />
                <Typography color="mono.500" variant="h5">MARKET STATS</Typography>
                <Box py={2} />
                <TickerWs symbol={symbol} />
                <Box py={4} />
                <Typography color="mono.500" variant="h5">MARKET TRADES</Typography>
                <Box py={2} />
                <TradesTable symbol={symbol} />
            </Container>


        </>
    )
}

export default TradesPage