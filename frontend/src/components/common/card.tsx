import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface RecipeReviewCardProps {
    businessName: string;
    category: string;
    profilePhoto: string;
    productImage: string;
}

function RecipeReviewCard({
    businessName,
    category,
    profilePhoto,
    productImage,
}: RecipeReviewCardProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [menuUrl, setMenuUrl] = useState<string | null>(null);
    const [cekilisUrl, setCekilisUrl] = useState<string | null>(null);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        // Fetch URLs from the API
        fetch('https://api.example.com/urls')
            .then(response => response.json())
            .then(data => {
                setMenuUrl(data.menuUrl || 'https://vavisoftware.com.tr');
                setCekilisUrl(data.cekilisUrl || 'https://vavisoftware.com.tr/cekilis');
            })
            .catch(() => {
                setMenuUrl('https://vavisoftware.com.tr');
                setCekilisUrl('/cekilis');
            });
    }, []);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuClick = () => {
        window.location.href = menuUrl!;
    };

    const handleCekilisClick = () => {
        window.location.href = cekilisUrl!;
    };

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    const handleShareClick = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: businessName,
                    text: 'Check out this product!',
                    url: window.location.href,
                });
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            console.error('Share not supported on this browser');
        }
    };

    return (
        <Card sx={{ minWidth: 345, display: 'inline-block', margin: '1rem' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={profilePhoto}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings" onClick={handleClick}>
                        <MoreVertIcon />
                    </IconButton>
                }
                title={businessName}
                subheader={category}
            />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleMenuClick}>Menü</MenuItem>
                <MenuItem onClick={handleCekilisClick}>Çekilişe Katıl</MenuItem>
            </Menu>
            <CardMedia
                component="img"
                height="194"
                image={productImage}
                alt="Product Image"
            />
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={handleFavoriteClick}>
                    <FavoriteIcon sx={{ color: isFavorite ? red[500] : 'inherit' }} />
                </IconButton>
                <IconButton aria-label="share" onClick={handleShareClick}>
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default RecipeReviewCard;