import Navbar from "../components/common/navbar.tsx";
import Footer from "../components/common/footer.tsx";
import Carousel from "../components/common/carousel.tsx";
import {Box, useMediaQuery, useTheme} from "@mui/material";
import FilterSection from "./filter.tsx";
import CardListSection from "../components/common/cardList.tsx";

function Cafe() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // Tablet ve telefon kontrolü

    return (
        <div>
            <Navbar></Navbar>

            <Carousel height="25vh"/>
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

            <Footer></Footer>
        </div>
    );
}

export default Cafe;
