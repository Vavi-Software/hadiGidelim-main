import React, { useState } from 'react';
import {
    TextField,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    Button,
    Box,
    Stack,
    Typography,
    SelectChangeEvent,
    Link,
} from '@mui/material';

const districtData: Record<string, string[]> = {
    Akyurt: ['Ahmetadil', 'Balıkhisar', 'Çalışkanlar', 'Çardakbağı', 'Yeşiltepe', 'Yıldırım'],
    Altındağ: ['Aydınlıkevler', 'Battalgazi', 'Beşikkaya', 'Bentderesi', 'Doğantepe', 'Hacettepe', 'Hamamönü', 'Karapürçek', 'Kale Mahallesi', 'Siteler', 'Ulus', 'Zübeyde Hanım'],
    Bala: ['Afşar', 'Bahçekaralı', 'Karahamzalı', 'Kesikköprü', 'Sarıhüyük', 'Yeniköy'],
    Beypazarı: ['Cumhuriyet', 'Fatih', 'İnözü', 'Karaşar', 'Yeni Mahalle', 'Zafer'],
    Çankaya: ['Ayrancı', 'Bahçelievler', 'Beytepe', 'Bilkent', 'Cebeci', 'Çukurambar', 'Dikmen', 'Gazi Osman Paşa', 'İncesu', 'Kızılay', 'Maltepe', 'Oran', 'Ümitköy', 'Yıldızevler'],
    Çubuk: ['Atatürk', 'Barbaros', 'Cumhuriyet', 'Kızılören', 'Tahtayazı', 'Yıldırım Beyazıt'],
    Elmadağ: ['Hasanoğlan', 'İstasyon', 'Kayadibi', 'Şentepe', 'Tatlıca', 'Yeni Mahalle'],
    Etimesgut: ['Ahi Mesut', 'Alsancak', 'Bağlıca', 'Elvankent', 'Eryaman', 'Göksu', 'Topçu Mahallesi', 'Turan Güneş', 'Yeşilova'],
    Evren: ['Bahçelievler', 'Çatalören', 'Kale', 'Yeni Mahalle'],
    Gölbaşı: ['Bahçelievler', 'Gazi Mahallesi', 'Hacılar', 'İncek', 'Karşıyaka', 'Karaoğlan', 'Tulumtaş'],
    Haymana: ['Bahçelievler', 'Cuma Mahallesi', 'Karakaya', 'Medrese', 'Yamak', 'Yenimahalle'],
    Kalecik: ['Kurtuluş', 'Ulucanlar', 'Yeni Mahalle', 'Yenişehir', 'Yenimahalle'],
    Kahramankazan: ['Akıncı', 'Fatih', 'Kayı', 'Saray', 'Yıldırım'],
    Keçiören: ['Aktepe', 'Atapark', 'Ayvalı', 'Esertepe', 'Etlik', 'Gazino', 'Kalaba', 'Kuşcağız', 'Pınarbaşı', 'Şefkat', 'Ufuktepe', 'Yayla'],
    Kızılcahamam: ['Bağlıca', 'Çağlayan', 'Güvem', 'Saray', 'Yenice'],
    Mamak: ['Akdere', 'Durali Alıç', 'Ege Mahallesi', 'General Zeki Doğan', 'Gülveren', 'Karaağaç', 'Kutlu', 'Mutlu', 'Saimekadın', 'Şahintepe', 'Tuzluçayır'],
    Nallıhan: ['Çayırhan', 'Uluhan'],
    Polatlı: ['Cumhuriyet', 'Fatih', 'Gazi Mahallesi', 'Şentepe', 'Sakarya', 'Yeni Mahalle', 'Zafer'],
    Pursaklar: ['Altınova', 'Karacaören', 'Merkez Mahallesi', 'Mimar Sinan', 'Saray', 'Tevfik İleri'],
    Sincan: ['Akşemsettin', 'Atatürk Mahallesi', 'Fatih', 'Mevlana', 'Osmaniye', 'Pınarbaşı', 'Törekent', 'Ulubatlı', 'Yenikent'],
    Yenimahalle: ['Batıkent', 'Demetevler', 'Gazi Mahallesi', 'İvedik', 'Karşıyaka', 'Macunköy', 'Ostim', 'Ragıp Tüzün', 'Şentepe', 'Yeniçağ', 'Yuva']

};

