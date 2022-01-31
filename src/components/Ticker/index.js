import React from 'react';
import { Box, Typography, Button, Link } from '@mui/material'
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import {stringFormat} from 'utils/browserHelper'

function Ticker(props) {
    const { symbol, dailyChange, lastPrice } = props
    return (
        <Link href={`/trade/${symbol}`} underline="none">
            <Box borderRadius={2} display="flex" bgcolor="white" px={4} justifyContent="space-between" py={3}>
                <Box display="flex" alignItems="center">
                    <StarsRoundedIcon color="primary" />
                    <Box pr={2} />
                    <Typography fontWeight="700" variant='body1'>{stringFormat(symbol)}</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <Box display="flex" flexDirection="column" alignItems="flex-end">
                        <Typography fontWeight="700" variant='body2'>{lastPrice}</Typography>
                        <Box pr={2} />
                        <Typography fontWeight="700" color={dailyChange < 0 ? "error" : "primary"} variant='body2'>
                            <Typography sx={{verticalAlign: 'text-top'}} component="span">
                                {dailyChange < 0 ? <ArrowDownward fontSize='inherit' color="inherit" /> : <ArrowUpward fontSize='inherit' color="inherit" />}
                            </Typography>
                            {dailyChange.toFixed(2)}%
                        </Typography>
                    </Box>
                    <Box pr={10} />
                    <Button href={`/trade/${symbol}`} color="primary" sx={{ padding: '8px 20px' }} size="medium" variant='contained' disableElevation>Trade</Button>
                </Box>
            </Box>
        </Link>
    )
}

export default Ticker