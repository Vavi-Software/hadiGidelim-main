import { Box, Typography } from "@mui/material";
import Footer from "../components/common/footer.tsx";
import Navbar from "../components/common/navbar.tsx";
import CustomBox from "../components/common/customBox.tsx";
import "../css/home.css";
import CarouselHome from "../components/home/carouselHome.tsx";
import Card from "../components/common/card.tsx";
import YoutubeSection from "../components/home/youtube-section.tsx";

function Home() {
    // 14 Card bileşeni oluşturmak için bir diziyi döngüyle oluşturuyoruz
    const renderCards = () =>
        Array.from({ length: 10 }, (_, index) =>   <Card
    businessName="Hotel Name"
    category="Category"
    description="Description"
    profilePhoto="https://source.unsplash.com/random"
    productImage="https://source.unsplash.com/random"
     key={index} />);

    return (
        <div>
            <Navbar />
            <CarouselHome />
            <YoutubeSection />
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
                ÖNERİLEN İŞLETMELER
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 2, // Çocuk bileşenler arasında boşluk
                    margin: 4,
                }}
            >
                {renderCards()}
            </Box>
            <CustomBox />

            <Footer />
        </div>
    );
}

export default Home;
