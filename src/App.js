import './App.css';
import {Routes, Route, NavLink} from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import LegalNotices from "./pages/LegalNotices"

function App() {
  return (
    <div className="App">
      <header>
        <nav class="navbar navbar-expand-lg bg-body text-uppercase" data-bs-theme="dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="/Home">John Doe</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li className="nav-item">
                <NavLink className="nav-link" to="/Home" style={({ isActive }) => ({
                    color: isActive ? "#ffffff" : "white",  
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: isActive ? "underline" : "none",
                    textUnderlineOffset: "3px",  
                    textDecorationThickness: "2px" 
                  })}>
                  Home
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/Services" style={({ isActive }) => ({
                    color: isActive ? "#ffffff" : "white",  
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: isActive ? "underline" : "none",
                    textUnderlineOffset: "3px",  
                    textDecorationThickness: "2px" 
                  })}>
                  Services
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/Portfolio" style={({ isActive }) => ({
                    color: isActive ? "#ffffff" : "white",  
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: isActive ? "underline" : "none",
                    textUnderlineOffset: "3px",  
                    textDecorationThickness: "2px" 
                  })}>
                  Portfolio
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/Contact" style={({ isActive }) => ({
                    color: isActive ? "#ffffff" : "white",  
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: isActive ? "underline" : "none",
                    textUnderlineOffset: "3px",  
                    textDecorationThickness: "2px" 
                  })}>
                  Contact
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/LegalMentions" style={({ isActive }) => ({
                    color: isActive ? "#ffffff" : "white",  
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: isActive ? "underline" : "none",
                    textUnderlineOffset: "3px",  
                    textDecorationThickness: "2px" 
                  })}>
                  Mentions Légales
                </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Services" element={<Services/>}></Route>
      <Route path="/Portfolio" element={<Portfolio/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/LegalNotices" element={<LegalNotices/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
