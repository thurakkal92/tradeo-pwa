import React, { useEffect, useState } from 'react';
import Header from 'components/Header'
import { Box, Container, Divider, Typography, Button, Pagination } from '@mui/material'
import TickersList from 'components/TickersList';

function Home() {
    return (
        <>
            <Header />
            <Container>
                <Box py={5} />
                <Typography textAlign={{xs: 'center', sm: 'center', md: 'left'}} color="mono.dark" variant='h1'>Buy Bitcoin & other Crypto</Typography>
                <Box pt={1} />
                <Typography textAlign={{xs: 'center', sm: 'center', md: 'left'}} color="mono.500" fontWeight={500} variant='subtitle1'>Invest & trade anytime, anywhere.</Typography>
                <Box py={5} />
                <Box textAlign={{xs: 'center', sm: 'center', md: 'left'}}>
                    <Button color="secondary" sx={{ fontWeight: '700', padding: '16px 44px', fontSize: "20px" }} variant='contained' size="large" disableElevation>Get started</Button>
                </Box>
                <Box py={5} />
            </Container>
            <Box component="section" bgcolor="mono.50" pt={5} pb={20}>
                <Container>
                    <Typography color="mono.500" fontWeight={700} textAlign="center" component="h1" variant='h1'>All together at one place</Typography>
                    <Box py={5} />
                    <TickersList />
                    <Box py={2} />
                    {/* <Box display="flex" justifyContent="center" textAlign="center">
                        <Pagination count={100} size="large" />
                    </Box> */}
                </Container>
            </Box>
        </>

    )
}

export default Home