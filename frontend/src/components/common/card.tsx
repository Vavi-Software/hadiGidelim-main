import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Collapse from '@mui/material/Collapse'; // Animasyon için eklenen bileşen

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled(IconButton, {
    shouldForwardProp: (prop) => prop !== 'expand',
})<ExpandMoreProps>(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [expanded, setExpanded] = React.useState(false);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const businessName = "İşletmenin adı buraya gelecek";
    const location = "İşleteme İlçesi/ İşletme Semti";
    const imageUrl = "https://www.protan.com.tr/wp-content/uploads/2021/12/ankara-web-tasarim-1.jpg";
    const avatarUrl = "https://www.protan.com.tr/wp-content/uploads/2021/12/ankara-web-tasarim-1.jpg";
    const description = "Hadi Gidelim A.Ş. olarak, Türkiye'nin en güzel yerlerini sizlere tanıtmak için buradayız. Siz de bu güzelliklere tanıklık etmek istiyorsanız, hemen bize katılın!";

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={avatarUrl}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings" onClick={handleClick}>
                        <MoreVertIcon />
                    </IconButton>
                }
                title={businessName}
                subheader={location}
            />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Menü</MenuItem>
                <MenuItem onClick={handleClose}>Çekilişe Katıl</MenuItem>
            </Menu>
            <CardMedia
                component="img"
                height="194"
                image={imageUrl}
                alt="Paella dish"
            />

            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>

                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>

            {/* Açılır/kapanır içerik */}
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
