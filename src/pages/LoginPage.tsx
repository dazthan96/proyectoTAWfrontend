import {AuthLayoutComponent} from '../layouts/AuthLayout';
import { Typography } from '@mui/material';
import { CustomInput } from '../components/InputText';
import {  useRef } from 'react';
import { LoginButton } from '../components/Botones';
import { loginFalse } from '../services/LoginFalse';
import { useNavigate } from 'react-router-dom';

function LoginPage():React.JSX.Element {
  const navigate = useNavigate();
  const userRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  function maneraClick(){
    const usuario = userRef.current?.value ||""
    const password = passwordRef.current?.value||""
    loginFalse(usuario, password, navigate);
  }
  function pruebaBoton(){
    return
  }
  return (
    <AuthLayoutComponent>
      <Typography variant="h4" gutterBottom align='center'>
        Iniciar Sesión
      </Typography>
      <CustomInput label='Usuario' valor={userRef} tipo='text'/>
      <CustomInput label='Contraseña' valor={passwordRef} tipo='password'/>
      <LoginButton texto='Ingresar' alHacerClick={maneraClick} color='info'/>
      <LoginButton texto='Crear Usuario' alHacerClick={pruebaBoton} color='success'/>
      
    </AuthLayoutComponent>
  );
}
export{LoginPage}