import React, { useEffect } from 'react';
import Header from 'components/Header'
import { Box, Container, Divider, Typography, Button, Pagination } from '@mui/material'
import Card from 'components/Card';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import { fetchTradingPairs } from 'api/tradingPairs'

function Home() {
    async function _getTradingPairs() {
        try{
            const response = fetchTradingPairs('Tickers', 'symbols=ALL')
        }
        catch(e){
            console.log(e)
        }
    }

    // useEffect({
        _getTradingPairs()
    // })


    return (
        <>
            <Header />
            <Divider />
            <Container>
                <Box py={5} />
                <Typography color="mono.dark" variant='h1'>Buy Bitcoin & other Crypto</Typography>
                <Box pt={1} />
                <Typography color="mono.500" fontWeight={500} variant='subtitle1'>Invest & trade anytime, anywhere.</Typography>
                <Box py={5} />
                <Button color="secondary" sx={{ fontWeight: '700', padding: '16px 44px', fontSize: "20px" }} variant='contained' size="large" disableElevation>Get started</Button>
                <Box py={5} />
            </Container>
            <Box component="section" bgcolor="mono.50" pt={5} pb={20}>
                <Container>
                    <Typography color="mono.500" fontWeight={700} textAlign="center" component="h1" variant='h1'>All together at one place</Typography>
                    <Box py={5} />
                    {/* <Divider /> */}
                    <Box borderRadius={2} display="flex" bgcolor="white" px={4} justifyContent="space-between" py={3}>
                        <Box display="flex" alignItems="center">
                            <StarsRoundedIcon color="primary" />
                            <Box pr={2} />
                            <Typography fontWeight="700" variant='body1'>BTC/AED</Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Box display="flex" flexDirection="column" alignItems="flex-end">
                                <Typography fontWeight="700" variant='body2'>12,23000.00</Typography>
                                <Box pr={2} />
                                <Typography fontWeight="700" color="error" variant='body2'>+3.4%</Typography>
                            </Box>
                            <Box pr={10} />
                            <Button color="primary" sx={{ padding: '8px 20px' }} size="medium" variant='contained' disableElevation>Trade</Button>
                        </Box>
                    </Box>
                    <Box pt={1} />
                    {/* <Divider /> */}
                    <Box borderRadius={2} bgcolor="white" px={4} display="flex" justifyContent="space-between" py={3}>
                        <Box display="flex" alignItems="center">
                            <StarsRoundedIcon color="primary" />
                            <Box pr={2} />
                            <Typography fontWeight="700" variant='body1'>BTC/AED</Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Box display="flex" flexDirection="column" alignItems="flex-end">
                                <Typography fontWeight="700" variant='body2'>12,23000.00</Typography>
                                <Box pr={2} />
                                <Typography fontWeight="700" color="error" variant='body2'>+3.4%</Typography>
                            </Box>
                            <Box pr={10} />
                            <Button color="primary" sx={{ padding: '8px 20px' }} size="medium" variant='contained' disableElevation>Trade</Button>
                        </Box>
                    </Box>
                    <Box pt={1} />
                    <Box borderRadius={2} bgcolor="white" px={4} display="flex" justifyContent="space-between" py={3}>
                        <Box display="flex" alignItems="center">
                            <StarsRoundedIcon color="primary" />
                            <Box pr={2} />
                            <Typography fontWeight="700" variant='body1'>BTC/AED</Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Box display="flex" flexDirection="column" alignItems="flex-end">
                                <Typography fontWeight="700" variant='body2'>12,23000.00</Typography>
                                <Box pr={2} />
                                <Typography fontWeight="700" color="error" variant='body2'>+3.4%</Typography>
                            </Box>
                            <Box pr={10} />
                            <Button color="primary" sx={{ padding: '8px 20px' }} size="medium" variant='contained' disableElevation>Trade</Button>
                        </Box>
                    </Box>
                    <Box pt={1} />
                    <Box borderRadius={2} bgcolor="white" px={4} display="flex" justifyContent="space-between" py={3}>
                        <Box display="flex" alignItems="center">
                            <StarsRoundedIcon color="primary" />
                            <Box pr={2} />
                            <Typography fontWeight="700" variant='body1'>BTC/AED</Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Box display="flex" flexDirection="column" alignItems="flex-end">
                                <Typography fontWeight="700" variant='body2'>12,23000.00</Typography>
                                <Box pr={2} />
                                <Typography fontWeight="700" color="error" variant='body2'>+3.4%</Typography>
                            </Box>
                            <Box pr={10} />
                            <Button color="primary" sx={{ padding: '8px 20px' }} size="medium" variant='contained' disableElevation>Trade</Button>
                        </Box>
                    </Box>
                    {/* <Divider /> */}
                    <Box py={2} />
                    <Box display="flex" justifyContent="center" textAlign="center">
                        <Pagination count={100} size="large" />
                    </Box>
                </Container>
            </Box>

            {/* <Box display="flex" justifyContent="space-between" flexWrap="wrap">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Box> */}

        </>

    )
}

export default Home