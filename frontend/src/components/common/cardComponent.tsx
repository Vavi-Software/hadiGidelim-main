// src/components/common/CardComponent.tsx
import React, { useEffect, useState } from 'react';
import {Box, Button, Card, CardContent, CardMedia, Typography} from "@mui/material";
import '../../css/cardComponent.css';

interface CardComponentProps {
    images: string[];
    title: string;
    price: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ images, title, price }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Resimleri 6 saniyede bir değiştiren effect
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000);

        return () => clearInterval(intervalId); // Component unmount olduğunda interval temizliği
    }, [images.length]);


    return (
        <Card
            className="card"
            sx={{
                width: { xs: '90%', md: '100%', sm:"100%" },  // Telefon ekranında %90, diğer ekranlarda %100
                margin: { xs: '0 auto', md: 'initial' }, // Telefon ekranında kartı ortalar
                boxShadow: 3,  // Hafif gölge ekler
                transition: 'transform 0.3s',  // Hover animasyonu için geçiş süresi
                '&:hover': {
                    transform: 'scale(1.05)',  // Hover durumunda kartı büyütür
                },
            }}
        >
            <CardMedia
                component="img"
                alt={title}
                image={images[currentImageIndex]}
                className="fade-in"
                sx={{
                    height: 200,  // Sabit yükseklik
                    objectFit: 'cover',  // Görselin taşmasını engeller
                }}
            />
            <CardContent className="card-content">
                <Typography variant="h6" component="div">
                    {title}
                </Typography>
                <Typography variant="h5" color="text.secondary">
                    {price} TL
                </Typography>
               
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                    <Button className="button" size="small">
                        Detaylar
                    </Button>
                    <Button className="button" size="small">
                        Sepete Ekle
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default CardComponent;
