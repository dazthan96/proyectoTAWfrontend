import { MenuItem, Stack, TextField } from "@mui/material";
import type React from "react";

interface PropsProd{
    categorias: {id_categoria:number; nombre:string}[];
}
function FormularioProducto(props:PropsProd):React.ReactNode{
    return (
        <Stack spacing={2} sx={{mt:1}}>
            <TextField label="Nombre del Producto" fullWidth/>
            <TextField select label="Categoria" fullWidth defaultValue="">
                {props.categorias.map(function(cat){
                    return(
                        <MenuItem key={cat.id_categoria} value={cat.id_categoria}>
                            {cat.nombre}
                        </MenuItem>
                    )
                })}
            </TextField>
            <Stack direction="row" spacing={2}>
                    <TextField label="Precio Venta" type="number" fullWidth />
                    <TextField label="Stocl Minimo" type="number" fullWidth />
            </Stack>
            <TextField label="Descripcion" multiline rows={2} fullWidth />
        </Stack>
    )
}

export{FormularioProducto}