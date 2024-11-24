import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import HotelIcon from '@mui/icons-material/Hotel';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LocalPlayIcon from '@mui/icons-material/LocalPlay';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
        { label: "Eğlence", path: "/Eğlence", icon: <LocalPlayIcon /> },
        { label: "Sağlık", path: "/Saglik", icon: <MedicalServicesIcon /> },
        { label: "Fitness", path: "/Fitness", icon: <FitnessCenterIcon /> },
        { label: "Profilim", path: "/profile", icon: <AccountCircleIcon /> },
    ];

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                position="fixed"
                sx={{ backgroundColor: '#ea2d00', display: 'flex', flexDirection: 'row' }}
            >
                <Toolbar>
                    <IconButton onClick={toggleDrawer(true)} sx={{ color: '#fff' }}>
                        <MenuIcon />
                    </IconButton>

                    <Drawer
                        anchor="left"
                        open={drawerOpen}
                        onClose={toggleDrawer(false)}
                        sx={{ width: '250px' }}
                    >
                        <Stack spacing={2} sx={{ width: 250 }}>
                            {menuItems.map(item => (
                                <DashboardMenu key={item.label} label={item.label} path={item.path} icon={item.icon} />
                            ))}
                        </Stack>
                    </Drawer>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
