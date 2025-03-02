import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TextField,
  Grid,
  Box,
  SelectChangeEvent,
} from "@mui/material";
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

  const handleBusinessTypeChange = (event: SelectChangeEvent<string>) => {
    setBusinessType(event.target.value as string);
  };

  const handleSendMail = () => {
    const mailtoLink = `mailto:vavisoftware@gmail.com?subject=Yeni İşletme Başvurusu&body=İşletme Türü: ${businessType}%0Aİşletme Adı: ${business}%0AAdres: ${address}%0Aİlçe: ${district}%0ASemt: ${neighborhood}%0ATelefon: ${phone}%0AWeb Sitesi: ${website}`;
    window.location.href = mailtoLink; // Kullanıcıyı mail istemcisine yönlendir
  };

  const handleWhatsAppRedirect = () => {
    window.open("https://wa.me/905462006739", "_blank"); // WhatsApp'a yönlendirme
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          maxWidth: { xs: "100%", sm: "500px" },
          margin: "0 auto",
          padding: "20px",
          textAlign: "center",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <h1 style={{ color: "#ea2d00" }}>İşletme Kayıt</h1>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <FormControl
              fullWidth
              style={{ marginBottom: "15px", borderColor: "#ea2d00" }}
            >
              <InputLabel style={{ color: "black" }}>İşletme Türü</InputLabel>
              <Select
                value={businessType}
                onChange={handleBusinessTypeChange}
                label="İşletme Türü"
                style={{ borderColor: "#ea2d00", color: "black" }}
              >
                <MenuItem value="Gezilecek Mekan">Gezilecek Mekan</MenuItem>
                <MenuItem value="Lezzet">Lezzet</MenuItem>
                <MenuItem value="Kafe">Kafe</MenuItem>
                <MenuItem value="Konaklama">Konaklama</MenuItem>
                <MenuItem value="Hizmet">Hizmet</MenuItem>
                <MenuItem value="Eğlence">Eğlence</MenuItem>
                <MenuItem value="Spor">Spor</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="İşletme Adı"
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              style={{ marginBottom: "15px", borderColor: "#ea2d00" }}
              InputLabelProps={{ style: { color: "black" } }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Adres"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={{ marginBottom: "15px", borderColor: "#ea2d00" }}
              InputLabelProps={{ style: { color: "#000" } }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="İlçe"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              style={{ marginBottom: "15px", borderColor: "#ea2d00" }}
              InputLabelProps={{ style: { color: "#000" } }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Semt"
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
              style={{ marginBottom: "15px", borderColor: "#ea2d00" }}
              InputLabelProps={{ style: { color: "#000" } }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Telefon"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{ marginBottom: "15px", borderColor: "#ea2d00" }}
              InputLabelProps={{ style: { color: "#000" } }}
            />
          </Grid>

          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              label="Web Sitesi"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              style={{ marginRight: "10px", borderColor: "#ea2d00" }}
              InputLabelProps={{ style: { color: "#000" } }}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontSize: "14px",
                  color: "#000",
                }}
              >
                Web siteniz yoksa hemen bize ulaşın
              </label>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#ea2d00",
                  color: "#fff",
                  fontSize: "12px",
                }}
                onClick={handleWhatsAppRedirect}
              >
                Bize Ulaşın
              </Button>
            </div>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              style={{ backgroundColor: "#ea2d00", color: "#fff" }}
              onClick={handleSendMail}
            >
              Bilgileri Gönder
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default BusinessRegister;
