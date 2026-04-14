import { AppBar, Toolbar, Box, IconButton, Button, Drawer, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
import logo1 from "../assets/logo1.png";
import React from "react";
import { useState } from "react";
import { MenuButton } from "../components/Botones";
import { useNavigate } from "react-router-dom";


interface InterfazProp{
    children: React.ReactNode;
}
function MainLayoutComponent(props:InterfazProp):React.JSX.Element{
    const [menuLateral, setMenuLateral] = useState<boolean>(false);
    function manejarMenu():void{
        setMenuLateral(true);
    }

    const navegar = useNavigate();
    function irVentas(){
        navegar("/main/ventas")
        setMenuLateral(false)
    }
    function irUsuario(){
        navegar("/main/usuarios")
        setMenuLateral(false)
    }
    function irAbastecimiento(){
        navegar("/main/abastecimiento")
        setMenuLateral(false)
    }
    function irClientes(){
        navegar("/main/clientes")
        setMenuLateral(false)
    }
    function irProveedores(){
        navegar("/main/proveedores")
        setMenuLateral(false)
    }
    function irProductos(){
        navegar("/main/productos")
        setMenuLateral(false)
    }
    function prueba():void{return }

    return (
        <Box sx={{flexGrow:1}}>
            <AppBar position="static"sx={{backgroundColor:'primary.main'}} >
                <Toolbar>
                    <IconButton 
                    size="large" 
                    edge="start"
                    aria-label="Menu" 
                    color="inherit"
                    sx={{mr:2}}
                    onClick={manejarMenu}>
                        <Menu></Menu>
                    </IconButton>
                    <Box sx={{flexGrow:1}}></Box>
                    <Button color="inherit">Usuario</Button>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={menuLateral} onClose={()=>setMenuLateral(false)}>
                <Box p={0} width="250px" textAlign="center" role="presentation" 
                sx={{
                    backgroundColor:'primary.main',
                    color:'primary.contrastText',
                    minHeight:'100vh'
                }}>
                    <Box
                    component='img'
                    src={logo1}
                    boxShadow={"none"}
                    sx={{
                        width:'100%',
                        maxWidth:'400px',
                        objectFit:'contain',
                        backgroundColor:'#DBD2D8',
                        p:1,
                        mb:2,
                    }}
                    />
                    <Typography variant="h6" component="div">
                        Menu
                    </Typography>
                    <MenuButton texto="Proveedores" alHacerClick={irProveedores}></MenuButton>
                    <MenuButton texto="Productos" alHacerClick={irProductos}></MenuButton>
                    <MenuButton texto="Clientes" alHacerClick={irClientes}></MenuButton>

                    <MenuButton texto="Ventas" alHacerClick={irVentas}></MenuButton>

                    <MenuButton texto="Usuario" alHacerClick={irUsuario}></MenuButton>
                                        <MenuButton texto="Abastecimiento" alHacerClick={irAbastecimiento}></MenuButton>
                </Box>
            </Drawer>
            <Box component="main" sx={{p:3, flexGrow:1, backgroundColor:'background.default'}}>
                {props.children}
            </Box>
        </Box>
    )
}
export{MainLayoutComponent}