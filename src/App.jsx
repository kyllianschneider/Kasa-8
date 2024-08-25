import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Error from './pages/error/Error';
import Home from "./pages/home/Home";
import Housing from "./pages/logement/Housing";
import Layout from "./components/Layout/Layout";
import "./Styles/main.scss";


// Definir les routes en utilisant le "/" pour le layout de base incluant le header et le footer

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="About" element={<About />} />
                {/* verifie les id des logements sinon redirige vers Error */}
                <Route path="ficheLogement/:id" element={<Housing />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    );
};

export default App;
