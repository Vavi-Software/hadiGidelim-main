import React from 'react';
import { Box, Button, Typography, Card, CardContent, CardActions, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Navbar from '../components/common/navbar';
import Footer from '../components/common/footer';
import Carousel from '../components/common/carousel';

const ContactUs: React.FC = () => {
    const products = [
        {
            id: 1,
            price: '₺499',
            details: ['Yüksek Kalite', 'Hızlı Teslimat', '7/24 Destek'],
        },
        {
            id: 2,
            price: '₺799',
            details: ['Profesyonel Hizmet', 'Özel Tasarım', 'Garantili Çözüm'],
        },
        {
            id: 3,
            price: '₺999',
            details: ['VIP Destek', 'Uzun Vadeli Kullanım', 'Kullanıcı Dostu'],
        },
    ];

    return (
        <div>
            <Navbar />
            <Carousel height="25vh" />

            <Box sx={{ padding: '2rem', textAlign: 'center' }}>
                <Typography variant="h4" sx={{ marginBottom: '1rem', color: 'black' }}>
                    İletişim
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: '2rem' }}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: 'white',
                            color: 'red',
                            fontWeight: 'bold',
                            '&:hover': {
                                 backgroundColor: '#ea2d00',
                                 color: 'white',

                             },
                        }}
                        href="mailto:vavisoftware@gmail.com"
                    >
                        Mail Gönder
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: 'white',
                            color: 'red',
                            fontWeight: 'bold',
                            '&:hover': { 
                                backgroundColor: '#ea2d00',
                                color: 'white', },
                        }}
                        href="tel:+905462006739"
                    >
                        Telefon Et
                    </Button>
                </Box>
                <Grid container spacing={3}>
                    {products.map((product) => (
                        <Grid item xs={12} sm={12} md={4} key={product.id}>
                            <Card
                                sx={{
                                    backgroundColor: '#252525',
                                    color: 'white',
                                    height: '100%',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                                    },
                                }}
                            >
                                <CardContent>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: '#ea2d00',
                                            marginBottom: '1rem',
                                        }}
                                    >
                                        {product.price}
                                    </Typography>
                                    <List>
                                        {product.details.map((detail, index) => (
                                            <ListItem key={index} disablePadding>
                                                <ListItemIcon>
                                                    <CheckCircleIcon
                                                        sx={{
                                                            color: 'white',
                                                            animation: 'pop 0.5s ease',
                                                            '@keyframes pop': {
                                                                '0%': { transform: 'scale(0.8)' },
                                                                '50%': { transform: 'scale(1.2)' },
                                                                '100%': { transform: 'scale(1)' },
                                                            },
                                                        }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText primary={detail} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            color: 'white',
                                            borderColor: 'white',
                                            '&:hover': {
                                                 backgroundColor: 'red',
                                                border: '1px solid red',
                                                color: 'white',
                                            },
                                        }}
                                    >
                                        Daha Fazla Bilgi
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Footer />
        </div>
    );
};

export default ContactUs;
