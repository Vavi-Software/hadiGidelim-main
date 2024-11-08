import React from 'react';
import { Box, Typography, Link, IconButton, Divider, Button } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import HotelIcon from '@mui/icons-material/Hotel';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import CoffeeIcon from '@mui/icons-material/Coffee';
import LocalPlayIcon from '@mui/icons-material/LocalPlay';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const Footer: React.FC = () => {
    // Function to create a button with consistent styling
    const renderMenuButton = (label: string, path: string, icon: React.ReactNode) => (
        <Button
            id={`${label.toLowerCase()}-button`}
            href={path}
            className="menu-button"
            sx={{
                color: '#ea2d00',
                fontFamily: 'Arial, sans-serif',
                fontSize: { xs: '8px', sm: '10px' }, // Responsive font size
                fontWeight: 700,
                backgroundColor: "white",
                padding: '0.5rem 0.5rem',
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

    return (
        <Box sx={{
            backgroundColor: '#252525',
            padding: { xs: '10px', sm: '20px 0' }, // Responsive padding
            textAlign: 'center',
            borderTop: "1px solid red",
            color: '#fff'
        }}>
            {/* Logo */}
            <Box sx={{ marginBottom: '20px' }}>
                <img src="../../public/logo.png" alt="Logo" width="150px" />
            </Box>

            {/* Quick Links */}
            <Box sx={{
                marginBottom: '20px',
                fontFamily: 'Arial, sans-serif',
                fontSize: '1rem',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on small screens
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: 2,
            }}>
                {renderMenuButton("Ana Sayfa", "/", <HomeIcon />)}
                {renderMenuButton("Hadi Gezelim", "/hadigezelim", <ExploreIcon />)}
                {renderMenuButton("Lezzet", "/Lezzet", <LocalDiningIcon />)}
                {renderMenuButton("Konaklama", "/Konaklama", <HotelIcon />)}
                {renderMenuButton("Kafe", "/Kafe", <CoffeeIcon />)}
                {renderMenuButton("Eğlence", "/Eglence", <LocalPlayIcon />)}
                {renderMenuButton("Hizmet", "/Hizmet", <MedicalServicesIcon />)}
                {renderMenuButton("Spor", "/Spor", <FitnessCenterIcon />)}
                <Button
                    href="/Iletisim"
                    sx={{
                        color: '#ea2d00',
                        fontFamily: 'Arial, sans-serif',
                        fontSize: { xs: '8px', sm: '10px' }, // Responsive font size
                        fontWeight: 700,
                        backgroundColor: "white",
                        padding: '0.5rem 0.5rem',
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
                    <ContactPhoneIcon /> İletişim
                </Button>
            </Box>

            {/* Short Description */}
            <Typography variant="body2" sx={{
                marginBottom: '20px',
                padding: '0 20px',
                color: '#ea2d00',
                fontWeight: 'bold',
                fontSize: { xs: '12px', sm: '14px' } // Responsive font size
            }}>
                Sizde İşletmenizi HADİ GİDELİM'e eklemek için <Link href="tel:05462006739" sx={{ color: '#ea2d00', textDecoration: 'none', whiteSpace: 'nowrap'}}>Bize Ulaşın
                <FontAwesomeIcon icon={faPhone} style={{ color: '#fff', marginLeft: 8 }} />
            </Link>
            </Typography>

            {/* Social Media Icons */}
            <Box sx={{
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
            }}>
                <IconButton href="https://instagram.com" target="_blank" sx={{ color: '#fff', '&:hover': { color: "#ea2d00" } }}>
                    <Instagram />
                </IconButton>
                <IconButton href="https://facebook.com" target="_blank" sx={{ color: '#fff', '&:hover': { color: "#ea2d00" } }}>
                    <Facebook />
                </IconButton>
                <IconButton href="https://twitter.com" target="_blank" sx={{ color: '#fff', '&:hover': { color: "#ea2d00" } }}>
                    <Twitter />
                </IconButton>
                <IconButton href="https://linkedin.com" target="_blank" sx={{ color: '#fff', '&:hover': { color: "#ea2d00" } }}>
                    <LinkedIn />
                </IconButton>
            </Box>

            {/* Divider Line */}
            <Divider sx={{ margin: '20px 0', backgroundColor: '#555' }} />

            {/* Copyright Section */}
            <Typography variant="body2" sx={{ color: '#fff', fontSize: { xs: '10px', sm: '12px' } }}>
                © {new Date().getFullYear()} <a href="https://vavisoftware.com.tr" style={{ color: '#ea2d00' }}>VAVI SOFTWARE</a> Tarafından Yapılmıştır.
            </Typography>
        </Box>
    );
};

export default Footer;
