import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const imageArray = [
    '/ankara.png',
    '/logo.png',
    '/ankara.jpg',
    '/anıtkabir.jpg',
    '/VAVI2.png',
];

interface CarouselComponentProps {
    height?: string;
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ height = '100vh' }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000); // 10 saniye

        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleNext = () => {
        if (isAnimating) return; // Animasyon sırasında engelle
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
            setIsAnimating(false);
        }, 100); // Animasyon süresi
    };

    const handlePrev = () => {
        if (isAnimating) return; // Animasyon sırasında engelle
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? imageArray.length - 1 : prevIndex - 1
            );
            setIsAnimating(false);
        }, 1000); // Animasyon süresi
    };

    return (
        <Box
            position="relative"
            width="100%"
            height={height}
            display="flex"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
        >
            {/* Geri Butonu */}
            <IconButton
                onClick={handlePrev}
                sx={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#ea0e01',
                    zIndex: 10,
                }}
            >
                <ArrowBackIosIcon fontSize="large" />
            </IconButton>

            {/* Resim Kutusu */}
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                }}
            >
                {imageArray.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index + 1}`}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            opacity: currentIndex === index ? 1 : 0,
                            transition: 'opacity 1s ease-in-out',
                        }}
                    />
                ))}
            </Box>

            {/* İleri Butonu */}
            <IconButton
                onClick={handleNext}
                sx={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#ea0e01',
                    zIndex: 10,
                }}
            >
                <ArrowForwardIosIcon fontSize="large" />
            </IconButton>
        </Box>
    );
};

export default CarouselComponent;
