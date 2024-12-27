import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, Button, TextField } from "@mui/material";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";

const BusinessRegister: React.FC = () => {
    const [businessType, setBusinessType] = useState<string>("");
    const [business, setBusiness] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [district, setDistrict] = useState<string>("");
    const [neighborhood, setNeighborhood] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [website, setWebsite] = useState<string>("");

    const handleBusinessTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setBusinessType(event.target.value as string);
    };

    const handleSendMail = () => {
        const mailtoLink = `mailto:vavisoftware@gmail.com?subject=Yeni İşletme Başvurusu&body=İşletme Türü: ${businessType}%0Aİşletme Adı: ${business}%0AAdres: ${address}%0Aİlçe: ${district}%0ASemt: ${neighborhood}%0ATelefon: ${phone}%0AWeb Sitesi: ${website}`;
        window.location.href = mailtoLink; // Kullanıcıyı mail istemcisine yönlendir
    };

    return (
        <>
        <Navbar />
        <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px", textAlign: "center" }}>
            <h1>İşletme Kayıt</h1>
            <FormControl fullWidth style={{ marginBottom: "15px" }}>
                <InputLabel>İşletme Türü</InputLabel>
                <Select value={businessType} onChange={handleBusinessTypeChange} label="İşletme Türü">
                    <MenuItem value="Lezzet">Lezzet</MenuItem>
                    <MenuItem value="Kafe">Kafe</MenuItem>
                    <MenuItem value="Konaklama">Konaklama</MenuItem>
                    <MenuItem value="Hizmet">Hizmet</MenuItem>
                    <MenuItem value="Eğlence">Eğlence</MenuItem>
                    <MenuItem value="Spor">Spor</MenuItem>
                </Select>
            </FormControl>
            <TextField
                fullWidth
                label="İşletme Adı"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                style={{ marginBottom: "15px" }}
            />
            <TextField
                fullWidth
                label="Adres"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={{ marginBottom: "15px" }}
            />
            <TextField
                fullWidth
                label="İlçe"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                style={{ marginBottom: "15px" }}
            />
            <TextField
                fullWidth
                label="Semt"
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                style={{ marginBottom: "15px" }}
            />
            <TextField
                fullWidth
                label="Telefon"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{ marginBottom: "15px" }}
            />
            <TextField
                fullWidth
                label="Web Sitesi"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                style={{ marginBottom: "15px" }}
            />
            <Button variant="contained" color="primary" onClick={handleSendMail}>
                Bilgileri Gönder
            </Button>
        </div>
        <Footer ></Footer>

        </>

    );
};

export default BusinessRegister;
