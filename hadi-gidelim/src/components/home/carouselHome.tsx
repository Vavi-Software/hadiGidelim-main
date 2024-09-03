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

interface CarouselComponentProps {
    height?: string;
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ height = '100vh' }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 10000); // 10 seconds

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
            height={height}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
                overflow: 'hidden',
                '@media (max-width: 1024px)': { // For tablets and smaller devices
                    height: '70vh',
                },
                '@media (max-width: 600px)': { // For mobile devices
                    height: '50vh',
                },
            }}
        >
            {/* Search Field */}
            <Box
                position="absolute"
                top={20}
                width="80%"
                display="flex"
                justifyContent="center"
                zIndex={10}
                sx={{
                    '@media (max-width: 600px)': { // For mobile devices
                        width: '90%',
                        top: 10,
                    },
                }}
            >
                <TextField
                    variant="outlined"
                    placeholder="Arama yapın..."
                    fullWidth
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: 2,
                        '@media (max-width: 600px)': { // For mobile devices
                            fontSize: '0.8rem',
                        },
                    }}
                />
            </Box>

            {/* Previous Button */}
            <IconButton
                onClick={handlePrev}
                sx={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'wheat',
                    backgroundColor: 'white',
                    '@media (max-width: 600px)': { // For mobile devices
                        fontSize: 'small',
                    },
                }}
            >
                <ArrowBackIosIcon fontSize="large" />
            </IconButton>

            {/* Image */}
            <img
                src={imageArray[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            />

            {/* Next Button */}
            <IconButton
                onClick={handleNext}
                sx={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'wheat',
                    backgroundColor: 'white',
                    '@media (max-width: 600px)': { // For mobile devices
                        fontSize: 'small',
                    },
                }}
            >
                <ArrowForwardIosIcon fontSize="large" />
            </IconButton>
        </Box>
    );
};

export default CarouselComponent;
