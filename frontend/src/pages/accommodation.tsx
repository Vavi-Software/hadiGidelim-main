import Navbar from "../components/common/navbar.tsx";
import Footer from "../components/common/footer.tsx";
import Carousel from "../components/common/carousel.tsx";
import {Box, Card, useMediaQuery, useTheme} from "@mui/material";
import FilterSection from "../components/common/filter.tsx";

function Accommodation() {
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

                    <Box sx={{ flexBasis: "100%" }}>
                        <Card></Card>
                    </Box>
                </Box>
            </Box>

            <Footer></Footer>
        </div>
    );
}

export default Accommodation;
