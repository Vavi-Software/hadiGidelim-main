import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

const BusinessForm: React.FC = () => {
  const [businessType, setBusinessType] = useState<string>("");
  const [businessName, setBusinessName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [city, setCity] = useState<string>("");

  const handleSubmit = () => {
    console.log({
      businessType,
      businessName,
      location,
    });
    alert("İşletme başarıyla kaydedildi!");
  };

  return (
    <Box
      sx={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #FF0000",
        borderRadius: "10px",
        backgroundColor: "#FFF5F5",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "#FF0000",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        İşletme Ekleme Formu
      </Typography>

      <FormControl fullWidth sx={{ marginBottom: "20px" }}>
        <InputLabel id="business-type-label">İşletme Türü</InputLabel>
        <Select
          labelId="business-type-label"
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
          label="İşletme Türü"
        >
          <MenuItem value="Tür 1">Tür 1</MenuItem>
          <MenuItem value="Tür 2">Tür 2</MenuItem>
          <MenuItem value="Tür 3">Tür 3</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="İşletme Adı"
        fullWidth
        sx={{ marginBottom: "20px" }}
        value={businessName}
        onChange={(e) => setBusinessName(e.target.value)}
      />

      <TextField
        label="Konum"
        fullWidth
        sx={{ marginBottom: "20px" }}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        helperText="Konum seçmek için harita özelliği eklenebilir."
      />
  
  <FormControl fullWidth sx={{ marginBottom: "20px" }}>
        <InputLabel id="business-type-label">İşletme Türü</InputLabel>
        <Select
          labelId="business-type-label"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          label="İşletme Türü"
        >
          <MenuItem value="Çankaya">Çankaya</MenuItem>
          <MenuItem value="Polatlı">Polatlı</MenuItem>
          <MenuItem value="Tür 3">Tür 3</MenuItem>
        </Select>
      </FormControl>
        
      

      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{
          backgroundColor: "#FF0000",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#CC0000",
          },
        }}
      >
        Kaydet
      </Button>
    </Box>
  );
};

export default BusinessForm;
