import * as React from "react";
import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const redColor = "#ea2d00";

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [noBorder, setNoBorder] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setNoBorder(false); // Reset border when switching screens
  };

  const handleSubmit = () => {
    console.log(isLogin ? "Giriş yapılıyor..." : "Kayıt olunuyor...");
    if (isLogin) {
      // Check for login credentials
      const username = "kadir";
      const password = "1234";
      if (username === "kadir" && password === "1234") {
        navigate("/"); // Redirect to home page after successful login
      }
    } else {
      // Handle registration
      setNoBorder(true); // Remove input borders when submitting
    }
  };

  const goToHome = () => {
    navigate("/");
  };

  const goToBusinessRegister = () => {
    navigate("/isletmekayit");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        padding: 2,
        position: "relative",
        animation: "backgroundAnimation 3s ease-in-out infinite",
        "@keyframes backgroundAnimation": {
          "0%": { backgroundColor: "#f5f5f5" },
          "50%": { backgroundColor: "#e0e0e0" },
          "100%": { backgroundColor: "#f5f5f5" },
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "10%",
          opacity: 0.1,
          zIndex: -1,
        }}
      >
        <img src="/path/to/logo.png" alt="Logo" width={150} height={150} />
      </Box>

      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          padding: 4,
          borderRadius: 4,
          boxShadow: 3,
          backgroundColor: "#fff",
          animation: "fadeIn 1s ease-in-out",
          "@keyframes fadeIn": {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: redColor, marginBottom: 3, textAlign: "center" }}
        >
          {isLogin ? "Giriş Yap" : "Kayıt Ol"}
        </Typography>

        <TextField
          label="E-posta"
          variant="outlined"
          fullWidth
          required
          InputLabelProps={{
            sx: { color: noBorder ? "transparent" : redColor },
          }}
          InputProps={{
            sx: {
              backgroundColor: "#f7f7f7",
              "& fieldset": {
                borderColor: noBorder ? "transparent" : redColor,
              },
            },
          }}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Şifre"
          type="password"
          variant="outlined"
          fullWidth
          required
          InputLabelProps={{
            sx: { color: noBorder ? "transparent" : redColor },
          }}
          InputProps={{
            sx: {
              backgroundColor: "#f7f7f7",
              "& fieldset": {
                borderColor: noBorder ? "transparent" : redColor,
              },
            },
          }}
          sx={{ marginBottom: 2 }}
        />
        {!isLogin && (
          <>
            <TextField
              label="Şifre Tekrar"
              type="password"
              variant="outlined"
              fullWidth
              required
              InputLabelProps={{
                sx: { color: noBorder ? "transparent" : redColor },
              }}
              InputProps={{
                sx: {
                  backgroundColor: "#f7f7f7",
                  "& fieldset": {
                    borderColor: noBorder ? "transparent" : redColor,
                  },
                },
              }}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Kullanıcı Adı"
              variant="outlined"
              fullWidth
              required
              InputLabelProps={{
                sx: { color: noBorder ? "transparent" : redColor },
              }}
              InputProps={{
                sx: {
                  backgroundColor: "#f7f7f7",
                  "& fieldset": {
                    borderColor: noBorder ? "transparent" : redColor,
                  },
                },
              }}
              sx={{ marginBottom: 2 }}
            />
          </>
        )}

        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            backgroundColor: redColor,
            color: "#fff",
            width: "100%",
            padding: 1.5,
            marginTop: 2,
            "&:hover": { backgroundColor: "#cc0000" },
          }}
        >
          {isLogin ? "Giriş Yap" : "Kayıt Ol"}
        </Button>

        <Button
          variant="text"
          onClick={handleToggle}
          sx={{
            color: redColor,
            marginTop: 2,
            fontWeight: "bold",
            textTransform: "none",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {isLogin ? "Kayıt Ol" : "Giriş Yap"} Ekranına Geç
        </Button>
      </Box>

      {/* Home and Business Register Buttons */}
      <Button
        onClick={goToHome}
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          color: redColor,
          fontWeight: "bold",
          animation: "fadeIn 1s ease-in-out",
        }}
      >
        Ana Sayfaya Dön
      </Button>
      <Button
        onClick={goToBusinessRegister}
        sx={{
          position: "absolute",
          top: 20,
          left: 20,
          color: redColor,
          fontWeight: "bold",
          animation: "fadeIn 1s ease-in-out",
        }}
      >
        İşletme Kayıt
      </Button>
    </Box>
  );
};

export default AuthForm;
