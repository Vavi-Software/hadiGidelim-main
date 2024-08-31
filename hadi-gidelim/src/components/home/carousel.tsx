import React, { useState } from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const imageArray = [
    '../../public/ankara.png',
    '../../public/logo.png',
    '../../public/ankara.jpg',
    '../../public/anıtkabir.jpg',
    '../../public/ankara.png',
    '../../public/ankara.jpg',
    '../../public/VAVI2.png',
    '../../public/anıtkabir.jpg',
];

const CarouselComponent: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Otomatik geçiş için
    React.useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 10000); // 10 saniye

        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? imageArray.length - 1 : prevIndex - 1
        );
    };

    return (
        <Box
            position="relative"
            width="100%"
            height="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            {/* Arama Bölümü */}
            <Box
                position="absolute"
                top={20}
                width="80%"
                display="flex"
                justifyContent="center"
                zIndex={10}
            >
                <TextField
                    variant="outlined"
                    placeholder="Arama yapın..."
                    fullWidth
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: 2,
                    }}
                />
            </Box>

            {/* Geri Butonu */}
            <IconButton
                onClick={handlePrev}
                sx={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'white',
                }}
            >
                <ArrowBackIosIcon fontSize="large" />
            </IconButton>

            {/* Resim */}
            <img
                src={imageArray[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />

            {/* İleri Butonu */}
            <IconButton
                onClick={handleNext}
                sx={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'white',
                }}
            >
                <ArrowForwardIosIcon fontSize="large" />
            </IconButton>
        </Box>
    );
};

export default CarouselComponent;
