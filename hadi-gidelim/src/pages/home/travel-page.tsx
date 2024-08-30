import Navbar from "../../components/common/navbar";
import Footer from "../../components/common/footer.tsx";
import { Grid } from "@mui/material";
import PremiumCard from "../../components/home/premiumBox.tsx";

function TravelPage() {
    // Function to handle card click and redirect to a specific link
    const handleCardClick = () => {
        // Redirect to the specific path
        window.location.href = "/hadi-gezelim/mekanlar";
    };

    return (
        <div>
            <Navbar />
            <Grid container spacing={2} justifyContent="center" padding={2}>
                {[...Array(25)].map((_, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        key={index}
                        onClick={handleCardClick} // All cards will navigate to the same URL
                        style={{ cursor: 'pointer' }} // Add a pointer cursor to indicate clickable items
                    >
                        <PremiumCard title={` ${index + 1}`} />
                    </Grid>
                ))}
            </Grid>
            <Footer />
        </div>
    );
}

export default TravelPage;
