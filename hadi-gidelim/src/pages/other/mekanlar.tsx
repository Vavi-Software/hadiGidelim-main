import Navbar from "../../components/common/navbar";
import Footer from "../../components/common/footer.tsx";
import {Grid} from "@mui/material";
import PremiumCard from "../../components/home/premiumBox.tsx";


function Mekanlar() {
    return (
        <div>
            <Navbar></Navbar>
            <Grid container spacing={2} justifyContent="center" padding={2}>
                {[...Array(25)].map((_, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <PremiumCard title={` ${index + 1}`} />
                    </Grid>
                ))}
            </Grid>
            <Footer></Footer>
        </div>
    );
}

export default Mekanlar;
