import React from "react";
import { useNavigate } from "react-router-dom";
import google_map_screenshot from "../assets/map_placeholder.jpg";
import thomas from "../assets/thomas_r.jpg";
import morten_k from "../assets/morten_k.jpg";
import morten from "../assets/morten_k_e.jpg";
import jakob from "../assets/jakob_m.jpg";
import kaare from "../assets/kaare_m_n.jpg";
import sofie from "../assets/sofie_s.jpg";
import jesper from "../assets/jesper_r_k.jpg";
import vedtaegter from "../assets/BurnoutsVedtaegter.pdf";

export default function OmBurnouts() {
  const navigate = useNavigate();

  const navigateToKontakt = () => {
    navigate("/Kontakt");
    window.scrollTo(0, 0);
  };

  return (
    <main>
      <section className="hero om_burnouts_hero">
        <div className="hero_overlay">
          <h1 className="page_title">Hvem er Århus Burnouts?</h1>
        </div>
      </section>
      <section className="info_section section_width">
        <p className="paragraph_sizing">
          Århus Burnouts, blev startet i 2008 af en gruppe af personer som
          spillede kørestolsbasket i Århus, men som savnede en sportsgren som
          passede bedre til deres handicap og hvor de kunne dyrke en
          kontaktsport for kørestolsbrugere.
          <br />
          <br />
          Kørestolsrugby blev opfundet som et alternativ til kørestolsbasket for
          personer hvis handicap gjorde at de ikke havde funktion nok til at
          spille basket.
          <br />
          <br />
          Siden klubben blev startet, er den vokset og har set en fornuftig
          tilgang af nye spillere samt haft stor sportslig udvikling som har
          udmøntet i flere danske mesterskaber, det seneste i 2022.
        </p>
      </section>
      <section className="location_section section_width">
        <div className="om_burnouts_wrapper">
          <h3 className="header_weight_400">
            Vi holder til på Stensagerskolen, Brabrand
          </h3>
          <p className="paragraph_sizing">
            Vores træningstider er:
            <br />
            <br />
            Mandage: 17.00 - 19.00
            <br />
            Onsdage: 16.30 - 19.00
            <br />
            <br />
            Vil du gerne vide mere om os eller kørestolsrugby? Du er altid meget
            velkommen til at kontakte os med spørgsmål.
          </p>

          <button
            className="btn_primary_orange shadow"
            onClick={navigateToKontakt}
          >
            Kontakt os
          </button>
        </div>
        <div className="om_burnouts_img_wrapper">
          <img
            className="shadow"
            src={google_map_screenshot}
            alt="Google maps screenshot of Stensagerskolen"
          />
        </div>
      </section>
      <section className="info_section_2 section_width shadow board_members">
        <div className="section_wrapper">
          <h2 className="header_weight_400">Klubbens bestyrelse</h2>
          <div className="board_members_wrapper">
            <figure>
              <h3 className="header_weight_400">Formand</h3>
              <img
                className="shadow"
                src={thomas}
                alt="Thomas Romerdahl formand for Århus Burnouts"
              />
              <figcaption>
                Thomas
                <br />
                Romerdahl
              </figcaption>
            </figure>
            <figure>
              <h3 className="header_weight_400">Kasserer</h3>
              <img
                className="shadow"
                src={jakob}
                alt="Jakob Mortensen kasserer for Århus Burnouts"
              />
              <figcaption>
                Jakob
                <br />
                Mortensen
              </figcaption>
            </figure>
            <figure>
              <h3 className="header_weight_400">Bestyrelsesmedlem</h3>
              <img
                className="shadow"
                src={morten}
                alt="Morten Kjærsgård Elmholt bestyrelsesmedlem"
              />
              <figcaption>
                Morten
                <br />
                Kjærsgård Elmholt
              </figcaption>
            </figure>
            <figure>
              <h3 className="header_weight_400">Bestyrelsesmedlem</h3>
              <img
                className="shadow"
                src={kaare}
                alt="Kaare Momme Nielsen bestyrelsesmedlem"
              />
              <figcaption>
                Kaare
                <br />
                Momme Nielsen
              </figcaption>
            </figure>
          </div>
          <div className="vedtaegt_wrapper">
            <h2 className="header_weight_400">Klubbens vedtægter</h2>
            <p className="paragraph_sizing">
              Klubbens vedtægter kan hentes som PDF-fil på knappen herunder:
            </p>
            <a
              className="btn_primary_orange shadow"
              href={vedtaegter}
              download="Burnouts_vedtaegter"
              target="_blank"
              rel="noreferrer"
            >
              Hent PDF
            </a>
          </div>
        </div>
      </section>
      <section className="info_section_2 section_width players">
        <h2 className="header_weight_400">Klubbens spillere</h2>
        <div className="players_members_wrapper">
          <figure>
            <img
              className="shadow"
              src={thomas}
              alt="Thomas Romerdahl, 3.5 point"
            />
            <figcaption>
              Thomas
              <br />
              Romerdahl
              <br />
              3.5
            </figcaption>
          </figure>
          <figure>
            <img
              className="shadow"
              src={morten_k}
              alt="Morten Kristensen, 3.5 point"
            />
            <figcaption>
              Morten
              <br />
              Kristensen
              <br />
              3.5
            </figcaption>
          </figure>
          <figure>
            <img
              className="shadow"
              src={morten}
              alt="Morten Kjærsgård Elmholt, 3.0 point"
            />
            <figcaption>
              Morten
              <br />
              Kjærsgård Elmholt
              <br />
              3.0
            </figcaption>
          </figure>
          <figure>
            <img
              className="shadow"
              src={jakob}
              alt="Jakob Mortensen, 2.5 point"
            />
            <figcaption>
              Jakob
              <br />
              Mortensen
              <br />
              2.5
            </figcaption>
          </figure>

          <figure>
            <img
              className="shadow"
              src={kaare}
              alt="Kaare Momme Nielsen, 1.5 point"
            />
            <figcaption>
              Kaare
              <br />
              Momme Nielsen
              <br />
              1.5
            </figcaption>
          </figure>
          <figure>
            <img
              className="shadow"
              src={jesper}
              alt="Jesper Ring Krüger, 1.0 point"
            />
            <figcaption>
              Jesper
              <br />
              Ring Krüger
              <br />
              1.0
            </figcaption>
          </figure>
          <figure>
            <img className="shadow" src={sofie} alt="Sofie Skoubo, 0.5 point" />
            <figcaption>
              Sofie
              <br />
              Skoubo
              <br />
              0.5F
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
