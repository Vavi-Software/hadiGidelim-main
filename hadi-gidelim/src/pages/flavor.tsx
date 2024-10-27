// src/pages/Flavor.tsx
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import Carousel from "../components/common/carousel";
import FilterSection from "./filter";
import CardListSection from "../components/common/cardList"; // Güncellenmiş yol
import { Box, useMediaQuery, useTheme } from "@mui/material";

function Flavor() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // Tablet ve telefon kontrolü

    return (
        <div>
            <Navbar />
            <Carousel height="25vh" />

            <Box
                sx={{
                    display: "flex",
                    flexDirection: isSmallScreen ? "column" : "row",
                    padding: isSmallScreen ? "1rem" : "2rem 5rem",
                    gap: "2rem",
                }}
            >
                {/* Küçük ekranlarda üstte, büyük ekranlarda solda */}
                {isSmallScreen && <FilterSection />}

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        flex: 1,
                        gap: "2rem",
                    }}
                >
                    {!isSmallScreen && (
                        <Box sx={{ flexBasis: "30%" }}>
                            <FilterSection />
                        </Box>
                    )}

                    <Box sx={{ flexBasis: "70%" }}>
                        <CardListSection /> {/* Kart bölümünü buradan çağırıyoruz */}
                    </Box>
                </Box>
            </Box>

            <Footer />
        </div>
    );
}

export default Flavor;
