import React from 'react';
import { Box, Typography, Container, Divider } from '@mui/material'
import BalanceTwoToneIcon from '@mui/icons-material/BalanceTwoTone';

function Header() {
    return (
        <>
        <Container>
            <Box display="flex" justifyContent="space-between" component="header" py={3}>
                <Box display="flex" alignItems="center" >
                    <BalanceTwoToneIcon sx={{ fontSize: '24px' }} color="primary" />
                    <Box pr={2} />
                    <Typography fontWeight={800} color="primary" variant='h3'>Tradeo</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <Typography fontWeight={800} color="mono.700" variant='body1'>Trading</Typography>
                    <Box px={5} />
                    <Typography fontWeight={800} color="mono.700" variant='body1'>Prices</Typography>
                    <Box px={5} />
                    <Typography fontWeight={800} color="mono.700" variant='body1'>Login</Typography>
                </Box>
            </Box>
        </Container>
        <Divider />
        </>
        
    )
}

export default Header