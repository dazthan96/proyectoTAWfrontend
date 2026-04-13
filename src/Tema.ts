import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main:'#8A6B7D',
      light:'#917487',
      dark:'#3E2538',
      contrastText:'#DBDBE0'
      /*main: '#563224',      // Tu color de logo (Café chocolate)
      light: '#845c4e',
      dark: '#2d0b00',
      contrastText: '#ffffff',*/
    },
    secondary: {
      main: '#D7B98E',      // Café crema/vainilla para contrastes suaves
    },
    // Colores específicos para el CRUD (Acciones)
    success: {
      main: '#6FA56F',      // Verde para "Crear" o "Guardar"
      light: '#ebf7ed',     // Fondo para alertas de éxito
    },
    info: {
      main: '#22ABAB',      // Azul para "Ver detalle" o "Info"
    },
    warning: {
      main: '#E0973D',      // Naranja para "Editar" o "Actualizar"
    },
    error: {
      main: '#F54A3D',      // Rojo para "Eliminar" o "Cancelar"
    },
    background: {
      default: '#FDF8F5',   // Un blanco "hueso" muy suave para la vista
      paper: '#ffffff',
    },
    text: {
      primary: '#3e2723',   // Texto principal en café casi negro
      secondary: '#757575',
    },
  }
});

export default theme;
