import  { useState, useEffect } from 'react';
import Navbar from '../components/common/navbar.tsx';
import Footer from '../components/common/footer.tsx';
import { Button, Box, Typography, Stack } from '@mui/material';
import { Instagram, Share } from '@mui/icons-material';
import { FacebookShareButton } from 'react-share';
import '../css/global.css';

// Örnek işletme verileri
const businesses = [
    {
        id: 1,
        name: 'İşletme 1',
        image: '/business1.jpg',
        details: 'İşletme 1 detayları burada.',
    },
    {
        id: 2,
        name: 'İşletme 2',
        image: '/business2.jpg',
        details: 'İşletme 2 detayları burada.',
    },
    {
        id: 3,
        name: 'İşletme 3',
        image: '/business3.jpg',
        details: 'İşletme 3 detayları burada.',
    },
    {
        id: 4,
        name: 'İşletme 4',
        image: '/business4.jpg',
        details: 'İşletme 4 detayları burada.',
    },
];

function Draws() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % businesses.length);
        }, 3000); // 3 saniye
        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? businesses.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % businesses.length);
    };

    const handleJoinDraw = (business: typeof businesses[0]) => {
        alert(`${business.name} işletmesinin çekilişine katıldınız!`);
    };

    return (
        <>
            <Navbar />

            {/* Çekiliş Yap Butonu */}
            <Box
                sx={{
                    textAlign: 'center',
                    padding: '16px',
                    backgroundColor: '#f5f5f5',
                    borderBottom: '1px solid #ddd',
                }}
            >
                <Typography variant="h6" gutterBottom>
                    Çekiliş Yap
                </Typography>
                <Button variant="contained" color="primary">
                    Çekiliş Sayfasına Git
                </Button>
            </Box>

            {/* Carousel */}
            <Box sx={{ position: 'relative', margin: '24px', overflow: 'hidden' }}>
                <Box
                    sx={{
                        display: 'flex',
                        transition: 'transform 0.5s ease-in-out',
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {businesses.map((business) => (
                        <Box
                            key={business.id}
                            sx={{
                                flex: '0 0 100%',
                                padding: '8px',
                                textAlign: 'center',
                            }}
                        >
                            <img
                                src={business.image}
                                alt={business.name}
                                style={{
                                    width: '100%',
                                    height: '200px',
                                    borderRadius: '8px',
                                }}
                            />
                            <Typography variant="h6" mt={1}>
                                {business.name}
                            </Typography>
                            <Typography variant="body2">{business.details}</Typography>
                            <Button
                                variant="outlined"
                                fullWidth
                                sx={{ marginTop: '8px' }}
                                onClick={() => handleJoinDraw(business)}
                            >
                                Çekilişe Katıl
                            </Button>
                        </Box>
                    ))}
                </Box>

                {/* Önceki ve Sonraki Butonlar */}
                <Button
                    onClick={handlePrev}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '10px',
                        transform: 'translateY(-50%)',
                        zIndex: 1,
                    }}
                >
                    ‹
                </Button>
                <Button
                    onClick={handleNext}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        right: '10px',
                        transform: 'translateY(-50%)',
                        zIndex: 1,
                    }}
                >
                    ›
                </Button>
            </Box>

            {/* Paylaşım ve +1 Hak */}
            <Box
                sx={{
                    padding: '16px',
                    backgroundColor: '#f5f5f5',
                    borderTop: '1px solid #ddd',
                }}
            >
                <Stack direction="column" spacing={2} alignItems="center">
                    <Typography variant="body1">
                        Paylaşım ve Instagram takibi +1 hak kazandırır
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <FacebookShareButton url="https://sizinwebsiteniz.com">
                            <Button variant="contained" color="primary" startIcon={<Share />}>
                                Paylaş
                            </Button>
                        </FacebookShareButton>
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<Instagram />}
                            onClick={() => window.open('https://instagram.com', '_blank')}
                        >
                            Instagram
                        </Button>
                    </Stack>
                </Stack>
            </Box>

            <Footer />
        </>
    );
}

export default Draws;
