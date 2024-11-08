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
                backgroundColor: '#f5f5f5',
                padding: 2,
                position: 'relative', // Make sure the logo is positioned within this container
                animation: 'backgroundAnimation 3s ease-in-out infinite', // Background animation
                '@keyframes backgroundAnimation': {
                    '0%': { backgroundColor: '#f5f5f5' },
                    '50%': { backgroundColor: '#e0e0e0' }, // Light gray in the middle
                    '100%': { backgroundColor: '#f5f5f5' },
                },
            }}
        >
            {/* Logo positioned in the background */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '10%',
                    left: '10%',
                    opacity: 0.1,
                    zIndex: -1, // Send the logo behind the form
                }}
            >
                <img src="/path/to/logo.png" alt="Logo" width={150} height={150} />
            </Box>

            <Box
                sx={{
                    width: '100%',
                    maxWidth: 400,
                    padding: 4,
                    borderRadius: 4,
                    boxShadow: 3,
                    backgroundColor: '#fff',
                    animation: 'fadeIn 1s ease-in-out',
                    '@keyframes fadeIn': {
                        from: { opacity: 0 },
                        to: { opacity: 1 },
                    },
                }}
            >
                <Typography
                    variant="h4"
                    sx={{ color: redColor, marginBottom: 3, textAlign: 'center' }}
                >
                    {isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
                </Typography>

                <TextField
                    label="E-posta"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{
                        borderColor: redColor,
                        marginBottom: 2,
                        '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: redColor } },
                    }}
                />
                <TextField
                    label="Şifre"
                    type="password"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{
                        borderColor: redColor,
                        marginBottom: 2,
                        '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: redColor } },
                    }}
                />
                <TextField
                    label="Şifre Tekrar"
                    type="password"
                    fullWidth
                    required
                    sx={{
                        borderColor: redColor,
                        marginBottom: 2,
                        '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: redColor } },
                    }
                    }></TextField>
                {!isLogin && (
                    <TextField
                        label="Kullanıcı Adı"
                        variant="outlined"
                        fullWidth
                        required
                        sx={{
                            borderColor: redColor,
                            marginBottom: 2,
                            '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: redColor } },
                        }}
                    />
                )}

                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                        backgroundColor: redColor,
                        color: '#fff',
                        width: '100%',
                        padding: 1.5,
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
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                >
                    {isLogin ? 'Kayıt Ol' : 'Giriş Yap'} Ekranına Geç
                </Button>
            </Box>

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
            <Button onClick={goToHome} sx={{
                position: 'absolute',
                top: 20,
                left: 20,
                color: redColor,
                fontWeight: 'bold',
                animation: 'fadeIn 1s ease-in-out' }}>
                İşletme Kayıt

            </Button>
        </Box>
    );
};

export default AuthForm;
