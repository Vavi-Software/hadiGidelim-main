import { Box, Grid, Typography } from "@mui/material";
import Footer from "../components/common/footer.tsx";
import Navbar from "../components/common/navbar.tsx";
import CustomBox from "../components/common/customBox.tsx";
import "../css/home.css";
import CarouselHome from "../components/home/carouselHome.tsx";
import PremiumBox from "../components/home/premiumBox.tsx";
import CardListSection from "../components/common/cardList.tsx";

function Home() {
    const businessData = Array.from({ length: 8 }).map((_, index) => ({
        businessName: `Örnek İşletme ${index + 1}`,
        description: "Bu, örnek bir işletme açıklamasıdır.",
        priceRange: "₺100 - ₺500",
        discount: `${20 + index}%`,
        imageUrl: "https://via.placeholder.com/300",
        onButtonClick: () => window.location.href = 'https://www.vavisoftware.com.tr',
    }));

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
         
            <Box sx={{ flexBasis: "70%" }}>
                        <CardListSection /> {/* Kart bölümünü buradan çağırıyoruz */}
                    </Box>
            <Footer />
        </div>
    );
}

export default Home;
