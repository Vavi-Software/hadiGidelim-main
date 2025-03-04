import Navbar from "../components/common/navbar.tsx";
import Footer from "../components/common/footer.tsx";
import Carousel from "../components/common/carousel.tsx";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import FilterSection from "../components/common/filter.tsx";
import Card from "../components/common/card.tsx";

const saatSecenekleri = [
  { name: "08:00 - 10:00", code: "08-10" },
  { name: "10:00 - 12:00", code: "10-12" },
  { name: "12:00 - 14:00", code: "12-14" },
  { name: "14:00 - 16:00", code: "14-16" },
];

const kategoriSecenekleri = [
  { name: "Kategori 1", code: "K1" },
  { name: "Kategori 2", code: "K2" },
  { name: "Kategori 3", code: "K3" },
  { name: "Kategori 4", code: "K4" },
];

const odemeSecenekleri = [
  { name: "Nakit", code: "N" },
  { name: "Kredi Kartı", code: "KK" },
  { name: "Banka Transferi", code: "BT" },
  { name: "Mobil Ödeme", code: "MO" },
];
const labels = {
  saat: "Fiyat Aralığı ",
  kategori: "Oda Tipi",
  odemeYontemi: "KAfe türü",
  yatak: "Yatak Sayısı",
};

const filters = [
  { key: "saat", options: saatSecenekleri, label: labels.saat },
  { key: "kategori", options: kategoriSecenekleri, label: labels.kategori },
  {
    key: "odemeYontemi",
    options: odemeSecenekleri,
    label: labels.odemeYontemi,
  },
  { key: "yatak", options: odemeSecenekleri, label: labels.yatak },
];

function Service() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // Tablet ve telefon kontrolü

  return (
    <div>
      <Navbar />
      <Carousel height="25vh" />
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          padding: isSmallScreen ? "1rem" : "2rem 5rem",
          gap: "2rem",
        }}
      >
        {/* Küçük ekranlarda üstte, büyük ekranlarda solda */}
        {isSmallScreen && <FilterSection filters={filters} />}

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flex: 1,
            gap: "2rem",
          }}
        >
          {!isSmallScreen && (
            <Box sx={{ flexBasis: "30%" }}>
              <FilterSection filters={filters} />
            </Box>
          )}

          <Box sx={{ flexBasis: "100%" }}>
            <Card
              businessName="Hotel Name"
              category="Category"

              profilePhoto="https://source.unsplash.com/random"
              productImage="https://source.unsplash.com/random"
            />
          </Box>
        </Box>
      </Box>

      <Footer />
    </div>
  );
}

export default Service;
