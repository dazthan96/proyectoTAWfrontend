import { Box, IconButton, Stack, Tab, TableCell, TableRow} from "@mui/material";
import type React from "react";
import { useState } from "react";
import { CATEGORIAS, PRODUCTOS, type Producto } from "../data/DatoEjemplo";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { TablaBase } from "../components/TablasBase";
import { Delete } from "@mui/icons-material";
import { ListadoLayout } from "../layouts/ListadoLayout";
import { ModalRegistro } from "../components/Modales";
import { FormularioProducto } from "../forms/FormularioProductos";

function ProductosPage():React.ReactNode{
    const [categoriaActiva, setCategoriaActiva] = useState("1")
    const [productos, _setProductos] = useState<Producto[]>(PRODUCTOS)
    const [estaActivo, setEstaActivo] = useState(false)
    function elimnarProducto(id:number){
        console.log("eliminando producto", id)
    }
    return(
        <Stack>
        <ListadoLayout
        titulo="Inventario de Productos"
        botonTexto="Nuevo producto"
        onBotonClick={function(){setEstaActivo(true)}}>
            <TabContext value={categoriaActiva}>
            <Box sx={{borderBottom:1, borderColor:'divider'}}>
                <TabList onChange={function(_, nv) {setCategoriaActiva(nv)}}>
                    {CATEGORIAS.map(function(cat){
                        return(
                            <Tab 
                            key={cat.id_categoria}
                            label={cat.nombre}
                            value = {cat.id_categoria.toString()}/>
                        );
                    })}

                </TabList>
            </Box>
            {CATEGORIAS.map(function(cat){
                return(
                    <TabPanel key={cat.id_categoria} value={cat.id_categoria.toString()}>
                        <TablaBase cabeceras={["Nombre","Precio Venta", "Stock", "Minimo","Opciones"]}>
                            {productos.filter(function(p){
                                return p.id_categoria ===cat.id_categoria
                            }).map(function(p){
                                return(
                                    <TableRow key={p.id_producto}>
                                        <TableCell>{p.nombre}</TableCell>
                                        <TableCell>{p.precio_venta}</TableCell>
                                        <TableCell>{p.stock_actual}</TableCell>
                                        <TableCell>{p.stock_minimo}</TableCell>
                                        <TableCell align="center">
                                            <IconButton color="error" onClick={function(){elimnarProducto(p.id_producto)}}>
                                                <Delete/>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TablaBase>

                    </TabPanel>
                )
            })}           
        </TabContext>
        </ListadoLayout>
        <ModalRegistro
        titulo="Agregar Producto"
        abierto={estaActivo}
        alCerrar={function(){setEstaActivo(false)}}
        alGuardar={function(){console.log("Guardar Producto")}}>
            <FormularioProducto categorias={CATEGORIAS}/>
        </ModalRegistro>
    </Stack>
    )
}
export{ProductosPage}