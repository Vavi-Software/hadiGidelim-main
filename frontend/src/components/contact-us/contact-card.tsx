import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

interface ContactCardProps {
    imageUrl: string;
    title: string;
    description: string;
    price: string;
    contactButtonColor: string;
    mailButtonColor: string;
}

function ContactCard({ imageUrl,title,  description, price, contactButtonColor }: ContactCardProps) {
    return (
        <Card sx={{ minWidth: 300}}>
            <CardMedia
                component="img"
                height="140"
                image={imageUrl}
                alt="Product Image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="h6" color="text.primary">
                    {price}
                </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                <Button variant="contained" sx={{ backgroundColor: contactButtonColor }} href="tel:+905462006739">
                    Bize Ulaşın
                </Button>
                
            </Box>
        </Card>
    );
}

export default ContactCard;