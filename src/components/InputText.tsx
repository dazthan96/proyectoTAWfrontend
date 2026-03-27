import { TextField } from '@mui/material';

interface PropsInput {
  label: string;
  valor: string;
  tipo?: string;
  ayuda?: string;
  alCambiar: (nuevoValor: string) => void;
}

export function CustomInput(props: PropsInput) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      margin="normal"
      label={props.label}
      value={props.valor}
      type={props.tipo || 'text'}
      helperText={props.ayuda}
      onChange={(evento) => props.alCambiar(evento.target.value)}
      sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
    />
  );
}
