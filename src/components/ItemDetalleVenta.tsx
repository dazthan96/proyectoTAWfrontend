import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
  nombre: string;
  cantidad: number;
  subtotal: number;
  alEliminar: () => void;
}

function ItemDetalleVenta(props: Props):React.ReactNode {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
      <Box>
        <Typography variant="body2" fontWeight="bold">{props.nombre}</Typography>
        <Typography variant="caption" color="textSecondary">
          Cantidad: {props.cantidad}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="body2" sx={{ mr: 1 }}>
          ${props.subtotal.toFixed(2)}
        </Typography>
        <IconButton size="small" color="error" onClick={props.alEliminar}>
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Box>
    </Box>
  );
}

export{ItemDetalleVenta}