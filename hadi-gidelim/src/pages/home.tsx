import Navbar from "../components/common/navbar.tsx";
import Carousel from "../components/home/carousel.tsx";
import PremiumCard from "../components/home/premiumBox.tsx"; // Doğru yolu belirleyin
import Box from "../components/common/customBox.tsx"; // Doğru yolu belirleyin
import { Grid } from "@mui/material";
import '../css/home.css'
import BusinessCard from "../components/common/businesses-card.tsx";
import Footer from "../components/common/footer.tsx";

function Home() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <Box />

            {/* Premium Cards Section */}
            <Grid container spacing={2} justifyContent="center" padding={2}>
                {[...Array(8)].map((_, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <PremiumCard title={`Premium Card ${index + 1}`} />
                    </Grid>
                ))}
            </Grid>
            <Box></Box>
            <BusinessCard
                businessName="Örnek İşletme"
                description="Bu, örnek bir işletme açıklamasıdır."
                priceRange="₺100 - ₺500"
                discount="20%"
                imageUrl="https://via.placeholder.com/300"
                onButtonClick={() => window.location.href = 'https://www.example.com'}
            />
            <Footer></Footer>
            {/* Box Component */}
        </div>
    );
}

export default Home;
