import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
      <div className="Header">
        <nav class="navbar navbar-expand-lg bg-body text-uppercase" data-bs-theme="dark">
            <div class="container-fluid">
                <span class="navbar-brand ps-4">John Doe</span>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto pe-4">
                  <li className="nav-item">
                  <NavLink className="nav-link  nav-link-header" to="/" style={({ isActive }) => ({
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
                  <NavLink className="nav-link  nav-link-header" to="/Services" style={({ isActive }) => ({
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
                  <NavLink className="nav-link  nav-link-header" to="/Portfolio" style={({ isActive }) => ({
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
                  <NavLink className="nav-link  nav-link-header" to="/Contact" style={({ isActive }) => ({
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
                  <NavLink className="nav-link  nav-link-header" to="/LegalNotices" style={({ isActive }) => ({
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
        </div>
    );
}

export default Header;