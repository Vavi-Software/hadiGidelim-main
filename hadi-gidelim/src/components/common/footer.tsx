import React from 'react';
import { Box, Typography, Link, IconButton, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
    return (
        <Box sx={{ backgroundColor: '#f8f8f8', padding: '20px 0', textAlign: 'center' }}>
            {/* Logo */}
            <Box sx={{ marginBottom: '20px' }}>
                <img src="../../public/logo.png" alt="Logo" width="150px" />
            </Box>

            {/* Quick Links */}
            <Box sx={{ marginBottom: '20px' }}>

                <Link href="/" sx={{ margin: '0 15px', color: '#555', textDecoration: 'none' }}>
                    Ana Sayfa
                </Link>

                <Link href="/" sx={{ margin: '0 15px', color: '#555', textDecoration: 'none' }}>
                    Lezzet
                </Link>

                <Link href="/" sx={{ margin: '0 15px', color: '#555', textDecoration: 'none' }}>
                    Kafe
                </Link>

                <Link href="/" sx={{ margin: '0 15px', color: '#555', textDecoration: 'none' }}>
                    Eğlence
                </Link>

                <Link href="/about" sx={{ margin: '0 15px', color: '#555', textDecoration: 'none' }}>
                    Hizmet
                </Link>

                <Link href="/services" sx={{ margin: '0 15px', color: '#555', textDecoration: 'none' }}>
                    Spor
                </Link>

                <Link href="/contact" sx={{ margin: '0 15px', color: '#555', textDecoration: 'none' }}>
                    İletişim
                </Link>
            </Box>

            {/* Short Description */}
            <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '20px', padding: '0 20px' }}>
Ankara'da gezilecek her yer tek sayfada. O zaman HADİ GİDELİM.            </Typography>

            {/* Social Media Icons */}
            <Box sx={{ marginBottom: '20px' }}>
                <IconButton href="https://facebook.com" target="_blank" sx={{ color: '#555' }}>
                    <Facebook />
                </IconButton>
                <IconButton href="https://twitter.com" target="_blank" sx={{ color: '#555' }}>
                    <Twitter />
                </IconButton>
                <IconButton href="https://instagram.com" target="_blank" sx={{ color: '#555' }}>
                    <Instagram />
                </IconButton>
                <IconButton href="https://linkedin.com" target="_blank" sx={{ color: '#555' }}>
                    <LinkedIn />
                </IconButton>
                <Link href="tel:+123456789" color="inherit" underline="none">
                    <FontAwesomeIcon icon={faPhone} style={{ marginRight: 8 }} />
                </Link>
            </Box>

            {/* Divider Line */}
            <Divider sx={{ margin: '20px 0' }} />

            {/* Copyright Section */}
            <Typography variant="body2" color="textSecondary">
                © {new Date().getFullYear()} VAVI SOFTWARE Tarafından Yapılmıştır.
            </Typography>
        </Box>
    );
};

export default Footer;
