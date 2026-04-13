import { IconButton, TableCell, TableRow, Stack } from "@mui/material"
import type React from "react"
import { useState } from "react"
import { CLIENTES, type Cliente } from "../data/DatoEjemplo"
import { ListadoLayout } from "../layouts/ListadoLayout";
import { TablaBase } from "../components/TablasBase";
import { Delete } from "@mui/icons-material";
import { ModalRegistro } from "../components/Modales";
import { FormularioCliente } from "../forms/FormularioClientes";

function ClientePage():React.ReactNode{
    const [clientes, _setClientes] = useState<Cliente[]>(CLIENTES);
    const[estaActivo, setEstaActivo] = useState(false)
    function eliminarCliente(carnet: string){
        console.log("Eliminando cliente con carnet ", carnet)
    }
    return (
        <Stack>
        <ListadoLayout
            titulo="Clientes Registrados"
            botonTexto="Nuevo Cliente"
            onBotonClick={function(){setEstaActivo(true)}}
        >
            <TablaBase cabeceras={["Carnet", "Nombre", "Correo", "Telefono", "Opciones"]}>
                {clientes.map(function(c){
                    return(
                        <TableRow key={c.carnet}>
                            <TableCell>{c.carnet}</TableCell>
                            <TableCell>{c.nombre} {c.apellido} {c.apellido_materno}</TableCell>
                            <TableCell>{c.correo}</TableCell>
                            <TableCell>{c.telefono}</TableCell>
                            <TableCell align="center">
                                <IconButton color="error" onClick={function(){eliminarCliente(c.carnet)}}>
                                    <Delete/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TablaBase>
        </ListadoLayout>
        <ModalRegistro
        titulo="Nuevo Cliente"
        abierto={estaActivo}
        alCerrar={function(){setEstaActivo(false)}}
        alGuardar={function(){console.log("Guardar Cliente")}}>
            <FormularioCliente></FormularioCliente>
        </ModalRegistro>
        </Stack>
    )
}

export {ClientePage}