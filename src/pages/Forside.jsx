import React from "react";
import { useNavigate } from "react-router-dom";
import google_map_screenshot from "../assets/map_placeholder.jpg";

export default function Forside() {
  const navigate = useNavigate();

  const navigateToOmRugby = () => {
    navigate("/OmKoerestolsrugby");
    window.scrollTo(0, 0);
  };

  const navigateToOmBurnouts = () => {
    navigate("/OmBurnouts");
    window.scrollTo(0, 0);
  };

  const navigateToKontakt = () => {
    navigate("/Kontakt");
    window.scrollTo(0, 0);
  };

  return (
    <main>
      <section className="hero forside_hero">
        <div className="hero_overlay">
          <h4 className="page_sub_header header_weight_400">Velkommen til</h4>
          <h1 className="page_title">Århus Burnouts</h1>
          <h4 className="page_sub_header header_weight_400">
            en af Danmarks førende kørestolsrugby klubber
          </h4>
        </div>
      </section>
      <section className="info_section section_width_mobil">
        <h2 className="header_weight_400">
          Er du til sport med fart over feltet?
        </h2>
        <h3 className="header_weight_400">
          Så er kørestolsrugby lige noget for dig!
        </h3>
        <p className="paragraph_sizing">
          Århus Burnouts har været en del af dansk kørestolsrugby siden 2008. Vi
          vægter både det sociale og det sportslige højt og vi mener at
          kørestolsrugby først og fremmest skal være sjovt!
          <br />
          <br />
          Kunne du tænke dig at lære mere om kørestolsrugby eller om os?
        </p>
        <div className="button_section">
          <button
            className="btn_primary_orange shadow"
            onClick={navigateToOmRugby}
          >
            Ny i sporten?
          </button>
          <button
            className="btn_primary_orange shadow"
            onClick={navigateToOmBurnouts}
          >
            Hvem er vi?
          </button>
        </div>
      </section>
      <section className="location_section section_width_mobil">
        <h2 className="header_weight_400">Træning i Århus</h2>
        <h3 className="header_weight_400">
          Vi holder til på Stensagerskolen, Brabrand
        </h3>
        <img
          className="shadow"
          src={google_map_screenshot}
          alt="Google maps screenshot of Stensagerskolen"
        />
        <p className="paragraph_sizing">
          Vores træningstider er:
          <br />
          <br />
          Mandage: 17.00 - 19.00
          <br />
          Onsdage: 16.30 - 19.00
          <br />
          <br />
          Lyder kørestolsrugby til at være noget for dig? Så skriv eller ring
          til os så vi kan arrangere en prøvetræning.
        </p>
        <button
          className="btn_primary_orange shadow"
          onClick={navigateToKontakt}
        >
          Kontakt os
        </button>
      </section>
    </main>
  );
}
