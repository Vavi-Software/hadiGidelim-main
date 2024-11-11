import { useState } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function PremiumBox() {
    const [liked, setLiked] = useState(false);
    const [response, setResponse] = useState('');

    const handleLike = () => {
        setLiked(!liked);
        setResponse(liked ? 'Beğeniniz geri alındı.' : 'Beğendiğiniz için teşekkürler!');
    };

    return (
        <Box
            sx={{
                position: 'relative',
                justifyContent: 'space-between',
                margin: 1,
                width: 350,
                height: 250,
                backgroundImage: 'url("/path-to-image.jpg")', // Görüntü yolunu değiştir
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 2,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    boxShadow: 8,
                    '& .overlay': {
                        opacity: 1,
                    },
                },
            }}
        >
            {/* Overlay */}
            <Box
                className="overlay"
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease-in-out',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    p: 2,
                    color: 'white',
                }}
            >
                {/* İlçe / Semt ve Mekan Adı */}
                <Box>
                    <Typography variant="h6">İlçe / Semt</Typography>
                    <Typography variant="subtitle1">Mekan Adı</Typography>
                </Box>

                {/* Ziyaret Et Butonu ve Kalp İkonu */}
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Button variant="contained" color="primary" size="small">
                        Ziyaret Et
                    </Button>
                    <IconButton onClick={handleLike} color="secondary">
                        {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                </Box>
            </Box>

            {/* Response Message */}
            {response && (
                <Typography
                    sx={{
                        position: 'absolute',
                        bottom: -25,
                        left: 16,
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        color: 'white',
                        padding: '4px 8px',
                        borderRadius: 1,
                        fontSize: '0.9rem',
                        transition: 'bottom 0.3s ease-in-out',
                    }}
                >
                    {response}
                </Typography>
            )}
        </Box>
    );
}

export default PremiumBox;
