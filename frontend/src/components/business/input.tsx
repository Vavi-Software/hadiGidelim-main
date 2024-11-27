import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Select, MenuItem, Checkbox, FormControlLabel, InputLabel, FormControl } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import "../../css/business.css";

// Type for the product and other details
type Product = {
  image: File;
  name: string;
  price: string;
};

type District = {
  name: string;
  neighborhoods: string[];
};

function BusinessInput() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [openingHour, setOpeningHour] = useState<string>("");
  const [closingHour, setClosingHour] = useState<string>("");
  const [paymentMethods, setPaymentMethods] = useState<string[]>([]);
  const [businessName, setBusinessName] = useState<string>("");
  const [selectedPeriod, setSelectedPeriod] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>("");
  const [districts, setDistricts] = useState<District[]>([]); // Assume you have the district data somewhere

  // Fetching district data (this should be your data source for district/neighborhood)
  useEffect(() => {
    // Simulating district data fetch
    const districtData = [
      { name: "Çankaya", neighborhoods: ["Kocatepe", "Bahçelievler", "Tunali"] },
      { name: "Keçiören", neighborhoods: ["İncirli", "Şehitler", "Aşağı Yuva"] }
    ];
    setDistricts(districtData);
  }, []);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      setSelectedImages((prevImages) => [...prevImages, ...files]);
    }
  };

  const handleAddProduct = (image: File) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      { image, name: `Ürün ${prevProducts.length + 1}`, price: "" },
    ]);
  };

  const handleProductChange = (
    index: number,
    field: "name" | "price",
    value: string
  ) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = value;
    setProducts(updatedProducts);
  };

  const handlePaymentChange = (method: string) => {
    setPaymentMethods((prev) =>
      prev.includes(method)
        ? prev.filter((item) => item !== method)
        : [...prev, method]
    );
  };

  const handleSave = () => {
    const businessDetails = {
      businessName,
      products,
      openingHour,
      closingHour,
      paymentMethods,
      selectedPeriod,
      selectedDistrict,
      selectedNeighborhood,
    };
    console.log("Business Details:", businessDetails);
    alert("Bilgiler başarıyla kaydedildi!");
  };

  const handleImageChangeManual = (index: number, newImage: File) => {
    const updatedImages = [...selectedImages];
    updatedImages[index] = newImage;
    setSelectedImages(updatedImages);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
<label >İşletme Adı</label>
      {/* İşletme Adı */}
      <TextField
        label="İşletme Adı"
        value={businessName}
        onChange={(e) => setBusinessName(e.target.value)}
        fullWidth
        sx={{ marginBottom: "10px" }}
      />

      {/* Fotoğraf Seçimi */}
      <label>Tanıtım fotoğrafları Ekle(3 )</label>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleImageChange}
      />

      {/* Carousel ve Ürün Detayları */}
      {selectedImages.length > 0 && (
        <Carousel
          autoPlay={false} // Disable automatic slide change
          navButtonsAlwaysVisible
          indicators
        >
          {selectedImages.map((image, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                margin: "10px 0",
              }}
            >
              <img
                src={URL.createObjectURL(image)}
                alt={`Fotoğraf ${index + 1}`}
                style={{ maxHeight: "300px", maxWidth: "100%" }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: "10px" }}
                onClick={() => handleAddProduct(image)}
              >
                Ürünü Ekle
              </Button>
              {/* Fotoğraf değiştirme butonu */}
              <Button
                variant="outlined"
                color="secondary"
                sx={{ marginTop: "10px" }}
                onClick={() => {
                  const newImage = prompt("Yeni fotoğraf seçin: ");
                  if (newImage) handleImageChangeManual(index, newImage as any);
                }}
              >
                Fotoğrafı Değiştir
              </Button>
            </Box>
          ))}
        </Carousel>
      )}

      {/* Ürün Detayları */}
      {products.map((product, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "20px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        >
          <h3>{product.name}</h3>
          <TextField
            label="Ürün Adı"
            value={product.name}
            onChange={(e) => handleProductChange(index, "name", e.target.value)}
            fullWidth
            sx={{ marginBottom: "10px" }}
          />
          <TextField
            label="Fiyat"
            value={product.price}
            onChange={(e) => handleProductChange(index, "price", e.target.value)}
            fullWidth
            type="number"
            sx={{ marginBottom: "10px" }}
          />
        </Box>
      ))}

      {/* Günün Dilimi Seçimi */}
      <FormControl fullWidth sx={{ marginBottom: "10px" }}>
        <InputLabel id="time-period-label">Günün Dilimi</InputLabel>
        <Select
          labelId="time-period-label"
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
        >
          <MenuItem value="06:00 - 12:00">06:00 - 12:00</MenuItem>

          <MenuItem value="12:00 - 18:00">12:00 - 18:00</MenuItem>
          <MenuItem value="18:00 - 24:00">18:00 - 24:00</MenuItem>
          <MenuItem value="00:00 - 06:00">00:00 - 06:00</MenuItem>
        </Select>
      </FormControl>

      {/* İlçe ve Semt Seçimi */}
      <FormControl fullWidth sx={{ marginBottom: "10px" }}>
        <InputLabel id="district-label">İlçe</InputLabel>
        <Select
          labelId="district-label"
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
        >
          {districts.map((district, index) => (
            <MenuItem key={index} value={district.name}>
              {district.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedDistrict && (
        <FormControl fullWidth sx={{ marginBottom: "10px" }}>
          <InputLabel id="neighborhood-label">Semt</InputLabel>
          <Select
            labelId="neighborhood-label"
            value={selectedNeighborhood}
            onChange={(e) => setSelectedNeighborhood(e.target.value)}
          >
            {districts
              .find((district) => district.name === selectedDistrict)
              ?.neighborhoods.map((neighborhood, index) => (
                <MenuItem key={index} value={neighborhood}>
                  {neighborhood}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      )}

      {/* Çalışma Saatleri */}
      <TextField
        label="Açılış Saati"
        value={openingHour}
        onChange={(e) => setOpeningHour(e.target.value)}
        fullWidth
        sx={{ marginBottom: "10px" }}
      />
      <TextField
        label="Kapanış Saati"
        value={closingHour}
        onChange={(e) => setClosingHour(e.target.value)}
        fullWidth
        sx={{ marginBottom: "10px" }}
      />

      {/* Ödeme Yöntemleri */}
      <FormControlLabel
        control={<Checkbox checked={paymentMethods.includes("Kredi Kartı")} onChange={() => handlePaymentChange("Kredi Kartı")} />}
        label="Kredi Kartı"
      />
      <FormControlLabel
        control={<Checkbox checked={paymentMethods.includes("Nakit")} onChange={() => handlePaymentChange("Nakit")} />}
        label="Nakit"
      />

      <Button variant="contained" color="primary" onClick={handleSave}>
        Kaydet
      </Button>
    </Box>
  );
}

export default BusinessInput;
