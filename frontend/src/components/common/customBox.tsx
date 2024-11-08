import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import "../../css/home.css";

function CustomBox() {
    return (
        <div className="page-bg">
            <Stack
                direction="row"
                spacing={2}
                sx={{
                    alignItems: "center", // Center vertically
                    justifyContent: "space-between", // Distribute space between items
                    width: "100%",
                }}
            >
                {/* Text aligned to the left */}
                <Box
                    sx={{
                        margin: "10rem",
                        maxWidth: "30rem",
                        maxHeight: "30rem",
                        height: "1rem",
                        textAlign: "left", // Align text to the left
                    }}
                >
                    <h1>Ayın Mekanı</h1>
                    <h4>Mekanın İsmi</h4>
                    <p>Mekanın Açıklmaası konumu buraya gelecek</p>
                </Box>

                <Box
                    sx={{
                        width: "50%",
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    <a href="https://vavisoftware.com.tr">
                    <img
                        src="../../../public/anitkabir.jpg"
                        alt="logo"
                        style={{
                            margin: "10rem",
                            maxWidth: "30rem",
                            maxHeight: "15rem",

                    }}
                    /></a>
                </Box>
            </Stack>
        </div>
    );
}

export default CustomBox;
