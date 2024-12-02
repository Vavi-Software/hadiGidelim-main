import  { useState } from "react";
import { Box, TextField, Button, MenuItem, Typography } from "@mui/material";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import axios from "axios";

const BusinessRegistration = () => {
    const [businessType, setBusinessType] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = async () => {
        if (!businessType || !businessName || !price || !image) {
            alert("Lütfen tüm alanları doldurun!");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/api/businesses", {
                businessType,
                businessName,
                price,
                image,
            });
            alert("İşletme başarıyla eklendi!");
            console.log("API Yanıtı:", response.data);
        } catch (error) {
            console.error("Hata:", error);
            alert("Bir hata oluştu, lütfen tekrar deneyin.");
        }
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
                    <MenuItem value="Eğlence">Eğlence</MenuItem>
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
