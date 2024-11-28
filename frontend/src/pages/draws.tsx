import { useState, useEffect } from 'react';
import Navbar from '../components/common/navbar.tsx';
import Footer from '../components/common/footer.tsx';
import { Button, Box, Typography, Grid } from '@mui/material';

import '../css/global.css';

// Örnek işletme verileri
const businesses = [
    {
        id: 1,
        name: 'İşletme A',
        images: '../../public/logo.png ,logo.jpg',
        details: 'Çekiliş Detayları.',
    },
    {
        id: 2,
        name: 'İşletme C',
        images: ['/businessC-1.jpg', '/businessC-2.jpg', '/businessC-3.jpg'],
        details: 'İşletme C detayları burada.',
    },
    {
        id: 3,
        name: 'İşletme B',
        images: ['/businessB-1.jpg', '/businessB-2.jpg', '/businessB-3.jpg'],
        details: 'İşletme B detayları burada.',
    },
    {
        id: 4,
        name: 'İşletme D',
        images: ['/businessD-1.jpg', '/businessD-2.jpg', '/businessD-3.jpg'],
        details: 'İşletme D detayları burada.',
    },
];

function Draws() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // İşletmeleri alfabetik sıraya göre sıralama
    const sortedBusinesses = [...businesses].sort((a, b) => a.name.localeCompare(b.name));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sortedBusinesses.length);
        }, 3000); // 3 saniye
        return () => clearInterval(interval);
    }, [sortedBusinesses]);

    const handleJoinDraw = (business: typeof businesses[0]) => {
        alert(`${business.name} işletmesinin çekilişine katıldınız!`);
    };

    return (
        <>
            <Navbar />

            {/* İşletmeler Bölümü */}
            <Box sx={{ padding: '24px' }}>
                <Typography variant="h4" textAlign="center" gutterBottom>
                    İşletmelerin Çekilişleri
                </Typography>
                <Grid container spacing={4}>
                    {sortedBusinesses.map((business) => (
                        <Grid item xs={12} sm={6} md={3} key={business.id}>
                            <Box
                                sx={{
                                    boxShadow: 3,
                                    padding: '16px',
                                    borderRadius: '8px',
                                    textAlign: 'center',
                                    backgroundColor: '#fff',
                                }}
                            >
                                <img
                                    src={business.images[0]}
                                    alt={business.name}
                                    style={{
                                        width: '100%',
                                        height: '150px',
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                    }}
                                />
                                <Typography variant="h6" mt={2}>
                                    {business.name}
                                </Typography>
                                <Typography variant="body2" mb={2}>
                                    {business.details}
                                </Typography>
                                <Button
                                    variant="outlined"
                                    fullWidth
                                    onClick={() => handleJoinDraw(business)}
                                >
                                    Çekilişe Katıl
                                </Button>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Carousel */}
            <Box
                sx={{
                    position: 'relative',
                    margin: '24px',
                    overflow: 'hidden',
                    width: 'calc(100% - 48px)',
                    borderRadius: '8px',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        transition: 'transform 0.5s ease-in-out',
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >

                </Box>
            </Box>

            <Footer />
        </>
    );
}

export default Draws;
