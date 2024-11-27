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
import Login from "./pages/login.tsx";
import BusinessRegister from "./pages/business-registration.tsx";
import AddProduct from './pages/add-product.tsx';

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
                <Route path="/Iletisim" element={<ContactUs/>}/>
                {/*Login ekranı*/}
              
                <Route path="/login" element={<Login></Login>}/>
                {/* İşletme Kayıt Ekranı */}
                <Route path="/isletmekayit" element={<BusinessRegister/>}/>
                {/* İşletme Admin Panel */}
                <Route path="/isletmeadmin" element={<AddProduct/>}/>
            </Routes>
        </Router>
    );
}

export default App;
