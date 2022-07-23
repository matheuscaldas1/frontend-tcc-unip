import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
    paper: {
        height: '100vh',
        padding: '24px',
    },
    mainContainer: {
        height: '100%',
    },
    form: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    }
}));
