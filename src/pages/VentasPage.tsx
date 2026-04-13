
import React, { useState } from 'react';
import { Grid, Stack, Tab } from '@mui/material';
import { TabList, TabPanel } from '@mui/lab';
import { TransaccionLayoutComponent } from '../layouts/TransaccionesLayout';
import { TarjetaProducto } from '../components/ProdCard';
import { FormularioEntidad } from '../components/FormularioEntidad';
import { ItemDetalleVenta } from '../components/ItemDetalleVenta';
import { BotonAccion } from '../components/Botones';
import { CATEGORIAS, PRODUCTOS, type Producto } from '../data/DatoEjemplo';
import { ModalRegistro } from '../components/Modales';
import { FormularioCliente } from '../forms/FormularioClientes';

function VentasPage() {
  const [categoriaActiva, setCategoriaActiva] = useState("1");
  const [carrito, setCarrito] = useState<any[]>([]);
  const [estaActivo, setEstaActivo] = useState(false);
  function prueba():void{return }

  function cambiarTab(_event: React.SyntheticEvent, nuevoValor: string) {
    setCategoriaActiva(nuevoValor);
  }

  function agregarAlCarrito(producto: Producto) {
    const itemExistente = carrito.find(function(item) {
      return item.id_producto === producto.id_producto;
    });

    const cantidadFutura = itemExistente ? itemExistente.cantidad +1 :1;
    if(cantidadFutura>producto.stock_actual){
      console.warn("limite alcanzado");
      return;
    } 
    if (itemExistente) {
      const nuevoCarrito = carrito.map(function(item){
        if (item.id_producto === producto.id_producto ) {
          return {...item, cantidad:item.cantidad +1};
        }
        return item;
      });
      setCarrito(nuevoCarrito);      
    }else{
      const nuevoItem = {
        id_producto: producto.id_producto,
        nombre:producto.nombre,
        precio_venta: producto.precio_venta,
        cantidad:1
      };
      setCarrito(carrito.concat(nuevoItem))
    }
  }

  function eliminarDelCarrito(id: number) {
    const filtrado = carrito.filter(function(item) {
      return item.id_producto !== id;
    });
    setCarrito(filtrado);
  }

  function calcularTotal() {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
      total = total + (carrito[i].precio_venta * carrito[i].cantidad);
    }
    return total.toFixed(2);
  }

  return (
    <Stack>
    <TransaccionLayoutComponent
      titulo="Punto de Venta"
      tabValue={categoriaActiva}

      // ESPACIO PARA DATOS DEL CLIENTE
      seccionEntidad={
        <FormularioEntidad esVenta={true} />
      }

      // ESPACIO PARA EL LISTADO DE LA VENTA
      seccionCarrito={
        carrito.map(function(item) {
          return (
            <ItemDetalleVenta 
              key={item.id_producto}
              nombre={item.nombre}
              cantidad={item.cantidad}
              subtotal={item.precio_venta * item.cantidad}
              alEliminar={function() { eliminarDelCarrito(item.id_producto); }}
            />
          );
        })
      }

      // BOTONES DE CATEGORÍAS
      seccionTabs={
        <TabList onChange={cambiarTab} variant='scrollable' scrollButtons='auto' aria-label='Categoria de Productos'>
          {CATEGORIAS.map(function(cat) {
            return (
              <Tab 
                key={cat.id_categoria} 
                label={cat.nombre} 
                value={cat.id_categoria.toString()} 
              />
            );
          })}
        </TabList>
      }

      // CATÁLOGO DE PRODUCTOS (Filtrado por categoría)
      seccionCatalogo={
        CATEGORIAS.map(function(cat) {
          return (
            <TabPanel key={cat.id_categoria} value={cat.id_categoria.toString()}>
              <Grid container spacing={2}>
                {PRODUCTOS.filter(function(p) {
                  return p.id_categoria === cat.id_categoria;
                }).map(function(producto) {
                  return (
                    <Grid size={{xs:12 , md:6}} key={producto.id_producto}>
                      <TarjetaProducto 
                        producto={producto} 
                        textoBoton="Añadir"
                        alPresionar={agregarAlCarrito}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </TabPanel>
          );
        })
      }

      // BOTÓN FINAL DE PAGO
      seccionAccion={
        <Stack direction="column" spacing={2}>
          <BotonAccion 
          texto={`PAGAR TOTAL: $${calcularTotal()}`}
          color="success"
          alHacerClick={prueba}/>
          <BotonAccion
          texto='Agregar cliente'
          color='secondary'
          alHacerClick={function(){setEstaActivo(true)}}/>
        </Stack>
      }>

    </TransaccionLayoutComponent>
    <ModalRegistro
    abierto={estaActivo}
    alCerrar={function(){setEstaActivo(false)}}
    titulo='Nuevo Cliente'
    alGuardar={function(){console.log("Guardar Cliente")}}>
      <FormularioCliente/>
    </ModalRegistro>
    </Stack>
  );
}
export{VentasPage}