import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
    logo: {
        color: 'inherit',
        textDecoration: 'none',
        letterSpacing: '.3rem',
        fontWeight: 700,
        fontFamily: 'monospace',
    },
    toolbar: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    boxDesktop: {
        display: 'flex',
        justifyContent: 'flex-end',
    }
}));
