import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import { Route, Routes } from "react-router-dom";
import Forside from "./pages/Forside";
import OmKoerestolsrugby from "./pages/OmKoerestolsrugby";
import OmBurnouts from "./pages/OmBurnouts";
import Nyheder from "./pages/Nyheder";
import Kontakt from "./pages/Kontakt";
import Kalender from "./pages/Kalender";
import FooterComponent from "./components/FooterComponent";

export default function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Forside />}></Route>
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
    </div>
  );
}
