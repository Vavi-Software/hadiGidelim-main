import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

const CardContainer = styled(Box)({
    position: 'relative',
    width: '100%',
    height: '200px', // Adjust as needed
    margin: '10px',
    overflow: 'hidden',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
    },
});

const HoverContent = styled(Box)({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '10px',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    opacity: 0,
    transition: 'opacity 0.3s',
    '&:hover': {
        opacity: 1,
    },
});

const PremiumCard: React.FC<{ title: string }> = ({ title }) => {
    return (
        <CardContainer>
            <HoverContent>
                <Typography variant="h6">{title}</Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        alignSelf: 'flex-end',
                        marginTop: 'auto',
                    }}
                >
                    Ziyaret Et
                </Button>
                <Typography variant="body2" sx={{ position: 'absolute', bottom: '10px', left: '10px' }}>
                    İlçe / Semt
                </Typography>
            </HoverContent>
        </CardContainer>
    );
};

export default PremiumCard;
