import { Stack, TextField } from "@mui/material"

function FormularioCliente():React.ReactNode{
    return (
        <Stack spacing={2} sx={{mt:1}}>
            <TextField label="Carnet" fullWidth placeholder="123456" />
            <Stack direction="row" spacing={2}>
                <TextField label="Nombre" fullWidth />
                <TextField label="Apellido Paterno" fullWidth />
            </Stack>
            <TextField label="Apellido Materno" fullWidth />
            <TextField label="Telefono" fullWidth />
            <TextField label="Correo Electronico" fullWidth type="email" />

        </Stack>
    )
}
export{FormularioCliente}