import { IconButton, Stack, TableCell, TableRow } from "@mui/material"
import { useState } from "react"
import { USUARIOS, type Usuario } from "../data/DatoEjemplo"
import { ListadoLayout } from "../layouts/ListadoLayout"
import { TablaBase } from "../components/TablasBase"
import { Delete } from "@mui/icons-material"
import { ModalRegistro } from "../components/Modales"
import { FormularioUsuario } from "../forms/FormularioUsuario"

function UsuarioPage():React.ReactNode{
    const [usuarios, _setUsuarios] = useState<Usuario[]>(USUARIOS)
    const [estaActivo, setEstaActivo] = useState(false)
    function eliminarUsuario(id:number){
        console.log("Eliminando usuario con id", id)
    }
    return(
        <Stack>
            <ListadoLayout
            titulo="Usuarios Registrados"
            botonTexto="Nuevo Usuario"
            onBotonClick={function(){setEstaActivo(true)}}>
                <TablaBase cabeceras={["Id", "Usuario", "Nombre", "Apellido", "Rol", "Opciones"]}>
                    {usuarios.map(function(u){
                        return(
                            <TableRow key={u.id_usuario}>
                                <TableCell>{u.id_usuario}</TableCell>
                                <TableCell>{u.usuario}</TableCell>
                                <TableCell>{u.nombre}</TableCell>
                                <TableCell>{u.apellido}</TableCell>
                                <TableCell>{u.rol}</TableCell>
                                <TableCell align="center">
                                <IconButton color="error" onClick={function(){eliminarUsuario(u.id_usuario)}}>
                                    <Delete/>
                                </IconButton>
                            </TableCell>
                            </TableRow>
                        )
                    })}

                </TablaBase>

            </ListadoLayout>
            <ModalRegistro
            titulo="Nuevo Usuario"
            abierto={estaActivo}
            alCerrar={function(){setEstaActivo(false)}}
            alGuardar={function(){console.log("Guardar Usuario")}}>
                <FormularioUsuario></FormularioUsuario>

            </ModalRegistro>
        </Stack>
    )
}
export{UsuarioPage}