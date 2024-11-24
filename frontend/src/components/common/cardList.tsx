import React from "react";
import { Box } from "@mui/material";
import CardComponent from "./cardComponent.tsx";

interface CardListSectionProps {
    cardsPerRow?: number; // Sıradaki kart sayısı
    rows?: number; // Toplam sıra sayısı
    gap?: string; // Kartlar arasındaki boşluk
}

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
    {
        images: [
            '../../public/logo.png',
            '../../public/VAVI2.png',
            '../../public/ankara.jpg'
        ],
        title: "Ürün 4",
        price: "250",
    },
    {
        images: [
            '../../public/ankara.png',
            '../../public/anıtkabir.jpg',
            '../../public/VAVI2.png',
        ],
        title: "Ürün 5",
        price: "300",
    },
    {
        images: [
            '../../public/ankara.jpg',
            '../../public/ankara.png',
            '../../public/logo.png',
        ],
        title: "Ürün 6",
        price: "350",
    },
    {
        images: [
            '../../public/anıtkabir.jpg',
            '../../public/ankara.jpg',
            '../../public/VAVI2.png',
        ],
        title: "Ürün 7",
        price: "400",
    },
    {
        images: [
            '../../public/logo.png',
            '../../public/ankara.jpg',
            '../../public/ankara.png',
        ],
        title: "Ürün 8",
        price: "450",
    },
];

const CardListSection: React.FC<CardListSectionProps> = ({ cardsPerRow = 4, rows = 2, gap = '2rem' }) => {
    // Toplam gösterilecek kart sayısını hesaplayın
    const maxCardsToShow = cardsPerRow * rows;
    const visibleCards = cardData.slice(0, maxCardsToShow); // Görünen kartları sınırlayın

    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: `repeat(${cardsPerRow}, 1fr)`, // Her satırda belirli sayıda kart
                gap: gap,
            }}
        >
            {visibleCards.map((card, index) => (
                <CardComponent
                    key={index}
                    images={card.images}
                    title={card.title}
                    price={card.price}
                />
            ))}
        </Box>
    );
};

export default CardListSection;
