import { TabContext } from "@mui/lab";
import { Grid, Paper, Typography, Box, Divider } from "@mui/material";
import type React from "react";
interface TransaccionesProps{
    titulo:string;
    tabValue:string;
    seccionEntidad: React.ReactNode;
    seccionCarrito: React.ReactNode;
    seccionTabs: React.ReactNode;
    seccionCatalogo: React.ReactNode;
    seccionAccion: React.ReactNode
}

function TransaccionLayoutComponent(props: TransaccionesProps){
    return(
        <TabContext value={props.tabValue}>
            <Grid container spacing={2} sx={{maxHeight:'100vh'}}>
                <Grid size={{xs:12,md:7}} order={{xs:1, md:2}} sx={{height:'85vh'}}>
                    <Paper elevation={3} sx={{p:2, height:'100%', display:'flex', flexDirection:'column'}}>
                        <Typography variant="h5" color="secondary" fontWeight='bold' gutterBottom>
                            {props.titulo}
                        </Typography>
                        <Box sx={{borderBottom:1, borderColor:'divider'}}>
                            {props.seccionTabs}
                        </Box>
                        <Box sx={{flexGrow:1, overflowY:'auto'}}>
                            {props.seccionCatalogo}
                        </Box>
                    </Paper>
                </Grid>
                <Grid size={{xs:12,md:5}} order={{xs:2, md:1}} sx={{height:'85vh'}}>
                    <Paper elevation={3} sx={{p:2, height:'100%', display:'flex', flexDirection:'column', bgcolor:'#eee'  }}>
                        <Typography variant="h6" color='primary'>Información General</Typography>
                        <Box sx={{mt:1, mb:2}}>
                            {props.seccionEntidad}
                        </Box>
                        <Divider sx={{mb:2}}/>
                        <Typography variant="h6">Detalle del Pedido</Typography>
                        <Box sx={{flexGrow:1, overflowY:'auto', mb:2}}>
                            {props.seccionCarrito}
                        </Box>
                        <Box sx={{p:2, borderTop:'2px solid #eee'}}>
                            {props.seccionAccion}
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </TabContext>
    )
}
export{TransaccionLayoutComponent}