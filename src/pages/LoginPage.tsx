import {AuthLayout} from '../layouts/AuthLayout';
import { Typography, Button } from '@mui/material';

export function LoginPage() {
  return (
    <AuthLayout>
      <Typography variant="h4" gutterBottom>
        ¡Hola! Soy el Formulario
      </Typography>
      <Typography variant="body1" mb={3}>
        Pronto aquí pondremos los inputs de MUI.
      </Typography>
      <Button variant="contained" fullWidth>
        Boton de prueba
      </Button>
      <Typography variant="h4" gutterBottom>
        ¡Hola! Soy el Formulario
      </Typography>
      <Typography variant="body1" mb={3}>
        Pronto aquí pondremos los inputs de MUI.
      </Typography>
      <Button variant="contained" fullWidth>
        Boton de prueba
      </Button>
    </AuthLayout>
  );
}