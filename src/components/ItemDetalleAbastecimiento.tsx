import type React from "react";
import { Typography, Box, Stack, TextField, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
interface ItemAbastecimiento{
    id_producto: number;
    nombre:string;
    cantidad_entrada: number;
    costo_unitario: number
}

interface Props{
    item: ItemAbastecimiento;
    alActualizar: (id:number, cambios:any) => void;
    alEliminar:(id:number)=>void
}

function ItemDetalleAbastecimiento(props: Props):React.ReactNode{
    return(
        <Box sx={{ mb: 2, p: 1, borderBottom: '1px solid #ccc' }}>
      <Typography variant="body2" fontWeight="bold">
        {props.item.nombre}
      </Typography>
      
      <Stack direction="row" spacing={1} mt={1}>
        <TextField 
          label="Cant." 
          type="number" 
          size="small" 
          value={props.item.cantidad_entrada}
          onChange={function(e) { 
            props.alActualizar(props.item.id_producto, { cantidad_entrada: Number(e.target.value) }); 
          }}
        />
        <TextField 
          label="Costo" 
          type="number" 
          size="small" 
          value={props.item.costo_unitario}
          onChange={function(e) { 
            props.alActualizar(props.item.id_producto, { costo_unitario: Number(e.target.value) }); 
          }}
        />
        <IconButton color="error" onClick={function() { props.alEliminar(props.item.id_producto); }}>
          <DeleteIcon />
        </IconButton>
      </Stack>

      <Typography variant="caption" display="block" textAlign="right" mt={0.5}>
        Subtotal: ${(props.item.cantidad_entrada * props.item.costo_unitario).toFixed(2)}
      </Typography>
    </Box>
    )
}
export{ItemDetalleAbastecimiento, type ItemAbastecimiento}