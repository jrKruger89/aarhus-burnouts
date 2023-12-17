import React from "react";
import { Helmet } from "react-helmet-async";

export default function Kalender() {
  return (
    <main>
      <div>
        <Helmet>
          <title>
            Kalender for Århus Burnouts | Se vores kommende aktiviteter.
          </title>
          <meta
            name="description"
            content="Følg med i hvilke begivenheder & arrangementer Århus Burnouts har i kalenderen | Hold dig opdateret på vores aktiviteter her!"
          ></meta>
        </Helmet>
      </div>
      <section className="hero kalender_hero">
        <div className="hero_overlay">
          <h1 className="page_title">Kalender</h1>
        </div>
      </section>
      <section className="coming_events calender info_section section_width">
        <h2 className="page_sub_header header_weight_400">
          Kommende begivenheder
        </h2>
        <div className="coming_events_wrapper">
          <article className="calender_item shadow">
            <div className="item_date_wrapper">
              <h4 className="date">
                22. - 24.
                <br />
                Marts
                <br />
                2024
              </h4>
            </div>
            <div className="item_info_wrapper">
              <h4 className=" header_weight_400 title">Bernd Best</h4>
              <p className="description">
                Verdens største klub turnering, Køln.
              </p>
              <a
                href="https://www.facebook.com/berndbestturnier/?locale=da_DK"
                target="_blank"
                rel="noreferrer"
                className="link_to_event"
              >
                Link til begivenhed
              </a>
            </div>
          </article>
        </div>
      </section>
      <section
        className="done_events calender info_section section_width
      "
      >
        <h2 className="page_sub_header header_weight_400">
          Overståede begivenheder
        </h2>
        <div className="done_events_wrapper">
          <article className="calender_item shadow">
            <div className="item_date_wrapper">
              <h4 className="date">
                16. - 19.
                <br />
                Nov.
                <br />
                2024
              </h4>
            </div>
            <div className="item_info_wrapper">
              <h4 className=" header_weight_400 title">Rugbymania</h4>
              <p className="description">International klubturnering i Prag.</p>
              <a
                href="http://rugbymania.cz/"
                target="_blank"
                rel="noreferrer"
                className="link_to_event"
              >
                Link til begivenhed
              </a>
            </div>
          </article>
          <article className="calender_item shadow">
            <div className="item_date_wrapper">
              <h4 className="date">
                26. - 27.
                <br />
                August
                <br />
                2024
              </h4>
            </div>
            <div className="item_info_wrapper">
              <h4 className=" header_weight_400 title">DM</h4>
              <p className="description">DM i kørestolsrugby, Fredericia.</p>
              <a
                href="https://parasport.dk/aktiviteter/elite-events/dm-i-koerestolsrugby-2023/"
                target="_blank"
                rel="noreferrer"
                className="link_to_event"
              >
                Link til begivenhed
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
