import {AuthLayout} from '../layouts/AuthLayout';
import { Typography } from '@mui/material';
import { CustomInput } from '../components/InputText';
import { useState } from 'react';
import { PrimaryButton } from '../components/Botones';
import { loginFalse } from '../services/LoginFalse';

export function LoginPage() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  function maneraClick(){
    const esValido = loginFalse(usuario, password);
    if (esValido){
      console.log("Ingresando al sistema")
    }
  }
  function pruebaBoton(){
    return
  }
  return (
    <AuthLayout>
      <Typography variant="h4" gutterBottom align='center'>
        Iniciar Sesión
      </Typography>
      <CustomInput label='Usuario' valor={usuario} tipo='text' alCambiar={setUsuario}/>
      <CustomInput label='Contraseña' valor={password} tipo='password' alCambiar={setPassword}/>
      <PrimaryButton texto='Ingresar' alHacerClick={maneraClick} color='info'/>
      <PrimaryButton texto='Crear Usuario' alHacerClick={pruebaBoton} color='success'/>
      
    </AuthLayout>
  );
}