import React from "react";
import thomas from "../assets/thomas_r.jpg";
import google_map_screenshot from "../assets/map_placeholder.jpg";
import { Helmet } from "react-helmet-async";

export default function Kontakt() {
  return (
    <main>
      <div>
        <Helmet>
          <title>
            Kontakt Århus Burnouts | Se vores kontaktoplysninger her!
          </title>
          <meta
            name="description"
            content="Vil du gerne vide mere om kørestolsrugby eller om Århus Burnouts? - Tag fat i voreskotaktperson hvis du har spørgsmål eller gerne vil prøve kørestolsrugby!"
          ></meta>
        </Helmet>
      </div>
      <section className="hero kontakt_hero">
        <div className="hero_overlay">
          <h1 className="page_title">Kontakt os</h1>
        </div>
      </section>
      <div className="contact_section_wrapper">
        <section className="info_section section_width contact_section">
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
        <section className="location_section section_width margin_reset">
          <div className="contact_map_section_wrapper">
            <div className="address_wrapper">
              <div className="address_wrapper_1">
                <h3 className="header_weight_400">Du finder os her </h3>
                <p className="paragraph_sizing">
                  Stensagerskolen
                  <br />
                  Janesvej 2
                  <br />
                  8220 Brabrand
                  <br />
                  <br />
                </p>
              </div>
              <div className="address_wrapper_2">
                <h3 className="header_weight_400">Vores træningstider er:</h3>
                <p>
                  <br />
                  Mandage: 17.00 - 19.00
                  <br />
                  Onsdage: 16.30 - 19.00
                </p>
              </div>
            </div>
            <div className="map_wrapper">
              <img
                className="shadow"
                src={google_map_screenshot}
                alt="Google maps screenshot of Stensagerskolen"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
