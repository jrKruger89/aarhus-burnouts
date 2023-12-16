import React from "react";
import thomas from "../assets/thomas_r.jpg";
import google_map_screenshot from "../assets/map_placeholder.jpg";

export default function Kontakt() {
  return (
    <main>
      <section className="hero kontakt_hero">
        <div className="hero_overlay">
          <h1 className="page_title">Kontakt os</h1>
        </div>
      </section>
      <section className="info_section section_width_mobil contact_section">
        <h2 className="page_sub_header header_weight_400">
          Har du lyst til at prøve kræfter med kørestolsrugby eller har du
          spørgsmål til os eller om sporten?
        </h2>
        <p>Du er mere end velkommen til at kontakte os.</p>
        <figure>
          <h3 className="header_weight_400">Kontaktperson</h3>
          <img
            className="shadow"
            src={thomas}
            alt="Thomas Romerdahl kontaktperson ved spørgsmål"
          />
          <figcaption>Thomas Romerdahl</figcaption>
          <a href="tel:+45-88-888-888">Tlf: 88 88 88 88</a>
          <a href="mailto:someone@example.com">Mail: someone@example.com</a>
        </figure>
      </section>
      <section className="location_section section_width_mobil">
        <h3 className="header_weight_400">Du finder os her </h3>
        <p className="paragraph_sizing">
          Stensagerskolen
          <br />
          Janesvej 2
          <br />
          8220 Brabrand
          <br />
          <br />
          Vores træningstider er:
          <br />
          Mandage: 17.00 - 19.00
          <br />
          Onsdage: 16.30 - 19.00
        </p>
        <img
          className="shadow"
          src={google_map_screenshot}
          alt="Google maps screenshot of Stensagerskolen"
        />
      </section>
    </main>
  );
}
