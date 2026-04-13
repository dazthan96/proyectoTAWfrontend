import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import type React from "react";

interface PropsModal{
    abierto:boolean;
    alCerrar:()=>void;
    titulo: string;
    children:React.ReactNode;
    alGuardar:()=>void
}
function ModalRegistro(props: PropsModal):React.ReactNode{
    return(
        <Dialog open={props.abierto} onClose={props.alCerrar} fullWidth maxWidth="sm">
            <DialogTitle>{props.titulo}</DialogTitle>
            <DialogContent dividers>
                {props.children}
                <DialogActions>
                    <Button onClick={props.alCerrar}>Cancelar</Button>
                    <Button variant ="contained" onClick={props.alGuardar}>Guardar Registro</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}
export{ModalRegistro}