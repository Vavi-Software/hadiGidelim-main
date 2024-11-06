import * as React from 'react';
import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const redColor = '#ea2d00';

const AuthForm: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleToggle = () => {
        setIsLogin(!isLogin);
    };

    const handleSubmit = () => {
        console.log(isLogin ? 'Giriş yapılıyor...' : 'Kayıt olunuyor...');
    };

    const goToHome = () => {
        navigate('/');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                padding: 3,
                gap: 2,
                backgroundColor: '#fff',
                animation: 'fadeIn 1s ease-in-out',
                '@keyframes fadeIn': {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
            }}
        >
            <Typography variant="h4" sx={{ color: redColor, marginBottom: 3, animation: 'slideDown 0.5s ease-in-out' }}>
                {isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
            </Typography>

            <TextField label="E-posta" variant="outlined" fullWidth required
                       sx={{ borderColor: redColor, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: redColor }}}}
            />
            <TextField label="Şifre" type="password" variant="outlined" fullWidth required
                       sx={{ borderColor: redColor, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: redColor }}}}
            />
            {!isLogin && (
                <TextField label="Kullanıcı Adı" variant="outlined" fullWidth required
                           sx={{ borderColor: redColor, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: redColor }}}}
                />
            )}

            <Button
                variant="contained"

                onClick={handleSubmit}
                sx={{
                    backgroundColor: redColor,
                    color: '#fff',
                    width: '100%',
                    padding: 1,
                    marginTop: 2,
                    '&:hover': { backgroundColor: '#cc0000' },
                }}
            >
                {isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
            </Button>

            <Button
                variant="text"
                onClick={handleToggle}
                sx={{
                    color: redColor,
                    marginTop: 2,
                    fontWeight: 'bold',
                    textTransform: 'none',
                }}
            >
                {isLogin ? 'Kayıt Ol' : 'Giriş Yap'} Ekranına Geç
            </Button>

            <Button
                onClick={goToHome}
                sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    color: redColor,
                    fontWeight: 'bold',
                    animation: 'fadeIn 1s ease-in-out',
                }}
            >
                Ana Sayfaya Dön
            </Button>
        </Box>
    );
};

export default AuthForm;
