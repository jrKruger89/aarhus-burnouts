import React from "react";

export default function Kalender() {
  return (
    <main>
      <section className="hero kalender_hero">
        <div className="hero_overlay">
          <h1 className="page_title">Kalender</h1>
        </div>
      </section>
      <section className="coming_events news info_section section_width_mobil">
        <h2 className="page_sub_header header_weight_400">
          Kommende begivenheder
        </h2>
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
            <p className="description">Verdens største klub turnering, Køln.</p>
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
      </section>
      <section className="done_events news info_section section_width_mobil">
        <h2 className="page_sub_header header_weight_400">
          Overståede begivenheder
        </h2>
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
            <h4 className=" header_weight_400 title">Bernd Best</h4>
            <p className="description">Verdens største klub turnering, Køln.</p>
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
      </section>
    </main>
  );
}
