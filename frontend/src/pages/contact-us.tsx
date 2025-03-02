import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import Carousel from "../components/common/carousel";
import ContactCard from "../components/contact-us/contact-card";
import { Box } from "@mui/material";

const cardData = [
  {
    title: "VAVI",
    imageUrl: "/VAVI2.png",
    description: "This is a great product.",
    price: "₺99.99",
  },
  {
    title: "VAVI",
    imageUrl: "/ankara.png",
    description: "This is a great product.",
    price: "₺99.99",
  },
  {
    title: "VAVI",
    imageUrl: "/icon-logo.png",
    description: "This is a great product.",
    price: "₺99.99",
  },
  {
    title: "VAVI",
    imageUrl: "/icon-logo.png",
    description: "This is a great product.",
    price: "₺99.99",
  },
  {
    title: "VAVI",
    imageUrl: "/icon-logo.png",
    description: "This is a great product.",
    price: "₺99.99",
  },
  {
    title: "VAVI",
    imageUrl: "/icon-logo.png",
    description: "This is a great product.",
    price: "₺99.99",
  },
  {
    title: "VAVI",
    imageUrl: "/icon-logo.png",
    description: "This is a great product.",
    price: "₺99.99",
  },
  {
    title: "VAVI",
    imageUrl: "/icon-logo.png",
    description: "This is a great product.",
    price: "₺99.99",
  },
  {
    title: "VAVI",
    imageUrl: "/icon-logo.png",
    description: "This is a great product.",
    price: "₺99.99",
  },
  {
    title: "VAVI",
    imageUrl: "/icon-logo.png",
    description: "This is a great product.",
    price: "₺99.99",
  },
];

function ContactUs() {
  const renderCards = () =>
    cardData.map((data, index) => (
      <ContactCard
        title={data.title}
        imageUrl={data.imageUrl}
        description={data.description}
        price={data.price}
        contactButtonColor="#ea0200" // Example color
        mailButtonColor="#ea0200" // Example color
        key={index}
      />
    ));

  return (
    <div>
      <Navbar />
      <Carousel height="25vh" />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
          padding: "4rem",
        }}
      >
        {renderCards()}
      </Box>

      <Footer />
    </div>
  );
}

export default ContactUs;
