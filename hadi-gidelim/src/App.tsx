import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hotels from "./pages/hotels.tsx";
import Home from "./pages/home.tsx";
function App() {
    return (
        <Router>

            <Routes>
                <Route path="/" element={<Home />} /> {/* Ana sayfa için rota */}

                <Route path="/hotels" element={<Hotels />} />
                {/* Diğer rotalarınızı buraya ekleyin */}
                Deneme Ana Sayfa
            </Routes>
        </Router>
    );
}

export default App;
