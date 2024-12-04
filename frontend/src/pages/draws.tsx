import { useState, useEffect } from 'react';
import Navbar from '../components/common/navbar.tsx';
import Footer from '../components/common/footer.tsx';
import { Button, Box, Typography, Grid, Stack } from '@mui/material';
import { Instagram } from '@mui/icons-material';

import '../css/global.css';

// Örnek işletme verileri
const businesses = [
    {
        id: 1,
        name: 'İşletme A',
        images: ['../../public/VAVI2.png', '../../public/VaviLacivert.png', '../../public/icon-logo.png'],        details: 'Çekiliş Detayları.',
    },
    {
        id: 2,
        name: 'İşletme C',
        images: ['../../public/VAVI2.png', '../../public/VaviLacivert.png', '../../public/icon-logo.png'],        details: 'İşletme C detayları burada.',
    },
    {
        id: 3,
        name: 'İşletme B',
        images: ['../../public/VAVI2.png', '../../public/VaviLacivert.png', '../../public/icon-logo.png'],        details: 'İşletme B detayları burada.',
    },
    {
        id: 4,
        name: 'İşletme D',
        images: ['../../public/VAVI2.png', '../../public/ankara.png', '../../public/icon-logo.png'],        details: 'İşletme D detayları burada.',
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

    const handleShare = (business: typeof businesses[0]) => {
        alert(`${business.name} işletmesini paylaşmak istediniz.`);
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

                                <Stack spacing={1} mt={2}>
                                    <Button
                                        sx={{
                                            border: '1px solid #ea2d00',
                                            borderRadius: '8px',
                                            backgroundColor: '#ea2d00',
                                            color: '#fff',
                                            '&:hover': {
                                                backgroundColor: '#fff',
                                                color: '#ea2d00',
                                                border: '1px solid #ea2d00',
                                            },
                                        }}
                                        variant="outlined"
                                        fullWidth
                                        onClick={() => handleJoinDraw(business)}
                                    >
                                        Çekilişe Katıl
                                    </Button>

                                    <Button
                                        sx={{
                                            border: '1px solid #0077b6',
                                            borderRadius: '8px',
                                            backgroundColor: '#0077b6',
                                            color: '#fff',
                                            '&:hover': {
                                                backgroundColor: '#fff',
                                                color: '#0077b6',
                                                border: '1px solid #0077b6',
                                            },
                                        }}
                                        variant="outlined"
                                        fullWidth
                                        onClick={() => handleShare(business)}
                                    >
                                        Paylaş
                                    </Button>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
    {/* İlk Instagram Butonu ve Yazı */}
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Instagram
            sx={{
                fontSize: '28px',
                color: '#E1306C',
                cursor: 'pointer',
                '&:hover': { color: '#ad1457' },
            }}
            onClick={() => window.open('https://www.instagram.com/vavi.software', '_blank')}
        />
        <Typography
            sx={{
                cursor: 'pointer',
                color: '#E1306C',
                '&:hover': { color: 'black' },
            }}
            onClick={() => window.open('https://www.instagram.com/vavi.software', '_blank')}
        >
            vavi.software
        </Typography>
    </Box>

    {/* İkinci Instagram Butonu ve Yazı */}
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Instagram
            sx={{
                fontSize: '28px',
                color: '#E1306C',
                cursor: 'pointer',
                '&:hover': { 
                    color: '#ad1457',
                },
            }}
            onClick={() => window.open('https://www.instagram.com/hadigidelim1.0', '_blank')}
        />
        <Typography
            sx={{
                cursor: 'pointer',
                color: '#E1306C',
                '&:hover': { color: 'black' },
            }}
            onClick={() => window.open('https://www.instagram.com/hadigidelim1.0', '_blank')}
        >
            hadigidelim1.0
        </Typography>
    </Box>
</Box>

                                </Stack>
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
                    {sortedBusinesses.map((business, index) => (
                        <img
                            key={index}
                            src={business.images[0]}
                            alt={business.name}
                            style={{
                                width: '100%',
                                height: '200px',
                                objectFit: 'cover',
                                flexShrink: 0,
                            }}
                        />
                    ))}
                </Box>
            </Box>

            <Footer />
        </>
    );
}

export default Draws;
