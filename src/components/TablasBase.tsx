import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import type React from "react";

interface TablaBaseProps{
    cabeceras: string[];
    children: React.ReactNode
}

function TablaBase(props: TablaBaseProps):React.ReactNode{
    return(
        <TableContainer>
            <Table sx={{minWidth:650}}> 
                <TableHead sx={{bgcolor:'#f5f5f5'}}>
                    <TableRow>
                        {props.cabeceras.map(function(cab){
                            return <TableCell key={cab} sx={{fontWeight: 'bold'}}>{cab}</TableCell> 
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.children}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export{TablaBase}