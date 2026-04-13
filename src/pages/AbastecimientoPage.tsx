import { useState } from "react"
import { ItemDetalleAbastecimiento, type ItemAbastecimiento } from "../components/ItemDetalleAbastecimiento";
import { PRODUCTOS, type Producto } from "../data/DatoEjemplo";
import { TransaccionLayoutComponent } from "../layouts/TransaccionesLayout";
import { FormularioEntidad } from "../components/FormularioEntidad";
import { Grid , Stack, Tab} from "@mui/material";
import { TarjetaProducto } from "../components/ProdCard";
import { BotonAccion } from "../components/Botones";
import { TabList, TabPanel } from "@mui/lab";
import { CATEGORIAS } from "../data/DatoEjemplo";
import { ModalRegistro } from "../components/Modales";
import { FormularioProveedor } from "../forms/FormularioProveedor";
function AbastecimientoPage():React.ReactNode {
    const [_idProveedor, _setIdProveedor] = useState("");
    const [carrito, setCarrito] = useState<ItemAbastecimiento[]>([]);
    const [categoriaActiva, setCategoriaActiva] = useState("1");
    const [estaAbierto, setEstaAbierto] = useState(false)
    function cambiarTab(_event: React.SyntheticEvent, nuevoValor: string) {
        setCategoriaActiva(nuevoValor);
    }
    function agregarAlAbastecimiento(producto: Producto) {
        const indice = carrito.findIndex(function(item) {
        return item.id_producto === producto.id_producto;
        });

        if (indice !== -1) {
      // Si ya existe, usamos la función de actualizar que ya tenemos
        actualizarItem(producto.id_producto, { 
            cantidad_entrada: carrito[indice].cantidad_entrada + 1 
        });
        } else {
        // Si es nuevo, lo creamos con costo 0 para obligar al usuario a editarlo
            const nuevoItem: ItemAbastecimiento = {
            id_producto: producto.id_producto,
            nombre: producto.nombre,
            cantidad_entrada: 1,
            costo_unitario: 0
        };
        setCarrito(carrito.concat(nuevoItem));
        }
    }

  // 3. FUNCIÓN CLAVE: Recibe los cambios desde el TextField del ItemDetalleAbastecimiento
  function actualizarItem(id: number, cambios: any) {
    const nuevoCarrito = carrito.map(function(item) {
      if (item.id_producto === id) {
        // Retorna el item mezclando sus datos actuales con los nuevos (cantidad o costo)
        return { ...item, ...cambios };
      }
      return item;
    });
    setCarrito(nuevoCarrito);
  }

  function eliminarDelCarrito(id: number) {
    const filtrado = carrito.filter(function(item) {
      return item.id_producto !== id;
    });
    setCarrito(filtrado);
  }

  function calcularTotalInversion() {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
      total = total + (carrito[i].cantidad_entrada * carrito[i].costo_unitario);
    }
    return total.toFixed(2);
  }
  return (
    <Stack>
    <TransaccionLayoutComponent
        titulo="Registro de abastecimiento"
        tabValue={categoriaActiva}
        seccionEntidad={<FormularioEntidad esVenta={false}/>}

        seccionCarrito={
            carrito.map(function(item){
                return (
                    <ItemDetalleAbastecimiento
                        key={item.id_producto}
                        item={item}
                        alActualizar={actualizarItem}
                        alEliminar={eliminarDelCarrito}
                    />
                )
            })
        }
        seccionCatalogo={
            CATEGORIAS.map(function(cat){
                return (
                    <TabPanel key = {cat.id_categoria} value = {cat.id_categoria.toString()}>
                        <Grid container spacing={2}>
                            {PRODUCTOS.filter(function(p){
                                return p.id_categoria === cat.id_categoria;
                            }).map(function(producto){
                                return(
                                    <Grid size={{xs:12, md:6}} key={producto.id_producto}>
                                        <TarjetaProducto
                                            producto={producto}
                                            textoBoton="Añadir"
                                            alPresionar={agregarAlAbastecimiento}
                                        />
                                    </Grid>
                                )
                            })}

                        </Grid>

                    </TabPanel>
                )
            })
        }
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
        seccionAccion={
            <Stack direction="column" spacing={2}>
                <BotonAccion texto={`REGISTRAR ENTRADA: $${calcularTotalInversion()}`} color="primary"
                alHacerClick={function() { console.log("Enviando a base de datos", carrito); }}/>
                <BotonAccion texto="Agregar Proveedor" color="secondary" alHacerClick={function(){setEstaAbierto(true)}}/>
            </Stack>
            
        }
    >

    </TransaccionLayoutComponent>
    <ModalRegistro
    abierto={estaAbierto}
    alCerrar={function(){setEstaAbierto(false)}}
    titulo="Registrar Proveedor"
    alGuardar={function(){console.log("Guardar Datos")}}>
        <FormularioProveedor/>
    </ModalRegistro>
    </Stack>
  )
}
export{AbastecimientoPage}