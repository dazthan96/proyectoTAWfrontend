import { Button, type ButtonProps } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

interface PropsBoton {
  texto: string;
  color?: ButtonProps['color'];
  alHacerClick: () => void;
}

function LoginButton({texto, color='primary',alHacerClick }: PropsBoton) {
  return (
    <Button
      fullWidth
      variant="contained"
      size="large"
      color={color}
      onClick={alHacerClick}
      sx={{
        mt: 2,
        p: 1.5,
        fontWeight: 'bold',
        borderRadius: '8px'}}
    >
       {texto}
    </Button>
  );
}
function MenuButton({texto, color='inherit',alHacerClick}:PropsBoton){
  return(
    <ListItemButton
    onClick={alHacerClick}
    sx={{
      py:1,
      borderRadius:0,
      backgroundColor:{color},
      textAlign:'center'
    }}
  >
    <ListItemText
      primary={texto}
      
    />
  </ListItemButton>
  )
}

function BotonAccion({texto, color, alHacerClick}:PropsBoton) {
  return (
    <Button
      variant="contained"
      fullWidth
      size="large"
      color={color}
      onClick={alHacerClick}
      sx={{ fontWeight: 'bold', py: 1.5 }}
    >
      {texto}
    </Button>
  );
}
export {LoginButton, MenuButton, BotonAccion}
