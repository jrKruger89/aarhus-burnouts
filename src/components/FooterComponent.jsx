import React from "react";

export default function FooterComponent() {
  return (
    <footer>
      <div className="footer_container">
        <section className="info">
          <h2 className="footer_header">Århus Burnouts</h2>
          <h3>Kørestolsrugby i Århus</h3>
          <br />
          <p>
            Stensagerskolen
            <br />
            Janesvej 2<br />
            8220 Brabrand
            <br />
            <br />
            CVR: 88888888
          </p>
        </section>
        <section className="so_me">
          <div className="icons">
            <a
              href="https://www.facebook.com/aarhusburnouts"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-facebook-square" aria-hidden="true"></i>
            </a>

            <a
              href="https://www.instagram.com/aarhusburnouts/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.google.dk/maps/place/Stensagerskolen/@56.166467,10.1340184,17z/data=!3m1!4b1!4m6!3m5!1s0x464c154072553879:0xa6ec6146af356d69!8m2!3d56.166464!4d10.1365933!16s%2Fg%2F1hc61vmv1?entry=ttu"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-map-marker" aria-hidden="true"></i>
            </a>
            <a href="tel:+45-88-888-888">
              <i className="fa fa-phone" aria-hidden="true"></i>
            </a>
            <a href="mailto:someone@example.com">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </div>
        </section>
      </div>
      <p className="copyright">© 2023 Århus Burnouts</p>
    </footer>
  );
}
