import { Grid} from "@mui/material";
import Footer from "../components/common/footer.tsx";
import Navbar from "../components/common/navbar.tsx";
import PremiumCard from "../components/home/premiumBox.tsx";
import BusinessCard from "../components/common/businesses-card.tsx";
import CustomBox from "../components/common/customBox.tsx";
import "../css/home.css";
import CarouselHome from "../components/home/carouselHome.tsx";


function Home() {
    return (
        <div>
            <Navbar/>
            <CarouselHome/>
            <CustomBox></CustomBox>
            {/* Premium Cards Section */}
            <Grid container spacing={2} justifyContent="center" padding={2}>
                {[...Array(8)].map((_, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <PremiumCard title={`Premium Card ${index + 1}`} />
                    </Grid>
                ))}
            </Grid>
            <CustomBox></CustomBox>
            <h1>Bu Ay En Çok Ziyaret Edilen İşletmeler</h1>
            <BusinessCard
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
