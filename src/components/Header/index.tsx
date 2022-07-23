import React from 'react';
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
    const classes = useStyles();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position='static'>
            <Container maxWidth={false}>
                <Toolbar className={classes.toolbar} disableGutters>
                    <Typography className={classes.logo} component='a' href='/' variant='h5'>
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
                            href="/sobre"
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Sobre
                        </Button>
                        <Button
                            href="/servicos"
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