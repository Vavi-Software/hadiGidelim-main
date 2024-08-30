import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hotels from "./pages/accomodation/hotels.tsx";
import Home from "./pages/home/home.tsx";
import TravelPage from "./pages/home/travel-page.tsx";
import Accomodation from "./pages/accomodation/accomodation-page.tsx";
import Hostel from "./pages/accomodation/hostel.tsx";
import DailyStay from "./pages/accomodation/daily-stay.tsx";
import HomeCooking from "./pages/flavor/home-cooking.tsx";
import StrangerKitchen from "./pages/flavor/stranger-kitchen.tsx";
import Teen from "./pages/flavor/youth-specific.tsx";
import TurkishKitchen from "./pages/flavor/turkish-kitchen.tsx";
import CookItYourself from "./pages/flavor/cook-it-yourself.tsx";
import {Recommend} from "@mui/icons-material";
import ArtCafe from "./pages/cafe/art-cafe.tsx";
import BistroCafe from "./pages/cafe/bistro-cafe.tsx";
import BookCafe from "./pages/cafe/book-cafe.tsx";
import BoutiqueCafe from "./pages/cafe/boutique-cafe.tsx";
import CoWorkingCafe from "./pages/cafe/coWorking-cafe.tsx";
import InternetCafe from "./pages/cafe/internet-cafe.tsx";
import AddBusiness from "./pages/contact/add-business.tsx";
import ContactUs from "./pages/contact/contact-us.tsx";
import HorrorHouse from "./pages/entertainment/horror-house.tsx";
import Paintball from "./pages/entertainment/paintball.tsx";
import ThemePark from "./pages/entertainment/theme-park.tsx";
import Aquapark from "./pages/entertainment/aquapark.tsx";
import Hospital from "./pages/health/hospital.tsx";
import Dentist from "./pages/health/dentist.tsx";
import BeautyCenter from "./pages/health/beauty-center.tsx";
import Pharmacy from "./pages/health/pharmacy.tsx";
import ArtificialTurf from "./pages/sport/artificial-turf.tsx";
import Gym from "./pages/sport/gym.tsx";
import Pools from "./pages/sport/pools.tsx";
import Calisthenics from "./pages/sport/calisthenics.tsx";
import Mekanlar from "./pages/other/mekanlar.tsx";

function App() {
    return (
        <Router>

            <Routes>
                {/*Ana Sayfa*/}
                <Route path="/" element={<Home />} />
                <Route path="/hadi-gezelim" element={<TravelPage/>}/>
                <Route path="/hadi-gezelim/mekanlar" element={<Mekanlar/>}/>
                {/*Konaklama*/}
                <Route path="/Konaklama" element={<Accomodation/>}/>
                <Route path="/Konaklama/Oteller" element={<Hotels />} />
                <Route path="/Konaklama/Pansiyonlar" element={<Hostel />} />
                <Route path="/Konaklama/Apartlar" element={<DailyStay />} />
                {/*Lezzet*/}
                <Route path="/Lezzet/Ev-Yemekleri" element={<HomeCooking/>}/>
                <Route path="/Lezzet/Turk-Mutfagi" element={<TurkishKitchen/>}/>
                <Route path="/Lezzet/Yabanci-Mutfagi" element={<StrangerKitchen/>}/>
                <Route path="/Lezzet/Ogrenci-Ozel" element={<Teen/>}/>
                <Route path="/Lezzet/Kendin-Pisir" element={<CookItYourself/>}/>
                <Route path="/Lezzet/Onerilenler" element={<Recommend/>}/>
                {/*Kafe*/}
                <Route path="/Kafe/Sanat-Kafe" element={<ArtCafe/>}/>
                <Route path="/Kafe/Bistro-Kafe" element={<BistroCafe/>}/>
                <Route path="/Kafe/Kitap-Kafe" element={<BookCafe/>}/>
                <Route path="/Kafe/Butik-Kafe" element={<BoutiqueCafe/>}/>
                <Route path="/Kafe/Calisma-Kafe" element={<CoWorkingCafe/>}/>
                <Route path="/Kafe/Internet-Kafe" element={<InternetCafe/>}/>
                {/*Eğlence*/}
                <Route path="/eglence/korkuevi" element={<HorrorHouse/>}/>
                <Route path="/eglence/paintball" element={<Paintball/>}/>
                <Route path="/eglence/lunapark" element={<ThemePark/>}/>
                <Route path="/eglence/aquapark" element={<Aquapark/>}/>

                {/*Hizmet*/}
                <Route path="/hizmet/hastane" element={<Hospital/>}/>
                <Route path="/hizmet/disciler" element={<Dentist/>}/>
                <Route path="/hizmet/guzellik-merkezi" element={<BeautyCenter/>}/>
                <Route path="/hizmet/eczane" element={<Pharmacy/>}/>

                {/*Spor*/}
                <Route path="/spor/salon" element={<Gym/>}/>
                <Route path="/spor/kalistenik-parkuru" element={<Calisthenics/>}/>
                <Route path="/spor/hali-sahalar" element={<ArtificialTurf/>}/>
                <Route path="/spor/havuz" element={<Pools/>}/>

                {/*İletişim*/}
                <Route path="/iletisim" element={<ContactUs/>}/>
                <Route path="/iletisim/ekle" element={<AddBusiness/>}/>




            </Routes>
        </Router>
    );
}

export default App;
