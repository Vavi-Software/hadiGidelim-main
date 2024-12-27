import Box from "@mui/material/Box";
import { Stack, Typography, Button } from "@mui/material";
import "../../css/home.css";

function YoutubeSection() {
    return (
        <div className="page-bg">
            <Stack
                direction={{ xs: "column", sm: "row" }} // Responsive direction (column on small screens, row on tablet and larger)
                spacing={2}
                sx={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: { xs: "2rem", md: "4rem" }, // Uniform padding for consistent spacing
                    boxSizing: "border-box",
                }}
            >
                {/* Text section */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "50%" },
                        maxWidth: "30rem",
                        textAlign: "left",
                    }}
                >
                    <Typography variant="body1">
                        Ankara'nın gezi rehberi Hadi Gidelim'e hoş geldiniz. Hadi  Gidelim nedir,
                        nasıl kullanılır, neler yapılır, neler gezilir, neler yenir, nerede kalınır
                        gibi sorularınıza cevap bulabileceğiniz bir platformdur. Daha detaylı anlatım için
                        hemen link üzerinden ulaşarak youtube videomuzu izleyebilirsiniz.

                    </Typography>

                    {/* Visit button */}
                    <Button
                        variant="contained"

                        color="primary"
                        href="https://vavisoftware.com.tr"
                        sx={{
                            marginTop: "1rem",
                            backgroundColor: "#ea2d00",


                            "&:hover": {
                                backgroundColor: "#cc0000",
                            },
                        }}
                    >
                        Hadi Gidelim Tanıtım Videosu
                    </Button>
                </Box>

                {/* Image section */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "50%" },
                        display: "flex",
                        justifyContent: { xs: "center", md: "flex-end" },
                    }}
                >
                    <a href="https://vavisoftware.com.tr">
                        <img
                            src="/icon-logo.png"
                            alt="Mekan Fotoğrafı"
                            style={{
                                maxWidth: "100%",
                                maxHeight: "15rem",
                                borderRadius: "8px",
                            }}
                        />
                    </a>
                </Box>
            </Stack>
        </div>
    );
}

export default YoutubeSection;
