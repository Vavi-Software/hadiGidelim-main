import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

interface BusinessCardProps {
    businessName: string;
    image: string;
    name: string;
    description: string;
    priceRange: string;
    discount: string;
    link: string;
    imageUrl: string;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ image, name, description, priceRange, discount, link }) => {
    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' }, // Stack on small screens, side-by-side on larger screens
                position: 'relative',
                width: { xs: '100%', sm: '48%' }, // Full width on mobile, 48% width on larger screens
                marginBottom: '20px',
                marginX: { xs: '0', sm: '1%' }, // Add some horizontal margin on larger screens
            }}
        >
            <CardMedia
                component="img"
                sx={{ width: { xs: '100%', sm: '50%' } }} // Full width on mobile, half width on larger screens
                image={image}
                alt={name}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', sm: '50%' } }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {description}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" component="div">
                        {priceRange}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', pl: 1, pb: 1 }}>
                    <Button variant="contained" color="primary" href={link}>
                        Visit
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    backgroundColor: 'red',
                    color: 'white',
                    padding: '5px 10px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                }}
            >
                {discount}
            </Box>
        </Card>
    );
};

export default BusinessCard;
