import React, { useState } from 'react';
import { TextField, MenuItem, Select, InputLabel, FormControl, Button, Box, Stack, SelectChangeEvent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BusinessForm: React.FC = () => {
    const [businessType, setBusinessType] = useState('');
    const [website, setWebsite] = useState('');
    const [business, setBusiness] = useState('');
    const [address, setAddress] = useState('');
    const [district, setDistrict] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isWebsiteValid, setIsWebsiteValid] = useState(true);
    const navigate = useNavigate();

    const handleBusinessTypeChange = (event: SelectChangeEvent<string>) => {
        setBusinessType(event.target.value);
    };

    const handleWebsiteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWebsite(event.target.value);
        setIsWebsiteValid(true);
    };

    const handleBusinessChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBusiness(event.target.value);
    };

    const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value);
    };

    const handleDistrictChange = (event: SelectChangeEvent<string>) => {
        setDistrict(event.target.value);
    };

    const handleNeighborhoodChange = (event: SelectChangeEvent<string>) => {
        setNeighborhood(event.target.value);
    };

    const handleSubmit = () => {
        if (website === '') {
            setIsWebsiteValid(false);
            return;
        }

        const mailtoLink = `mailto:vavisoftware@gmail.com?subject=Yeni İşletme Başvurusu&body=İşletme Türü: ${businessType}%0Aİşletme Adı: ${business}%0AAdres: ${address}%0ASemt: ${district}%0Aİlçe: ${neighborhood}%0AWeb Sitesi: ${website}`;
        window.location.href = mailtoLink;

        setIsSubmitted(true);
        setWebsite('');
        setBusiness('');
        setAddress('');
        setDistrict('');
        setNeighborhood('');
    };

    const goToHomePage = () => {
        navigate('/');
    };

    return (
        <Box sx={{ padding: '2rem', width: '100%', maxWidth: 600, margin: 'auto', position: 'relative', minHeight: '100vh' }}>
            {/* Logo Sol Üstte */}
            <Box sx={{ position: 'absolute', top: 20, left: 20 }}>
                <img src="../../public/logo.png" alt="Logo" style={{ height: '40px' }} />
            </Box>

            {/* Ana Sayfaya Dön Butonu Sağ Üstte */}
            <Box sx={{ position: 'absolute', top: 20, right: 20 }}>
                <Button variant="outlined" onClick={goToHomePage}>
                    Ana Sayfaya Dön
                </Button>
            </Box>

            <Stack spacing={3}
            sx={{
                marginTop: 10,
                display: 'flex',
               
            }}
            >
                <FormControl fullWidth>
                    <InputLabel>İşletme Türü</InputLabel>
                    <Select
                        value={businessType}
                        onChange={handleBusinessTypeChange}
                        label="İşletme Türü"
                    >
                        <MenuItem value="restaurant">Lezzet</MenuItem>
                        <MenuItem value="cafe">Kafe</MenuItem>
                        <MenuItem value="hotel">Konaklama</MenuItem>
                        <MenuItem value="store">Hizmet</MenuItem>
                        <MenuItem value="store">Eğlence</MenuItem>
                        <MenuItem value="store">Spor</MenuItem>
                    </Select>
                </FormControl>

                {businessType && (
                    <TextField
                        label="Web Sitesi Linki(Web Sitesi Yok İse Bize Ulaşın)"
                        value={website}
                        onChange={handleWebsiteChange}
                        fullWidth
                        error={!isWebsiteValid}
                        helperText={!isWebsiteValid ? "Web siteniz yoksa kayıt yapamamaktasınız. Hemen yaptırın." : ""}
                    />
                )}

                {!website && businessType && !isWebsiteValid && (
                    <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
                        Bize Ulaşın
                    </Button>
                )}

                <Stack direction="row" spacing={2}>
                    <FormControl fullWidth>
                        <InputLabel>Semt</InputLabel>
                        <Select
                            value={district}
                            onChange={handleDistrictChange}
                            label="Semt"
                        >
                            <MenuItem value="district1">Semt 1</MenuItem>
                            <MenuItem value="district2">Semt 2</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel>İlçe</InputLabel>
                        <Select
                            value={neighborhood}
                            onChange={handleNeighborhoodChange}
                            label="İlçe"
                        >
                            <MenuItem value="neighborhood1">İlçe 1</MenuItem>
                            <MenuItem value="neighborhood2">İlçe 2</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>

                <TextField
                    label="Lütfen İşletme Adınızı Giriniz"
                    value={business}
                    onChange={handleBusinessChange}
                    fullWidth
                />
                <TextField
                    label="İşletmenizin Açık Adresini Giriniz"
                    value={address}
                    onChange={handleAddressChange}
                    fullWidth
                />

                <Button 
                    variant="contained" 
                    sx={{
                        marginTop: 2, 
                        backgroundColor: '#ea2d00',
                        color: 'white',
                        fontWeight: 'bold',
                        padding: 1.5,
                        width: '100%',
                    }} 
                    onClick={handleSubmit}
                >
                    Kaydet
                </Button>

                {isSubmitted && (
                    <Typography variant="body1" sx={{ marginTop: 2, textAlign: 'center' }}>
                        Başvurunuz gönderildi, 1-4 iş günü içinde dönüş yapılacaktır.
                    </Typography>
                )}
            </Stack>

            {/* Copyright Mesajı Alt Kısımda */}
            <Box sx={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', textAlign: 'center', width: '100%' }}>
                <hr />
                <Typography variant="body2" color="textSecondary">
                    &copy; VAVISOFTWARE 2024
                </Typography>
            </Box>
        </Box>
    );
};

export default BusinessForm;
