import { createTheme } from '@mui/material/styles';

export const globalTheme = createTheme({
    components: {
        // Nome do componente
        MuiButtonBase: {
            defaultProps: {
                // the props to change the default for
                disableRipple: true,
            }
        }
    }
});
