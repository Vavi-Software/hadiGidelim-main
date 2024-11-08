// src/components/common/cardList.tsx
import React from "react";
import { Box } from "@mui/material";
import CardComponent from "./cardComponent.tsx";

const cardData = [
    {
        images: [
            '../../public/ankara.png',
            '../../public/logo.png',
            '../../public/ankara.jpg'
        ],
        title: "Ürün 1",
        price: "100",
    },
    {
        images: [
            '../../public/anıtkabir.jpg',
            '../../public/ankara.png',
            '../../public/ankara.jpg'
        ],
        title: "Ürün 2",
        price: "150",
    },
    {
        images: [
            '../../public/VAVI2.png',
            '../../public/anıtkabir.jpg'
        ],
        title: "Ürün 3",
        price: "200",
    },
];

const CardListSection: React.FC = () => {
    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: '2rem' }}>
            {cardData.map((card, index) => (
                <CardComponent
                    key={index}
                    images={card.images} // Çoklu resim gönderimi
                    title={card.title}
                    price={card.price}
                />
            ))}
        </Box>
    );
};

export default CardListSection;
