import React from "react";
import burnouts_prag from "../assets/burnouts_prag.jpg";
import burnouts_dm from "../assets/forside_hero.jpg";

export default function Nyheder() {
  return (
    <main>
      <section className="hero nyheder_hero">
        <div className="hero_overlay">
          <h1 className="page_title">Nyheder</h1>
          <h2 className="page_sub_header header_weight_400">
            seneste nyheder fra Århus Burnouts
          </h2>
        </div>
      </section>
      <section className="news info_section section_width">
        <article className="news_item shadow">
          <img
            className="news_img"
            src={burnouts_prag}
            alt="Århus Burnouts holdfoto fra Rugbymania i Prag"
          />
          <div className="news_wrapper">
            <h2 className="news_title header_weight_400">
              Århus Burnouts vinder sølv i Prag
            </h2>
            <p className="news_description paragraph_sizing">
              Der er desværre ikke skrevet nogen medrivendende artikel fra denne
              turnering endnu. Vi arbejder på det
            </p>
          </div>
        </article>
        <article className="news_item shadow">
          <img
            className="news_img"
            src={burnouts_dm}
            alt="Århus Burnouts holdfoto fra Rugbymania i Prag"
          />
          <div className="news_wrapper">
            <h2 className="news_title header_weight_400">
              DM bronze til Århus Burnouts
            </h2>
            <p className="news_description paragraph_sizing">
              Der er desværre heller ikke skrevet nogen medrivendende artikel
              fra denne turnering endnu. Vi arbejder på det
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
