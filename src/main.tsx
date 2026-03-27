// 1. Imports de React y el motor de renderizado
import React from 'react' // La librería base para crear componentes.
import ReactDOM from 'react-dom/client' // El "puente" que conecta React con el navegador (DOM).

// 2. Import del componente principal de tu App
import App from './App.tsx' 

// 3. Imports de Material UI (MUI)
// CssBaseline: Un reset de CSS para que la web no tenga márgenes feos por defecto.
// ThemeProvider: El "contenedor" que le dice a todos tus componentes qué colores usar.
// createTheme: La función para definir tu paleta de colores (como el Color.kt en Android).
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

// 4. Import de la fuente Roboto (MUI la necesita para verse bien)
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// 5. Definición del Tema Global
// Aquí defines el "look and feel". Es igual al MaterialTheme de Compose.
const theme = createTheme({
  palette: {
    primary: {
      main: '#404041', // Definimos el azul principal de tu App.
    },
  },
});

// 6. El renderizado real (El "Big Bang" de tu App)
// ReactDOM.createRoot: Busca en tu archivo index.html un <div> con id="root".
// .render(...): Inyecta todo tu código de React dentro de ese div.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> 
    {/* StrictMode: Un modo de ayuda que te avisa en consola si programas algo mal */}
    
    <ThemeProvider theme={theme}>
      {/* Aplicamos el tema azul a toda la aplicación */}
      
      <CssBaseline /> 
      {/* Limpiamos los estilos por defecto del navegador (márgenes, fuentes) */}
      
      <App /> 
      {/* Finalmente, cargamos tu componente principal donde está tu lógica */}
      
    </ThemeProvider>
  </React.StrictMode>,)