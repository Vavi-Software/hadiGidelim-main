import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Divider, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import HotelIcon from '@mui/icons-material/Hotel';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import CoffeeIcon from '@mui/icons-material/Coffee';
import LocalPlayIcon from '@mui/icons-material/LocalPlay';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LoginIcon from '@mui/icons-material/Person';
import '../../css/navbar.css';

interface DashboardMenuProps {
    label: string;
    path: string;
    icon: React.ReactNode;
}

const DashboardMenu: React.FC<DashboardMenuProps> = ({ label, path, icon }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(path);
    };

    return (
        <Button
            id={`${label.toLowerCase()}-button`}
            onClick={handleClick}
            className="menu-button"
            sx={{
                color: '#ea2d00',
                fontFamily: 'Arial, sans-serif',
                fontSize: '10px',
                fontWeight: 700,
                backgroundColor: "white",
                padding: '1rem',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                '&:hover': {
                    backgroundColor: '#cc0000',
                    color: '#fff',
                    transition: 'background-color 0.3s ease',
                },
            }}
        >
            {icon}
            {label}
        </Button>
    );
};

export default function BasicMenu() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    const menuItems = [
        { label: "Ana Sayfa", path: "/", icon: <HomeIcon /> },
        { label: "Hadi Gezelim", path: "/hadigezelim", icon: <ExploreIcon /> },
        { label: "Lezzet", path: "/Lezzet", icon: <LocalDiningIcon /> },
        { label: "Konaklama", path: "/Konaklama", icon: <HotelIcon /> },
        { label: "Kafe", path: "/Kafe", icon: <CoffeeIcon /> },
        { label: "Eğlence", path: "/Eglence", icon: <LocalPlayIcon /> },
        { label: "Hizmet", path: "/Hizmet", icon: <MedicalServicesIcon /> },
        { label: "Spor", path: "/Spor", icon: <FitnessCenterIcon /> },
    ];

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: 'white' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* Left Logo */}
                    <Box>
                        <img src="../../../public/logo.png" alt="logo" width="200px" />
                    </Box>

                    {/* Hamburger Menu Icon for Mobile */}
                    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon sx={{ color: '#ea2d00' }} />
                        </IconButton>
                    </Box>

                    {/* Centered Navbar Links for Desktop */}
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexGrow: 1,
                        }}
                    >
                        {menuItems.map((item, index) => (
                            <DashboardMenu
                                key={index}
                                label={item.label}
                                path={item.path}
                                icon={item.icon}
                            />
                        ))}
                    </Box>

                    {/* Giriş Yap / Kayıt Ol Button for Desktop */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                        <DashboardMenu label="Giriş Yap / Kayıt Ol" path="/login" icon={<LoginIcon />} />
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Drawer for Mobile Menu */}
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                <Box
                    sx={{
                        width: 250,
                        padding: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100%',
                    }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    {/* Menu Items */}
                    <Stack spacing={1}>
                        {menuItems.map((item, index) => (
                            <DashboardMenu
                                key={index}
                                label={item.label}
                                path={item.path}
                                icon={item.icon}
                            />
                        ))}
                    </Stack>

                    {/* Divider and Giriş Yap / Kayıt Ol Button at the Bottom */}
                    <Box>
                        <Divider sx={{ my: 1 }} />
                        <DashboardMenu label="Giriş Yap / Kayıt Ol" path="/login" icon={<LoginIcon />} />
                    </Box>
                </Box>
            </Drawer>
        </>
    );
}
