import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import CardComponent from "./cardComponent.tsx";


const defaultImage = "https://via.placeholder.com/200"; // İstediğiniz görseli buraya koyabilirsiniz.

const CardListSection: React.FC = () => {
    const [cardData, setCardData] = useState<any[]>([]);

    // localStorage'dan veriyi alıp state'e aktaralım
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("Lezzet") || "[]");
        console.log("Yüklenen veriler:", storedData);  // Verilerin yüklendiğini kontrol et
        setCardData(storedData);
    }, []);  // İlk render'da sadece çalışacak

    // Kart verilerini işlerken fotoğraf yoksa default görsel kullanıyoruz
    const processCardData = cardData.map((card) => {
        // Resim yoksa default görseli ekleyelim
        const images = card.images.length ? card.images : [defaultImage];
        return { ...card, images };
    });

    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                gap: "2rem",
            }}
        >
            {processCardData.length > 0 ? (
                processCardData.map((card, index) => (
                    <CardComponent
                        key={index}
                        images={card.images}
                        title={card.title}
                        price={card.price}

                    />

                ))
            ) : (
                <div>Veri bulunamadı.</div>
            )}
        </Box>
    );
};

export default CardListSection;
