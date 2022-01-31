import React from 'react';
import {Typography, Box, Table, TableHead, TableBody, TableCell, TableRow, TableContainer} from '@mui/material'
import Stencil from 'components/Stencil';

function TradesLoading(){
    return(
        <TableContainer sx={{maxWidth: '800px'}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Stencil height={14} width={80} />
                        </TableCell>
                        <TableCell>
                            <Stencil height={14} width={80} />
                        </TableCell>
                        <TableCell>
                            <Stencil height={14} width={80} />
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Stencil height={14} width={100} />
                        </TableCell>
                        <TableCell>
                            <Stencil height={14} width={111} />
                        </TableCell>
                        <TableCell>
                            <Stencil height={14} width={123} />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Stencil height={14} width={100} />
                        </TableCell>
                        <TableCell>
                            <Stencil height={14} width={111} />
                        </TableCell>
                        <TableCell>
                            <Stencil height={14} width={123} />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Stencil height={14} width={100} />
                        </TableCell>
                        <TableCell>
                            <Stencil height={14} width={111} />
                        </TableCell>
                        <TableCell>
                            <Stencil height={14} width={123} />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Stencil height={14} width={100} />
                        </TableCell>
                        <TableCell>
                            <Stencil height={14} width={111} />
                        </TableCell>
                        <TableCell>
                            <Stencil height={14} width={123} />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TradesLoading