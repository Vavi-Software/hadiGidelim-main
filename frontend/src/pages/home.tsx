import { Box, Typography } from "@mui/material";
import Footer from "../components/common/footer.tsx";
import Navbar from "../components/common/navbar.tsx";
import CustomBox from "../components/common/customBox.tsx";
import "../css/home.css";
import CarouselHome from "../components/home/carouselHome.tsx";
import CardListSection from "../components/common/cardList.tsx";

function Home() {
    return (
        <div>
            <Navbar />
            <CarouselHome />
            <CustomBox />
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
                    flexBasis: "70%",
                    margin: 4,
                }}
            >
            <CardListSection cardsPerRow={4} gap="1.5rem" />
            </Box>
            <CustomBox />
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
            <Box
                sx={{
                    md: {
                        display: "flex",

                        flexWrap: "wrap",
                        justifyContent: "center",
                    },
                  
                    
                    
                    

                    flexBasis: "70%",
                    margin: 4,
                }}

            >
            <CardListSection cardsPerRow={4} gap="1.5rem" />
            </Box>
            <Footer />
        </div>
    );
}

export default Home;
