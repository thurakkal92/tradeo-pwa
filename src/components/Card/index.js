import React from 'react';
import {Paper, Typography, Box} from '@mui/material'

function Card(props) {
    return (
        <Paper sx={{ cursor: 'pointer', flexBasis: 'calc(50% - 12px)', borderRadius: '8px', padding:'12px', marginBottom: '16px'}} variant='outlined'>
            <Typography color="mono.dark" fontWeight="700" variant='body1' textTransform="uppercase">BTC/AED</Typography>
            <Box pt={5} />
            <Box display="flex" justifyContent="space-between">
                <Typography variant='body2' fontWeight="700" color="primary">127,720.00</Typography>
                <Typography variant='body2' fontWeight="700" color="error">-3.4%</Typography>
            </Box>
        </Paper>
    )
}

export default Card