import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import LegalNotices from "./pages/LegalNotices";

function App() {
  return (
      <div className="App">
        <Header />

        <main className="main-container">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Services" element={<Services/>}></Route>
            <Route path="/Portfolio" element={<Portfolio/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/LegalNotices" element={<LegalNotices/>}></Route>
          </Routes>
        </main>

        <Footer />
      </div>
  );
}

export default App;
