import React from 'react';
import { Card, CardContent, Typography, Button, Box, Chip } from '@mui/material';
import { type Producto } from '../data/DatoEjemplo'; // Importa tu interfaz

interface Props {
  producto: Producto;
  textoBoton: string;
  alPresionar: (p: Producto) => void;
  esVenta?: boolean
}

function TarjetaProducto(props: Props):React.ReactNode {
  const {producto, textoBoton, alPresionar, esVenta=true} = props;
  const hayPocoStock = producto.stock_actual <= producto.stock_minimo;
  const estaDeshabilitado = esVenta && producto.stock_actual<=0;
  return (
    <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" fontWeight="bold">
          {producto.nombre}
        </Typography>
        
        <Box sx={{ my: 1 }}>
          <Chip 
            label={`Stock: ${producto.stock_actual}`} 
            color={hayPocoStock ? "error" : "default"} 
            size="small" 
          />
        </Box>

        <Typography variant="h6" color="primary">
          ${producto.precio_venta.toFixed(2)}
        </Typography>

        <Button 
          variant="outlined" 
          fullWidth 
          sx={{ mt: 2 }}
          disabled={estaDeshabilitado}
          onClick={function() { alPresionar(props.producto); }}
        >
          {textoBoton}
        </Button>
      </CardContent>
    </Card>
  );
}
export{TarjetaProducto}