import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Box } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import HotelIcon from '@mui/icons-material/Hotel';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import CoffeeIcon from '@mui/icons-material/Coffee';
import LocalPlayIcon from '@mui/icons-material/LocalPlay';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
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
                padding: '1rem 1rem',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: 1, // Space between icon and text
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
    return (
        <div>
            <Box sx={{
                margin: 0,
                padding: 0,
            }}>
                {/* Header with Left Logo and Right Menu */}
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ margin: 0, padding: '0 5rem' }}
                >
                    {/* Left Image (Logo) */}
                    <Box>
                        <img src="../../../public/logo.png" alt="logo" width="200px" />
                    </Box>

                    {/* Navbar Links aligned to the right */}
                    <Box
                        display="flex"
                        alignItems="center"
                        sx={{ margin: 3 }}
                    >
                        <DashboardMenu label="Ana Sayfa" path="/" icon={<HomeIcon />} />
                        <DashboardMenu label="Hadi Gezelim" path="/hadigezelim" icon={<ExploreIcon />} />
                        <DashboardMenu label="Lezzet" path="/Lezzet" icon={<LocalDiningIcon />} />
                        <DashboardMenu label="Konaklama" path="/Konaklama" icon={<HotelIcon />} />
                        <DashboardMenu label="Kafe" path="/Kafe" icon={<CoffeeIcon />} />
                        <DashboardMenu label="Eğlence" path="/Eglence" icon={<LocalPlayIcon />} />
                        <DashboardMenu label="Hizmet" path="/Hizmet" icon={<MedicalServicesIcon />} />
                        <DashboardMenu label="Spor" path="/Spor" icon={<FitnessCenterIcon />} />
                    </Box>
                </Box>
            </Box>
        </div>
    );
}
