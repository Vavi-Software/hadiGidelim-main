import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home.tsx";
import TravelPage from "./pages/travel-page.tsx";
import ContactUs from "./pages/contact-us.tsx";
import Accommodation from "./pages/accommodation.tsx";
import Flavor from "./pages/flavor.tsx";
import Cafe from "./pages/cafe.tsx";
import Entertainment from "./pages/entertainment.tsx";
import Service from "./pages/service.tsx";
import Sport from "./pages/sport.tsx";

function App() {
    return (
        <Router>

            <Routes>
                {/*Ana Sayfa*/}
                <Route path="/" element={<Home />} />
                <Route path="/hadigezelim" element={<TravelPage/>}/>
                {/*Konaklama*/}
                <Route path="/Konaklama" element={<Accommodation/>}/>
                {/*Lezzet*/}
                <Route path="/Lezzet" element={<Flavor/>}/>
                {/*Kafe*/}
                <Route path="/Kafe" element={<Cafe/>}/>
                {/*Eglence*/}
                <Route path="/Eglence" element={<Entertainment/>}/>
                {/*Hizmet*/}
                <Route path="/Hizmet" element={<Service/>}/>
                {/*Spor*/}
                <Route path="/Spor" element={<Sport/>}/>
                {/*İletişim*/}
                <Route path="/iletisim" element={<ContactUs/>}/>
            </Routes>
        </Router>
    );
}

export default App;
