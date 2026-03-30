import { TextField } from '@mui/material';
import type { RefObject } from 'react';

interface PropsInput {
  label: string;
  tipo?: string;
  valor: RefObject<HTMLInputElement|null>;
  ayuda?: string;
}

export function CustomInput(props: PropsInput) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      margin="normal"
      label={props.label}
      inputRef={props.valor}
      type={props.tipo || 'text'}
      helperText={props.ayuda}
      sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
    />
  );
}
