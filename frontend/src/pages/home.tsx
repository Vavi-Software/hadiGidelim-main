import {Box, Grid, Typography} from "@mui/material";
import Footer from "../components/common/footer.tsx";
import Navbar from "../components/common/navbar.tsx";
import BusinessCard from "../components/common/businesses-card.tsx";
import CustomBox from "../components/common/customBox.tsx";
import "../css/home.css";
import CarouselHome from "../components/home/carouselHome.tsx";
import PremiumBox from "../components/home/premiumBox.tsx";


function Home() {
    return (
        <div>
            <Navbar/>
            <CarouselHome/>
            <CustomBox></CustomBox>
            <Box>
                <Grid container>
                    {Array.from({ length: 8 }).map((_, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <PremiumBox />
                        </Grid>
                    ))}
                </Grid>
            </Box>            <CustomBox></CustomBox>
            <Typography variant="h4" sx={{
                fontFamily: "revert-layer",
                textAlign: "center",
                
            }}>
                Bu Ay En Çok Ziyaret Edilen İşletmeler
            </Typography>            <BusinessCard
                businessName="Örnek İşletme"
                description="Bu, örnek bir işletme açıklamasıdır."
                priceRange="₺100 - ₺500"
                discount="20%"
                imageUrl="https://via.placeholder.com/300"
                onButtonClick={() => window.location.href = 'https://www.vavisoftware.com.tr'}
            />
            <Footer></Footer>
            {/* Box Component */}
        </div>
    );
}

export default Home;
