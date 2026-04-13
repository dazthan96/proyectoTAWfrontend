import { Stack, TextField } from "@mui/material";
import type React from "react";

function FormularioProveedor():React.ReactNode{
    return(
        <Stack spacing={2} sx={{mt:1}}>
            <TextField label="NIT" fullWidth placeholder="10203501546"/>
            <TextField label="Empresa" fullWidth placeholder="Empresa de lacteos"/>
            <TextField label="Contacto" fullWidth placeholder="Carlos Ramirez"/>
            <Stack direction="row" spacing={2}>
                <TextField label="Telefono" fullWidth />
                <TextField label="Correo" fullWidth type="email" />
            </Stack>
        </Stack>
    )
}
export{FormularioProveedor}