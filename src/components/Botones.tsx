import { Button } from '@mui/material';

interface PropsBoton {
  texto: string;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  alHacerClick: () => void;
}

export function PrimaryButton(props: PropsBoton) {
  return (
    <Button
      fullWidth
      variant="contained"
      size="large"
      color={props.color || 'primary'}
      onClick={props.alHacerClick}
      sx={{ mt: 2, p: 1.5, fontWeight: 'bold', borderRadius: '8px' }}
    >
       {props.texto}
    </Button>
  );
}
