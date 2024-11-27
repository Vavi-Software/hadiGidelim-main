import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchInput from "../common/searchBox.tsx";

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

interface CarouselComponentProps {
    height?: string;
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ height = '100vh' }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 10000);

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
            {/* Arama Bölümü */}
            <SearchInput onChange={(e) => console.log("Aranan: ", e.target.value)} />

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
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
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
