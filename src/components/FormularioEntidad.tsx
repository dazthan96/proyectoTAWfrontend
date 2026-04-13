import React from 'react';
import { Stack, TextField } from '@mui/material';

interface Props {
  esVenta: boolean; // Si es true, muestra campos de Cliente. Si es false, de Proveedor.
}

function FormularioEntidad(props: Props):React.ReactNode {
  if (props.esVenta) {
    return (
      <Stack spacing={2}>
        <TextField label="Carnet del Cliente" size="small" fullWidth placeholder="6543210LP" />
        <TextField label="Nombre y Apellidos" size="small" fullWidth />
      </Stack>
    );
  } else {
    return (
      <Stack spacing={2}>
        <TextField label="NIT del Proveedor" size="small" fullWidth placeholder="102030..." />
        <TextField label="Nombre de la Empresa" size="small" fullWidth />
      </Stack>
    );
  }
}
export{FormularioEntidad}
