import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
// import NoMatch from './pages/error/NoPage';
import Home from "./pages/home/Home";
import Housing from "./pages/logement/Housing";
import Layout from "./components/Layout/Layout";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="About" element={<About />} />
          <Route path="ficheLogement/:id" element={<Housing />} />
                {/* <Route path="*" element={<NoMatch />} /> */}
            </Route>
            
        </Routes>
    );
};

export default App;
