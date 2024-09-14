import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

interface BusinessCardProps {
    businessName: string;
    description: string;
    priceRange: string;
    discount: string;
    imageUrl: string;
    onButtonClick: () => void;
}

const BusinessCard = (props: BusinessCardProps) => {
    const { businessName, description, priceRange, discount, imageUrl, onButtonClick } = props;

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                position: 'relative',
                width: { xs: '100%', sm: '48%' },
                marginBottom: '20px',
            }}
        >
            <CardMedia
                component="img"
                sx={{ width: { xs: '100%', sm: '50%' }, height: 'auto' }}
                image={imageUrl}
                alt={businessName}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: { xs: '100%', sm: '50%' },
                    padding: '1rem',
                }}
            >
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {businessName}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {description}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" component="div">
                        {priceRange}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', pl: 1, pb: 1 }}>
                    <Button variant="contained" color="primary" onClick={onButtonClick}>
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
