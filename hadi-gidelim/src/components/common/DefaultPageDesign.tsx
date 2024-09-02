import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails
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
        }, 10000); // 10 saniyede bir değiştir

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
    return (
        <Box
            sx={{
                padding: '5rem 10rem', // Üstten 5rem, sağ ve soldan 10rem boşluk
                display: 'flex',
                gap: '2rem',
            }}
        >
            {/* Sol Kategori Bölümü */}
            <Box
                sx={{
                    flexBasis: '30%', // Sayfa genişliğinin %30'u
                    backgroundColor: '#f0f0f0',
                    padding: '1rem',
                    borderRadius: '8px',
                }}
            >
                <Typography variant="h6" gutterBottom>Kategoriler</Typography>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Elektronik</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul>
                            <li>Bilgisayar</li>
                            <li>Telefon</li>
                            <li>Tablet</li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
                {/* Diğer kategoriler de benzer şekilde eklenebilir */}
            </Box>

            {/* Sağ Kart Bölümü */}
            <Box
                sx={{
                    flexBasis: '70%', // Sayfa genişliğinin %70'i
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)', // 2 sütunlu grid
                    gap: '1rem',
                }}
            >
                {[...Array(8)].map((_, index) => (
                    <Card
                        key={index}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'stretch', // Kart içindeki elemanların aynı yükseklikte olmasını sağlar
                            padding: '1rem',
                            height: '200px', // Kartın sabit yüksekliği
                        }}
                    >
                        {/* İçerik Bölümü */}
                        <CardContent sx={{ flex: '1 1 60%' }}> {/* İçerik %60 alan kaplar */}
                            <Typography variant="h6" gutterBottom>
                                Başlık {index + 1}
                            </Typography>
                            <Typography variant="body1" color="text.secondary" gutterBottom>
                                Fiyat: {100 + index * 10} TL
                            </Typography>
                            <Box display="flex" justifyContent="space-between" mt="auto">
                                <Button variant="contained" color="primary">
                                    Detaylar
                                </Button>
                                <Button variant="outlined" color="secondary">
                                    Satın Al
                                </Button>
                            </Box>
                        </CardContent>

                        <Box
                            sx={{
                                flex: '1 1 40%',
                                overflow: 'hidden',
                                borderRadius: '12px 40px'
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
