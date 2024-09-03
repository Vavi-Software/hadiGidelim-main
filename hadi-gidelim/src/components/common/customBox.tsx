import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import "../../css/home.css";

function CustomBox() {
    return (
        <div className="page-bg">
            <Stack
                direction="column" // Always stack vertically
                spacing={2}
                sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    padding: "1rem",
                }}
            >
                {/* Image on top */}
                <Box
                    sx={{
                        width: "90rem", // Image width 90% of the page
                        height: "20rem",
                        display: "flex",
                        justifyContent: "center", // Center the image
                        alignItems: "center",
                    }}
                >
                    <a href="https://vavisoftware.com.tr">
                        <img
                            src="../../../public/logo.png"
                            alt="logo"
                            style={{
                                width: "100%",
                                maxWidth: "90vw", // Ensure the image doesn't exceed 90% of the viewport width
                                height: "auto",
                                marginBottom: "1rem",
                            }}
                        />
                    </a>
                </Box>

                {/* Text content below the image */}
                <Box
                    sx={{
                        margin: "1rem",
                        maxWidth: "30rem",
                        textAlign: "left", // Align text to the left
                    }}
                >
                    <h1>Some text here</h1>
                    <h4>Mekanın İsmi</h4>
                    <p>Mekanın Açıklaması konumu buraya gelecek</p>
                </Box>
            </Stack>
        </div>
    );
}

export default CustomBox;
