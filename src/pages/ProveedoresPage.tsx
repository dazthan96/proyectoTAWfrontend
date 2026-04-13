import { IconButton, TableCell, TableRow, Stack} from "@mui/material";
import type React from "react";
import { useState } from "react";
import { PROVEEDORES, type Proveedor } from "../data/DatoEjemplo";
import { ListadoLayout } from "../layouts/ListadoLayout";
import { TablaBase } from "../components/TablasBase";
import { Delete } from "@mui/icons-material";
import { ModalRegistro } from "../components/Modales";
import { FormularioProveedor } from "../forms/FormularioProveedor";

function ProveedoresPage():React.ReactNode{
    const [proveedores, _setProveedores] = useState<Proveedor[]>(PROVEEDORES);
    const [estaActivo, setEstaActivo] = useState(false)
    function eliminarProveedor(nit:string){
        console.log("Eliminando proveedor", nit)
    }
    return(
        <Stack>
        <ListadoLayout
        titulo="Proveedores Registrados"
        botonTexto="Nuevo Proveedor"
        onBotonClick={function(){setEstaActivo(true)}}>
            <TablaBase cabeceras={["Nit", "Empresa", "Contacto", "Telefono", "Correo", "Opciones"]}>
                {proveedores.map(function(p){
                    return (
                        <TableRow key={p.nit}>
                            <TableCell>{p.nit}</TableCell>
                            <TableCell>{p.nombre}</TableCell>
                            <TableCell>{p.contacto_nombre}</TableCell>
                            <TableCell>{p.telefono}</TableCell>
                            <TableCell>{p.correo}</TableCell>
                            <TableCell align="center">
                                <IconButton color="error" onClick={function(){eliminarProveedor(p.nit)}}>
                                    <Delete/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    )
                })}

            </TablaBase>
        </ListadoLayout>
        <ModalRegistro
        titulo="Registrar Proveedor"
        abierto={estaActivo}
        alCerrar={function(){setEstaActivo(false)}}
        alGuardar={function(){console.log("Guardar Proveedor")}}>
            <FormularioProveedor></FormularioProveedor>
        </ModalRegistro>
        </Stack>
    )
}
export{ProveedoresPage}