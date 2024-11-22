import { useState } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function PremiumCard() {
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
    };

    return (
        <Box
            sx={{
                position: 'relative',
                margin: 2,
                padding: 20,
                width: '80%',
                height: 300,
                backgroundImage: 'url("/placeholder-350x300.png")',        
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 4,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    boxShadow: 8,
                    '& .hoverContent': {
                        opacity: 1,
                        transform: 'translateY(0)',
                    },
                },
                '@media (max-width: 600px)': {
                    margin: 'auto', // Mobilde ortalamak için
                },
            }}
        >
            {/* Mekan Adı ve İlçe / Semt */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    color: 'black',
                    padding: 1,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography variant="h6">İlçe / Semt</Typography>
                <Typography variant="subtitle1">Mekan Adı</Typography>
            </Box>

            {/* Hover İçeriği */}
            <Box
                className="hoverContent"
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%) translateY(20px)',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    padding: 2,
                    borderRadius: 1,
                    textAlign: 'center',
                    opacity: 0,
                    transition: 'all 0.3s ease-in-out',
                }}
            >
                <Typography variant="body1">
                    Mekan hakkında detaylı bilgi buraya eklenebilir.
                </Typography>
            </Box>

            {/* Ziyaret Et ve Kalp Butonu */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    color: 'white',
                    padding: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Button variant="contained" color="primary" size="small">
                    Ziyaret Et
                </Button>
                <IconButton onClick={handleLike} color="secondary">
                    {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
            </Box>
        </Box>
    );
}

export default PremiumCard;
