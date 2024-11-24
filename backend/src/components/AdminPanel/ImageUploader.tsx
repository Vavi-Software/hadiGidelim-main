import React, { useState } from "react";
import { Box, Button, Typography, LinearProgress } from "@mui/material";
import Compressor from "compressorjs";

const compressImage = (file: File): Promise<File> => {
  return new Promise((resolve, reject) => {
    new Compressor(file, {
      quality: 0.6,
      success(result) {
        if (result instanceof Blob) {
          const compressedFile = new File([result], file.name, {
            type: result.type,
            lastModified: Date.now(),
          });
          resolve(compressedFile);
        } else {
          reject(new Error("Beklenmeyen sonuç tipi: Sıkıştırılmış dosya bir Blob değil."));
        }
      },
      error(err) {
        reject(err);
      },
    });
  });
};

const ImageUploader: React.FC = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [progress, setProgress] = useState<number | null>(null);
  const [compressedFile, setCompressedFile] = useState<File | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProgress(0); // İşlemin başladığını göster
      setFileName(file.name);
      try {
        const compressed = await compressImage(file);
        setCompressedFile(compressed);
        setProgress(100); // İşlemin tamamlandığını göster
      } catch (error) {
        console.error("Sıkıştırma hatası:", error);
      }
    }
  };

  const handleUpload = () => {
    if (compressedFile) {
      const formData = new FormData();
      formData.append("image", compressedFile);

      // Sunucuya gönderim burada yapılabilir:
      console.log("Gönderilen dosya:", compressedFile);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #FF0000",
        borderRadius: "10px",
        textAlign: "center",
        backgroundColor: "#FFF5F5",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "#FF0000",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Görsel Yükleme ve Sıkıştırma
      </Typography>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{
          display: "none",
        }}
        id="file-input"
      />
      <label htmlFor="file-input">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FF0000",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#CC0000",
            },
          }}
          component="span"
        >
          Görsel Seç
        </Button>
      </label>
      {fileName && (
        <Typography
          sx={{
            color: "#FF0000",
            marginTop: "10px",
            fontStyle: "italic",
          }}
        >
          {fileName} seçildi
        </Typography>
      )}
      {progress !== null && (
        <Box sx={{ width: "100%", marginTop: "20px" }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#FF0000",
              },
            }}
          />
        </Box>
      )}
      {compressedFile && (
        <Typography
          sx={{
            color: "#4CAF50",
            marginTop: "20px",
            fontWeight: "bold",
          }}
        >
          Dosya başarıyla sıkıştırıldı!
        </Typography>
      )}
      {compressedFile && (
        <Button
          onClick={handleUpload}
          variant="contained"
          sx={{
            backgroundColor: "#FF0000",
            color: "#FFFFFF",
            marginTop: "20px",
            "&:hover": {
              backgroundColor: "#CC0000",
            },
          }}
        >
          Gönder
        </Button>
      )}
    </Box>
  );
};

export default ImageUploader;
