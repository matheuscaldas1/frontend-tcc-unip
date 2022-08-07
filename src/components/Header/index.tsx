import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    AppBar,
    Box,
    Button,
    Container,
    Menu,
    MenuItem,
    Toolbar,
    Typography
} from '@mui/material';

import { useStyles } from './styles';

const Header: React.FC = () => {
    let navigate = useNavigate();
    const classes = useStyles();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleNavigation = (path: string) => {
        navigate(path);
    }

    return (
        <AppBar position='static' color='primary'>
            <Container maxWidth={false}>
                <Toolbar className={classes.toolbar} disableGutters>
                    <Typography 
                        className={classes.logo}
                        component='button'
                        onClick={() => handleNavigation('/')}
                        variant='h5'
                    >
                        Fake Detector
                    </Typography>
                    <Box>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Sobre</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Serviços</Typography>
                            </MenuItem>

                        </Menu>

                    </Box>

                    <Box className={classes.boxDesktop}>
                        <Button
                            onClick={() => handleNavigation('/sobre')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Sobre
                        </Button>
                        <Button
                            onClick={() => handleNavigation('/servicos')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Serviços
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;