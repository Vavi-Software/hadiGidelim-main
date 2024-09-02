import Navbar from "../components/common/navbar.tsx";
import Footer from "../components/common/footer.tsx";
import Carousel from "../components/common/carousel.tsx";
import PageComponent from "../components/common/DefaultPageDesign.tsx";

function TravelPage() {
    // Function to handle card click and redirect to a specific link

    return (
        <div>
            <Navbar />
            <Carousel height="25vh"/>
            <PageComponent/>
            <Footer />
        </div>
    );
}

export default TravelPage;
