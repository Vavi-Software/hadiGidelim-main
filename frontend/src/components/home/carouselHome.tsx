import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const imageArray = [
    '/ankara.png',
    '/logo.png',
    '/ankara.jpg',
    '/anıtkabir.jpg',
    '/ankara.png',
    '/ankara.jpg',
    '/VAVI2.png',
    '/anıtkabir.jpg',
];

interface CarouselComponentProps {
    height?: string;
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ height = '100vh' }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    React.useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 10000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleNext = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
            setFade(true);
        }, 500);
    };

    const handlePrev = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? imageArray.length - 1 : prevIndex - 1
            );
            setFade(true);
        }, 500);
    };

    const buttonStyles = {
        position: 'absolute',
        top: '50%',
        color: '#ea0e01',
        zIndex: 10,
    };

    return (
        <Box
            position="relative"
            width="100%"
            height={height}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >

            {/* Geri Butonu */}
            <IconButton
                onClick={handlePrev}
                sx={{
                    ...buttonStyles,
                    left: 5,
                }}
            >
                <ArrowBackIosIcon fontSize="large" />
            </IconButton>

            {/* Resim */}
            <img
                src={imageArray[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: fade ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out',
                }}
            />

            {/* İleri Butonu */}
            <IconButton
                onClick={handleNext}
                sx={{
                    ...buttonStyles,
                    right: 5,
                }}
            >
                <ArrowForwardIosIcon fontSize="large" />
            </IconButton>
        </Box>
    );
};

export default CarouselComponent;