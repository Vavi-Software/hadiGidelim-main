import { Box, Grid, Typography } from "@mui/material";
import Footer from "../components/common/footer.tsx";
import Navbar from "../components/common/navbar.tsx";
import CustomBox from "../components/common/customBox.tsx";
import "../css/home.css";
import CarouselHome from "../components/home/carouselHome.tsx";
import PremiumBox from "../components/home/premiumBox.tsx";
import CardListSection from "../components/common/cardList.tsx";

function Home() {
   

    return (
        <div>
            <Navbar />
            <CarouselHome />
            <CustomBox></CustomBox>
            <Box>
                <Grid container spacing={2}>
                    {Array.from({ length: 8 }).map((_, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <PremiumBox />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <CustomBox></CustomBox>
            <Typography
                variant="h4"
                sx={{
                    fontFamily: "Arial",
                    textAlign: "center",
                    fontWeight: 700,
                    color: "#ea2d00",
                    padding: 2,
                }}
            >
                Bu Ay En Çok Ziyaret Edilen İşletmeler
            </Typography>
         
            <Box sx={{ 
                flexBasis: "70%",
                margin: 4,
                }}>
                        <CardListSection /> {/* Kart bölümünü buradan çağırıyoruz */}
                    </Box>
            <Footer />
        </div>
    );
}

export default Home;
