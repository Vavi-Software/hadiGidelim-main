import React, { useState } from "react";
import { Box, TextField, Button, MenuItem, Typography } from "@mui/material";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import { useNavigate } from "react-router-dom";

const BusinessRegistration: React.FC = () => {
    const [businessType, setBusinessType] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!businessType || !businessName || !price || !image) {
            alert("Lütfen tüm alanları doldurun!");
            return;
        }

        // İşletme bilgilerini Local Storage'a kaydediyoruz
        const existingData = JSON.parse(localStorage.getItem(businessType) || "[]");
        const newData = [...existingData, { title: businessName, price, images: [image] }];
        localStorage.setItem(businessType, JSON.stringify(newData));

        console.log("Veri kaydedildi:", newData);  // Kaydedilen veriyi kontrol et

        alert("İşletme başarıyla eklendi!");
        navigate(`/${businessType}`); // İşletme türüne göre ilgili sayfaya yönlendirme
    };


    return (
        <>
            <Navbar />
            <Box
                sx={{
                    maxWidth: "600px",
                    margin: "2rem auto",
                    padding: "2rem",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                }}
            >
                <Typography variant="h5" sx={{ marginBottom: "1rem", textAlign: "center" }}>
                    İşletme Kayıt Formu
                </Typography>
                <TextField
                    select
                    label="İşletme Türü"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    fullWidth
                    margin="normal"
                >
                    <MenuItem value="Lezzet">Lezzet</MenuItem>
                    <MenuItem value="Konaklama">Konaklama</MenuItem>
                    <MenuItem value="Kafe">Kafe</MenuItem>
                    <MenuItem value="Eglence">Eğlence</MenuItem>
                    <MenuItem value="Hizmet">Hizmet</MenuItem>
                    <MenuItem value="Spor">Spor</MenuItem>
                </TextField>
                <TextField
                    label="İşletme Adı"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Fiyat"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Görsel URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ marginTop: "1rem" }}
                    onClick={handleSubmit}
                >
                    Kaydet
                </Button>
            </Box>
            <Footer />
        </>
    );
};

export default BusinessRegistration;