const BusinessForm: React.FC = () => {
    const [businessType, setBusinessType] = useState('');
    const [website, setWebsite] = useState('');
    const [business, setBusiness] = useState('');
    const [address, setAddress] = useState('');
    const [district, setDistrict] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [phone, setPhone] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isWebsiteValid, setIsWebsiteValid] = useState(true);

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
        setNeighborhood('');
    };

    const handleNeighborhoodChange = (event: SelectChangeEvent<string>) => {
        setNeighborhood(event.target.value);
    };

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    };

    const handleSubmit = () => {
        if (website === '') {
            setIsWebsiteValid(false);
            return;
        }

        const mailtoLink = `mailto:vavisoftware@gmail.com?subject=Yeni İşletme Başvurusu&body=İşletme Türü: ${businessType}%0Aİşletme Adı: ${business}%0AAdres: ${address}%0Aİlçe: ${district}%0ASemt: ${neighborhood}%0ATelefon: ${phone}%0AWeb Sitesi: ${website}`;
        window.location.href = mailtoLink;

        setIsSubmitted(true);
        setWebsite('');
        setBusiness('');
        setAddress('');
        setDistrict('');
        setNeighborhood('');
        setPhone('');
    };

    return (
        <Box sx={{ padding: '2rem', width: '100%', maxWidth: 600, margin: 'auto', position: 'relative' }}>
            <Stack spacing={3}>
                {/* Logo */}
                <Box sx={{ textAlign: 'center', marginBottom: '1rem' }}
                >
                    <img src="../../public/logo.png" alt="Logo" style={{ height: '50px' }} />
                </Box>

                {/* Ana Sayfa Linki */}
                <Box sx={{ textAlign: 'center', marginBottom: '1rem' }}>
                    <Link href="/" underline="none" sx={{ 
                        fontSize: '1.2rem', 
                        fontFamily: 'Arial',
                        fontWeight: 'bold', 
                        color: '#ea2d00',
                        border: '1px solid #ea2d00',
                        padding: '0.5rem 1rem',
                        borderRadius: '5px',
                        ":hover": {
                            backgroundColor: '#ea2d00',
                            color: 'white',
                        }
                        }}>
                        Ana Sayfa
                    </Link>
                </Box>

                {/* İşletme Türü */}
                <FormControl fullWidth>
                    <InputLabel>İşletme Türü</InputLabel>
                    <Select value={businessType} onChange={handleBusinessTypeChange} label="İşletme Türü">
                        <MenuItem value="Lezzet">Lezzet</MenuItem>
                        <MenuItem value="Kafe">Kafe</MenuItem>
                        <MenuItem value="Konaklama">Konaklama</MenuItem>
                        <MenuItem value="Hizmet">Hizmet</MenuItem>
                        <MenuItem value="Eglence">Eğlence</MenuItem>
                        <MenuItem value="Spor">Spor</MenuItem>
                    </Select>
                </FormControl>

                {/* Web Sitesi */}
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

                {/* İlçe ve Semt */}
                <Stack direction="row" spacing={2}>
                    <FormControl fullWidth>
                        <InputLabel>İlçe</InputLabel>
                        <Select value={district} onChange={handleDistrictChange} label="İlçe">
                            {Object.keys(districtData).map((districtName) => (
                                <MenuItem key={districtName} value={districtName}>
                                    {districtName}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel>Semt</InputLabel>
                        <Select
                            value={neighborhood}
                            onChange={handleNeighborhoodChange}
                            label="Semt"
                            disabled={!district}
                        >
                            {(districtData[district] || []).map((neighborhoodName) => (
                                <MenuItem key={neighborhoodName} value={neighborhoodName}>
                                    {neighborhoodName}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Stack>

                {/* Telefon Numarası */}
                <TextField
                    label="Telefon Numarası"
                    value={phone}
                    onChange={handlePhoneChange}
                    fullWidth
                    type="tel"
                    placeholder="Örnek: 0532 123 4567"
                />

                {/* İşletme Adı */}
                <TextField
                    label="Lütfen İşletme Adınızı Giriniz"
                    value={business}
                    onChange={handleBusinessChange}
                    fullWidth
                />

                {/* Açık Adres */}
                <TextField
                    label="İşletmenizin Açık Adresini Giriniz"
                    value={address}
                    onChange={handleAddressChange}
                    fullWidth
                />

                {/* Kaydet Butonu */}
                <Button
                    variant="contained"
                    sx={{
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

            {/* Alt Yazı */}
            <Typography
                variant="body2"
                sx={{
                    textAlign: 'center',
                    marginTop: '2rem',
                    fontWeight: 'bold',
                }}
            >
                © 2024 VAVI Software
            </Typography>
        </Box>
    );
};

export default BusinessForm;
