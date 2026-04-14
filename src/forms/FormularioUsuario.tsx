import { Box, FormControl, InputLabel, LinearProgress, MenuItem, Select, Stack, TextField, Typography, type SelectChangeEvent } from "@mui/material"
import React, { useState } from "react"

function FormularioUsuario():React.ReactNode{
    const [password, setPassword] = useState("");
    const [age, setAge] = React.useState("");
    const {porcentaje, color, etiqueta} = obtenerFortalezaPassword(password);
    const handleChange = (event: SelectChangeEvent)=>{
        setAge(event.target.value as string)
    }
    function obtenerFortalezaPassword(password: string) {
        let fuerza = 0;
        
        if (password.length >= 8) fuerza++;
        if (/[A-Z]/.test(password)) fuerza++;
        if (/[a-z]/.test(password)) fuerza++;
        if (/[0-9]/.test(password)) fuerza++;
        if (/[^A-Za-z0-9]/.test(password)) fuerza++;

        const configuracion: Record<number, { color: "error" | "warning" | "info" | "success", texto: string }> = {
            0: { color: "error", texto: "Muy débil" },
            1: { color: "error", texto: "Débil" },
            2: { color: "warning", texto: "Regular" },
            3: { color: "info", texto: "Buena" },
            4: { color: "success", texto: "Fuerte" },
            5: { color: "success", texto: "Muy fuerte" },
        };

        const resultado = configuracion[fuerza];

        return {
            porcentaje: (fuerza / 5) * 100,
            color: resultado.color,
            etiqueta: resultado.texto
        };
    }

    function manejarCambio(evento: React.ChangeEvent<HTMLInputElement>) {
        setPassword(evento.target.value);
    }
    return(
        <Stack spacing={2} sx={{mt:1}}>
            
            <TextField label="Nombre" fullWidth/>
            <TextField label="Apellido" fullWidth/>
            <TextField label = "Carnet de Identidad" fullWidth/>
            <TextField label="Usuario" fullWidth/>
            <TextField 
            label="Contraseña" 
            fullWidth type="password"
            value={password}
            onChange={manejarCambio}/>
                {password.length > 0 && (
                <Box sx={{ mt: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2">Seguridad:</Typography>
                        <Typography variant="body2" color={`${color}.main`} sx={{ fontWeight: 'bold' }}>
                        {etiqueta}
                        </Typography>
                    </Box>
                    
                    <LinearProgress 
                        variant="determinate" 
                        value={porcentaje} 
                        color={color} 
                        sx={{ height: 10, borderRadius: 5 }}
                    />
                </Box>
                )}
            <Box sx={{minWidth:150}}>
                <FormControl fullWidth>
                    <InputLabel id="single-label">Rol</InputLabel>
                    <Select
                    labelId="single-label"
                    id="simple-label"
                    value={age}
                    label="Age"
                    onChange={handleChange}>
                        <MenuItem value={"admin"}>Administrador</MenuItem>
                        <MenuItem value={"barista"}>Barista</MenuItem>
                    </Select>
                </FormControl>

            </Box>
        </Stack>
    )
}

export{FormularioUsuario}