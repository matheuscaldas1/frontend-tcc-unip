import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import { CustomizedTypography } from './styles';

const Header: React.FC = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position='static'>
            <Container>
                <Toolbar disableGutters>
                    <CustomizedTypography
                        variant='h6'
                    >
                        Fake Detector
                    </CustomizedTypography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={handleCloseNavMenu}
                            href="/sobre"
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Sobre
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
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