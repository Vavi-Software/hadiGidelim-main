import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { addCardToDB } from '../services/api';

const IsletmeEkleme = () => {
    const [formData, setFormData] = useState({ title: '', description: '', image: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            await addCardToDB(formData);
            setFormData({ title: '', description: '', image: '' });
            alert('İşletme başarıyla eklendi!');
        } catch (error) {
            console.error('İşletme eklenirken hata oluştu:', error);
        }
    };

    return (
        <Box sx={{ width: '50%', margin: 'auto', mt: 4 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
                İşletme Ekleme
            </Typography>
            <TextField
                label="Başlık"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                label="Açıklama"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                label="Görsel URL"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                fullWidth
                sx={{ mb: 2 }}
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Kaydet
            </Button>
        </Box>
    );
};

export default IsletmeEkleme;
