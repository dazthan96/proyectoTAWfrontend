import { AppBar, Toolbar, Box, IconButton, Button, Drawer, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
import React from "react";
import { useState } from "react";


interface InterfazProp{
    children: React.ReactNode;
}
function InterfazUI(props:InterfazProp):React.JSX.Element{
    const [menuLateral, setMenuLateral] = useState<boolean>(false);
    function manejarMenu():void{
        setMenuLateral(true);
    }

    return (
        <Box sx={{flexGrow:1}}>
            <AppBar position="static" >
                <Toolbar>
                    <IconButton 
                    size="large" 
                    edge="start" 
                    color="inherit" 
                    aria-label="Menu" 
                    sx={{mr:2}}
                    onClick={manejarMenu}>
                        <Menu></Menu>
                    </IconButton>
                    <Box sx={{flexGrow:1}}></Box>
                    <Button color="inherit">Usuario</Button>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={menuLateral} onClose={()=>setMenuLateral(false)}>
                <Box p={2} width="250px" textAlign="center" role="presentation">
                    <Typography variant="h6" component="div">
                        Side Panel
                    </Typography>
                </Box>
            </Drawer>
            <Box component="main" sx={{p:3, flexGrow:1}}>
                {props.children}
            </Box>
        </Box>
    )
}
export{InterfazUI}