import { Container, Paper, Typography, Box, Button, Divider} from "@mui/material";
import { Add } from "@mui/icons-material";
import type React from "react";

interface ListadoLayoutProps{
    titulo:string;
    botonTexto: string;
    onBotonClick: ()=>void;
    children: React.ReactNode
}

function ListadoLayout(props: ListadoLayoutProps):React.ReactNode{
    return(
        <Container maxWidth="lg" sx={{mt:4, mb:4}}>
            <Paper elevation={3} sx={{p:3, display:"flex", flexDirection:"column"}}>
                <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', mb:3}}>
                    <Typography variant="h4" color="primary" fontWeight="bold">
                        {props.titulo}
                    </Typography>
                    <Button variant="contained" startIcon={<Add/>} onClick={props.onBotonClick}>
                        {props.botonTexto}
                    </Button>
                </Box>
                <Divider sx={{mb:2}}/>
                {props.children}
            </Paper>

        </Container>
    )
}

export{ListadoLayout}