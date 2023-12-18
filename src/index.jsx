import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import { Route, Routes } from "react-router-dom";
import Forside from "./pages/Forside";
import OmKoerestolsrugby from "./pages/OmKoerestolsrugby";
import OmBurnouts from "./pages/OmBurnouts";
import Nyheder from "./pages/Nyheder";
import Kontakt from "./pages/Kontakt";
import Kalender from "./pages/Kalender";
import FooterComponent from "./components/FooterComponent";
import { HelmetProvider } from "react-helmet-async";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <HelmetProvider>
        <NavbarComponent />
        <Routes>
          <Route path="/Forside" element={<Forside />}></Route>
          <Route
            path="/OmKoerestolsrugby"
            element={<OmKoerestolsrugby />}
          ></Route>
          <Route path="/OmBurnouts" element={<OmBurnouts />}></Route>
          <Route path="/Nyheder" element={<Nyheder />}></Route>
          <Route path="/Kalender" element={<Kalender />}></Route>
          <Route path="/Kontakt" element={<Kontakt />}></Route>
        </Routes>
        <FooterComponent />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
