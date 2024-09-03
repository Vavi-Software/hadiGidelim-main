import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const images = [
    '../../public/ankara.png',
    '../../public/logo.png',
    '../../public/ankara.jpg',
    '../../public/anıtkabir.jpg',
    '../../public/ankara.png',
    '../../public/ankara.jpg',
    '../../public/VAVI2.png',
    '../../public/anıtkabir.jpg',
];

const CarouselImage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000); // Change every 10 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            component="img"
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
            }}
        />
    );
};

const PageComponent: React.FC = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    return (
        <Box
            sx={{
                padding: isSmallScreen ? '2rem' : isTablet ? '3rem' : '5rem 10rem',
                display: 'flex',
                flexDirection: isSmallScreen ? 'column' : 'row',
                gap: '2rem',
            }}
        >
            {/* Sol Kategori Bölümü */}
            <Box
                sx={{
                    flexBasis: isSmallScreen ? '100%' : '30%',
                    backgroundColor: '#f0f0f0',
                    padding: '1rem',
                    borderRadius: '8px',
                    marginBottom: isSmallScreen ? '2rem' : 0,
                }}
            >
                <Typography variant="h6" gutterBottom>Kategoriler</Typography>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Ankara</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul>
                            <li>Hadi</li>
                            <li>Ankara</li>
                            <li>Gidek</li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
            </Box>

            {/* Sağ Kart Bölümü */}
            <Box
                sx={{
                    flexBasis: isSmallScreen ? '100%' : '70%',
                    display: 'grid',
                    gridTemplateColumns: isSmallScreen || isTablet ? '1fr' : 'repeat(2, 1fr)', // Tablet ve mobil modda tek sütun
                    gap: '1rem',
                }}
            >
                {[...Array(8)].map((_, index) => (
                    <Card
                        key={index}
                        sx={{
                            display: 'flex',
                            flexDirection: isSmallScreen ? 'column' : 'row',
                            alignItems: 'stretch',
                            padding: '1rem',
                            height: 'auto',
                        }}
                    >
                        {/* İçerik Bölümü */}
                        <CardContent sx={{ flex: '1 1 60%' }}>
                            <Typography variant="h6" gutterBottom>
                                Başlık {index + 1}
                            </Typography>
                            <Typography variant="body1" color="text.secondary" gutterBottom>
                                Fiyat: {100 + index * 10} TL
                            </Typography>
                            <Box display="flex" justifyContent="space-between" mt="auto">
                                {/* Düğmelerin Renk Uyumu */}
                                <Button variant="contained" color="primary">
                                    İşletmeGirç
                                </Button>
                                <Button variant="contained" color="primary">
                                    İşletmeGir.
                                </Button>
                            </Box>
                        </CardContent>

                        <Box
                            sx={{
                                flex: '1 1 40%',
                                overflow: 'hidden',
                                borderRadius: '12px 40px',
                                marginTop: isSmallScreen ? '1rem' : 0,
                            }}
                        >
                            <CarouselImage />
                        </Box>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default PageComponent;
